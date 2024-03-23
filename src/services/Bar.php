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

use craft\base\UtilityInterface;
use craft\helpers\Html;
use wbrowar\adminbar\AdminBar;

use Craft;
use craft\base\Component;
use craft\web\View;


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
     * Checks to see if Admin Bar should be rendered based on the type of request
     * and the permissions of the currently logged-in user.
     *
     *     AdminBar::$plugin->bar->canEmbed()
     *
     * @return bool
     */
    public function canEmbed(): bool
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

            $oldMode = Craft::$app->getView()->getTemplateMode();
            Craft::$app->getView()->setTemplateMode(View::TEMPLATE_MODE_CP);

             $assets = AdminBar::$plugin->getPathsToAssetFiles('admin-bar.ts');

             if (($assets['css'] ?? false) && $config['useCss']) {
                 Craft::$app->getView()->registerCssFile($assets['css']);
             }
             if (($assets['js'] ?? false) && $config['useJs']) {
                 Craft::$app->getView()->registerJsFile($assets['js'], ['defer' => true, 'type' => 'module']);
             }

            $html = Craft::$app->getView()->renderTemplate('admin-bar/bar', $config);
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
