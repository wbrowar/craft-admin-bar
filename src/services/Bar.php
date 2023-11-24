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
    // Public Methods
    // =========================================================================

    /**
     * TODO
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
            !Craft::$app->getRequest()->getIsPreview() &&
            !Craft::$app->getUser()->getIsGuest() &&
            (Craft::$app->getUser()->getIsAdmin() || Craft::$app->getUser()->checkPermission('accessCp'))
        );
    }
    /**
     * TODO
     *
     * From any other plugin file, call it like this:
     *
     *     AdminBar::$plugin->bar->render()
     *
     * @return mixed
     */
    public function render(array $config = [])
    {
        $settings = AdminBar::$plugin->getSettings();
        $config['customLinks'] = $settings['customLinks'] ?? [];
        $config['editLinkLabel'] = $config['editLinkLabel'] ?? null;
        $config['editLinkUrl'] = $config['editLinkUrl'] ?? null;
        $config['includeAssets'] = $config['includeAssets'] ?? true;

        if (key_exists('fixed', $config) || key_exists('sticky', $config)) {
            $config['fixed'] = $config['fixed'] ?? false;
            $config['sticky'] = $config['sticky'] ?? false;
        } else {
            $config['fixed'] = false;
            $config['sticky'] = true;
        }
        $config['fixed'] = key_exists('fixed', $config) || key_exists('sticky', $config) ? $config['fixed'] ?? false : false;
        $config['sticky'] = key_exists('fixed', $config) || key_exists('sticky', $config) ? $config['sticky'] ?? false : true;
        $config['useCss'] = key_exists('useCss', $config) ? $config['useCss'] : true;
        $config['useJs'] = key_exists('useJs', $config) ? $config['useJs'] : true;

        // Add config file settings to config
        $config['additionalLinks'] = $settings->additionalLinks;
        $config['displayDashboardLink'] = $settings->displayDashboardLink;
        $config['displayDefaultEditSection'] = $settings->displayDefaultEditSection;
        $config['displayGreeting'] = $settings->displayGreeting;
        $config['displayLogout'] = $settings->displayLogout;
        $config['displayGuideLink'] = $settings->displayGuideLink;
        $config['displaySettingsLink'] = $settings->displaySettingsLink && Craft::$app->getConfig()->getGeneral()->allowAdminChanges;

        $oldMode = Craft::$app->getView()->getTemplateMode();
        Craft::$app->getView()->setTemplateMode(View::TEMPLATE_MODE_CP);

         $assets = AdminBar::$plugin->getPathsToAssetFiles('admin-bar.ts');

//        Craft::dd($settings['customCss']);
         if (($assets['css'] ?? false) && $config['useCss']) {
             Craft::$app->getView()->registerCssFile($assets['css']);
         }
         if ($settings['customCss'] ?? false) {
             Craft::$app->getView()->registerCss($settings['customCss']);
         }
         if (($assets['js'] ?? false) && $config['useJs']) {
             Craft::$app->getView()->registerJsFile($assets['js'], ['type' => 'module']);
         }

        $html = Craft::$app->getView()->renderTemplate('admin-bar/bar', $config);
        Craft::$app->getView()->setTemplateMode($oldMode);

        return $html;
    }
}
