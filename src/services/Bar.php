<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar\services;

use Craft;
use craft\base\Component;
use craft\helpers\Html;
use craft\web\View;
use wbrowar\adminbar\AdminBar;
use wbrowar\adminbar\helpers\AdminBarAssetHelper;
use wbrowar\adminbar\helpers\AdminBarWidget;


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
     * Deprecated: use `canRender()` instead.
     *
     * @deprecated in 5.4.0
     * @return bool
     */
    public function canEmbed(): bool
    {
        Craft::$app->getDeprecator()->log(__METHOD__, 'Admin Bar’s `canEmbed()` method has been deprecated. Use `canRender()` instead.');

        return $this->canRender();
    }

    /**
     * Checks to see if Admin Bar should be rendered based on the type of request
     * and the permissions of the currently logged-in user.
     *
     *     AdminBar::$plugin->bar->canRender()
     *
     * @return bool
     */
    public function canRender(): bool
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
     * Render an Admin Bar based on the config params passed in, the settings saved
     * in the database, and the config options set in `config/admin-bar.php`
     *
     *     AdminBar::$plugin->bar->render()
     *
     * @param array $config An object of config options that can be passed into `{{ adminBar() }}`. See the README for a full list of config params.
     * @return string
     */
    public function render(array $config = []): string
    {
        try {
            $entry = $config['entry'] ?? null;

            $settings = AdminBar::$settings;
            $config['customLinks'] = $settings['customLinks'] ?? [];
            $config['editLinkLabel'] = $config['editLinkLabel'] ?? null;
            $config['editLinkUrl'] = $config['editLinkUrl'] ?? null;
            $config['includeAssets'] = $config['includeAssets'] ?? true;

            // Defaults `sticky` to `true` when `fixed` and `sticky` are not set.
            if (key_exists('fixed', $config) || key_exists('sticky', $config)) {
                $config['fixed'] = $config['fixed'] ?? false;
                $config['sticky'] = $config['sticky'] ?? false;
            } else {
                $config['fixed'] = false;
                $config['sticky'] = true;
            }
            $config['textElements'] = key_exists('textElements', $config) ? $config['textElements'] : [];
            $config['useCss'] = key_exists('useCss', $config) ? $config['useCss'] : true;
            $config['useJs'] = key_exists('useJs', $config) ? $config['useJs'] : true;

            // Get utilities notification count
            $config['utilitiesNotificationCount'] = 0;
            $userUtilities = Craft::$app->getUtilities()->getAuthorizedUtilityTypes();
            if (!empty($userUtilities)) {
                foreach ($userUtilities as $userUtility) {
                    $config['utilitiesNotificationCount'] += $userUtility::badgeCount();
                }
            }

            // Add config file settings to config
            $config['additionalLinks'] = $settings->additionalLinks;
            $config['displayDashboardLink'] = $settings->displayDashboardLink;
            $config['displayDefaultEditSection'] = $settings->displayDefaultEditSection;
            $config['displayGreeting'] = $settings->displayGreeting;
            $config['displayLogout'] = $settings->displayLogout;
            $config['displayGuideLink'] = $settings->displayGuideLink;
            $config['displayUtilitiesLink'] = $settings->displayUtilitiesLink && !empty($userUtilities);
            $config['displaySettingsLink'] = $settings->displaySettingsLink && Craft::$app->getConfig()->getGeneral()->allowAdminChanges;
            $config['mobileMode'] = $settings->mobileMode;
            $config['theme'] = $settings->theme;
            $config['toolbarToggle'] = $settings->toolbarToggle;
            $config['toolbarToggleDraggable'] = $settings->toolbarToggleDraggable;

            // Pro features
            $config['proEdition'] = AdminBar::$pro;
            $userWidgetsConfig = $config['widgets'] ?? [];
            $config['widgets'] = AdminBar::$pro ? AdminBarWidget::getAdminBarWidgets(true) ?? [] : [];
            $config['displayWidgetLabels'] = AdminBar::$pro ? $settings->displayWidgetLabels : false;
            $config['customWidgets'] = AdminBar::$pro ? $config['customWidgets'] ?? '' : '';
            $config['globalCustomWidgets'] = AdminBar::$pro ? $settings->customWidgets ?? '' : '';

            $config['enabledWidgets'] = [];
            if (AdminBar::$pro && !empty($config['widgets'])) {
                $config['widgetsConfig'] = AdminBarWidget::getWidgetConfigForEntry($entry, $settings, $config['widgets'], $userWidgetsConfig);
                $config['enabledWidgets'] = AdminBarWidget::getEnabledWidgets();
            }
            
            $oldMode = Craft::$app->getView()->getTemplateMode();
            Craft::$app->getView()->setTemplateMode(View::TEMPLATE_MODE_CP);

            AdminBarAssetHelper::registerAssetFiles($config['useCss'], $config['useJs']);

            $html = Craft::$app->getView()->renderTemplate('admin-bar/_bar', $config);
            Craft::$app->getView()->setTemplateMode($oldMode);
        } catch (\Throwable $e) {
            return $this->_error($e->getMessage(), 'error');
        }

        return $html;
    }

    /**
     * Renders an error message.
     *
     * @param string $error
     * @param string $errorClass
     * @return string
     */
    private function _error(string $error, string $errorClass): string
    {
        $icon = Html::tag('span', '', [
            'data' => [
                'icon' => 'alert',
            ]
        ]);
        $content = Html::tag('p', $icon . ' ' . Html::encode($error), [
            'class' => $errorClass,
        ]);

        return Html::tag('div', $content, [
            'class' => 'pane',
        ]);
    }
}
