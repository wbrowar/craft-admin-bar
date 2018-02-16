<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar\services;

use wbrowar\adminbar\events\AdminBarRenderEvent;
use wbrowar\adminbar\AdminBar;

use Craft;
use craft\base\Component;
use craft\elements\Category;
use craft\elements\Entry;
use craft\web\View;
use yii\base\Event;


/**
 * Bar Service
 *
 * All of your plugin’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other plugins can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Will Browar
 * @package   AdminBar
 * @since     3.0.0
 */
class Bar extends Component
{
    const EVENT_ADMIN_BAR_BEFORE_RENDER = 'adminBarBeforeRender';

    public $templateCss = '';
    public $templateJs = '';

    // Public Methods
    // =========================================================================

    /**
     * This function can literally be anything you want, and you can have as many service
     * functions as you want
     *
     * From any other plugin file, call it like this:
     *
     *     AdminBar::$plugin->bar->canEmbed()
     *
     * @return mixed
     */

    public function canEmbed():bool
    {
        return (
            !Craft::$app->getRequest()->getIsAjax() &&
            !Craft::$app->getRequest()->getIsConsoleRequest() &&
            !Craft::$app->getRequest()->getIsCpRequest() &&
            !Craft::$app->getRequest()->getIsLivePreview() &&
            !Craft::$app->getUser()->getIsGuest() &&
            (Craft::$app->getUser()->getIsAdmin() || Craft::$app->getUser()->checkPermission('accessCp'))
        );
    }
    public function clearAdminBarCache()
    {
        $user = Craft::$app->getUser()->getIdentity();

        Craft::$app->getTemplateCaches()->deleteCachesByKey('adminbar' . $user->id);
    }
    public function getAdminBarWidgetsFromPlugins():array
    {
        $widgets = [];
        $plugins = Craft::$app->plugins->getAllPlugins();

        foreach ($plugins as $plugin) {
            if ($plugin->adminBarWidgets ?? false) {
                foreach ($plugin->adminBarWidgets as $widget) {
                    $enabled = $widget['enabled'] ?? true;

                    if (
                        $enabled &&
                        ($widget['handle'] ?? false) &&
                        ($widget['template'] ?? false)
                    ) {
                        $widgets[] = [
                            'id' => $plugin->handle . '_' . $widget['handle'],
                            'description' => $widget['description'] ?? null,
                            'handle' => $widget['handle'],
                            'iconPath' => $plugin->basePath . '/' . $widget['iconPath'],
                            'layout' => $widget['layout'] ?? 'columns_12',
                            'name' => $widget['name'],
                            'pluginHandle' => $plugin->handle,
                            'pluginName' => $plugin->name,
                            'template' => $widget['template'],
                        ];
                    }
                }
            }
        }

        return $widgets;
    }
    public function getActiveAdminBarWidgets():array
    {
        $widgets = [];

        $settings = AdminBar::$plugin->getSettings();
        $widgetsFromPlugins = $this->getAdminBarWidgetsFromPlugins();

        foreach($widgetsFromPlugins as $pluginWidget) {
            $id = $pluginWidget['pluginHandle'] . '_' . $pluginWidget['handle'];
            $enabled = $pluginWidget['enabled'] ?? true;
            if ($enabled && ($settings['widgets'][$id] ?? false) && $settings['widgets'][$id] === 1) {
                $widgets[] = $pluginWidget;
            }
        }

        return $widgets;
    }
    public function render(array $config = [])
    {
        $settings = AdminBar::$plugin->getSettings();
        $config['customLinks'] = $settings['customLinks'] ?? [];
        $config['customCss'] = $settings['customCss'] ?? '';
        $config['includeAssets'] = $config['includeAssets'] ?? true;

        // add config file settings to config
        $config['additionalLinks'] = $settings->additionalLinks;
        $config['displayDashboardLink'] = $settings->displayDashboardLink;
        $config['displayDefaultEditSection'] = $settings->displayDefaultEditSection;
        $config['displayGreeting'] = $settings->displayGreeting;
        $config['displayLogout'] = $settings->displayLogout;
        $config['displaySettingsLink'] = $settings->displaySettingsLink;
        $config['enableMobileMenu'] = $settings->enableMobileMenu;

        // give plugins a chance to disable or modify their widgets
        $this->trigger(self::EVENT_ADMIN_BAR_BEFORE_RENDER, new AdminBarRenderEvent([
            'category' => $config['category'] ?? null,
            'entry' => $config['entry'] ?? null,
        ]));

        // get Admin Bar widgets
        $config['widgets'] = $this->getActiveAdminBarWidgets();

        $oldMode = Craft::$app->view->getTemplateMode();
        Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_CP);
        $html = Craft::$app->view->renderTemplate('admin-bar/bar', $config);
        Craft::$app->view->setTemplateMode($oldMode);

        return $html;
    }
    public function renderAdminBarForUri(string $uri, array $config = []):string
    {
        if (Craft::$app->getUser()->getIsAdmin() || Craft::$app->getUser()->checkPermission('accessCp')) {
            if (substr($uri, 0, 1) === '/') {
                $uri = substr($uri, 1);
            }
            if ($uri === '') {
                $uri = '__home__';
            }
            $entry = Entry::find()
                ->uri($uri)
                ->one();

            if ($entry) {
                $config['entry'] = $entry;
            } else {
                $category = Category::find()
                    ->uri($uri)
                    ->one();

                if ($category) {
                    $config['category'] = $category;
                }
            }

            $config['includeAssets'] = $config['includeAssets'] ?? false;

            return AdminBar::$plugin->bar->render($config);
        }

        return '';
    }
}
