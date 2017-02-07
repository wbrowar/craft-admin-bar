<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wb\adminbar\services;

use wb\adminbar\AdminBar;
use Mexitek\PHPColors\Color;

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
    private $_barEmbedded = false;

    // Public Methods
    // =========================================================================

    /**
     * This function can literally be anything you want, and you can have as many service
     * functions as you want
     *
     * From any other plugin file, call it like this:
     *
     *     AdminBar::$plugin->bar->exampleService()
     *
     * @return mixed
     */

    public function canEmbed():bool
    {
        return (
            !Craft::$app->getRequest()->getIsAjax() &&
            !Craft::$app->getRequest()->getIsConsoleRequest() &&
            !Craft::$app->getRequest()->getIsCpRequest() &&
            !Craft::$app->getUser()->getIsGuest()
        );
    }
    public function clearAdminBarCache()
    {
        $user = Craft::$app->getUser()->getIdentity();

        Craft::$app->getTemplateCaches()->deleteCachesByKey('adminbar' . $user->id);
    }
    public function render(array $config = [])
    {
        $settings = AdminBar::$plugin->getSettings();
        $config['barEmbedded'] = $this->_barEmbedded;
        $config['customLinks'] = $settings['customLinks'] ?? [];
        $config['bgColor'] = (!empty($config['bgColor'])
                ? $this->_getColorRgbString($config['bgColor']) : null)
            ?? (!empty($settings->bgColor)
                ? $this->_getColorRgbString($settings->bgColor) : null)
            ?? '0, 0, 0';
        $config['highlightColor'] = (!empty($config['highlightColor'])
                ? $this->_getColorRgbString($config['highlightColor']) : null)
            ?? (!empty($settings->highlightColor)
                ? $this->_getColorRgbString($settings->highlightColor) : null)
            ?? '218, 90, 71';
        $config['textColor'] = (!empty($config['textColor'])
                ? $this->_getColorRgbString($config['textColor']) : null)
            ?? (!empty($settings->textColor)
                ? $this->_getColorRgbString($settings->textColor) : null)
            ?? '255, 255, 255';

//        if (Craft::$app->requireEdition(Craft::Pro) === true) {
//            $config['localesEnabled'] = true;
//        } else {
//            $config['localesEnabled'] = false;
//        }

        // add config file settings to config
        $config['additionalLinks'] = $this->_getConfigSetting('additionalLinks');
        $config['cacheBar'] = $this->_getConfigSetting('cacheBar');
        $config['displayDashboardLink'] = $this->_getConfigSetting('displayDashboardLink');
        $config['displayGreeting'] = $this->_getConfigSetting('displayGreeting');
        $config['displayLogout'] = $this->_getConfigSetting('displayLogout');
        $config['displaySettingsLink'] = $this->_getConfigSetting('displaySettingsLink');
        $config['enableMobileMenu'] = $this->_getConfigSetting('enableMobileMenu');
        $config['scrollLinks'] = $this->_getConfigSetting('scrollLinks');

        $oldMode = Craft::$app->view->getTemplateMode();
        Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_CP);
        $html = Craft::$app->view->renderTemplate('adminbar/bar', $config);
        Craft::$app->view->setTemplateMode($oldMode);

        if (isset($config['type']) && $config['type'] === 'primary') {
            // TODO find replacement for includeFootHtml
            //craft()->templates->includeFootHtml($html);
            print($html);
        } else {
            print($html);
        }

        // change embedded value to true
        $this->_barEmbedded = true;
    }
    private function _getColorRgbString(string $cssColor):string
    {
        // convert color to RGB and return string that can be transparentized
        $color = new Color($cssColor);
        $colorRgb = $color->getRgb();
        return $colorRgb['R'] . ',' . $colorRgb['G'] . ',' . $colorRgb['B'];
    }
    private function _getConfigSetting(string $key)
    {
        // get settings from config file
        $configSetting = Craft::$app->config->get($key, 'adminbar');
        return $configSetting;
    }
}
