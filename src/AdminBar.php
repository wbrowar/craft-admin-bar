<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar;

use craft\events\PluginEvent;
use craft\services\Plugins;
use wbrowar\adminbar\assetbundles\AdminBar\AdminBarAsset;
use wbrowar\adminbar\twigextensions\AdminBarTwigExtension;
use wbrowar\adminbar\models\Settings;

use Craft;
use craft\base\Plugin;
use craft\web\View;

use yii\base\Event;

/**
 * Craft plugins are very much like little applications in and of themselves. We’ve made
 * it as simple as we can, but the training wheels are off. A little prior knowledge is
 * going to be required to write a plugin.
 *
 * For the purposes of the plugin docs, we’re going to assume that you know PHP and SQL,
 * as well as some semi-advanced concepts like object-oriented programming and PHP namespaces.
 *
 * https://craftcms.com/docs/plugins/introduction
 *
 * @author    Will Browar
 * @package   AdminBar
 * @since     3.0.1
 *
 * @property  AdminBarServiceService $adminBarService
 */
class AdminBar extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
     * Static property that is an instance of this plugin class so that it can be accessed via
     * AdminBar::$plugin
     *
     * @var AdminBar
     */
    public static $plugin;

    public $adminBarWidgets = [[
        'description' => 'Finds all Edit Links on the page and lists them out for quick access.',
        'handle' => 'edit-links',
        'iconPath' => 'icon-mask.svg',
        'layout' => 'center',
        'name' => 'Edit Links',
        'template' => 'admin-bar/adminbar_widget_edit_links',
    ]];

    // Public Methods
    // =========================================================================

    /**
     * Set our $plugin static property to this class so that it can be accessed via
     * AdminBar::$plugin
     *
     * Called after the plugin class is instantiated; do any one-time initialization
     * here such as hooks and events.
     *
     * If you have a '/vendor/autoload.php' file, it will be loaded for you automatically;
     * you do not need to load it in your init() method.
     *
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        // Add in our Twig extensions
        Craft::$app->view->registerTwigExtension(new AdminBarTwigExtension());

        Event::on(View::class, View::EVENT_BEFORE_RENDER_TEMPLATE, function() {
            $settings = $this->getSettings();
            $view = Craft::$app->getView();

            // Add Admin Bar CSS and user Custom CSS to CP
            if ($view->getTemplateMode() === View::TEMPLATE_MODE_CP && (Craft::$app->request->getPathInfo() === 'settings' || Craft::$app->request->getPathInfo() === 'settings/plugins')) {
                $view->registerAssetBundle(AdminBarAsset::class);
                $view->registerCss($settings->customCss);
            }
        });

        Event::on(Plugins::class, Plugins::EVENT_BEFORE_SAVE_PLUGIN_SETTINGS, function() {
            // Remove duplicate links that appear upon save
            AdminBar::$plugin->setSettings(['additionalLinks' => []]);
        });

/**
 * Logging in Craft involves using one of the following methods:
 *
 * Craft::trace(): record a message to trace how a piece of code runs. This is mainly for development use.
 * Craft::info(): record a message that conveys some useful information.
 * Craft::warning(): record a warning message that indicates something unexpected has happened.
 * Craft::error(): record a fatal error that should be investigated as soon as possible.
 *
 * Unless `devMode` is on, only Craft::warning() & Craft::error() will log to `craft/storage/logs/web.log`
 *
 * It's recommended that you pass in the magic constant `__METHOD__` as the second parameter, which sets
 * the category to the method (prefixed with the fully qualified class name) where the constant appears.
 *
 * To enable the Yii debug toolbar, go to your user account in the AdminCP and check the
 * [] Show the debug toolbar on the front end & [] Show the debug toolbar on the Control Panel
 *
 * http://www.yiiframework.com/doc-2.0/guide-runtime-logging.html
 */
        Craft::info(
            Craft::t(
                'admin-bar',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================

    /**
     * Creates and returns the model used to store the plugin’s settings.
     *
     * @return \craft\base\Model|null
     */
    protected function createSettingsModel()
    {
        return new Settings();
    }

    /**
     * Returns the rendered settings HTML, which will be inserted into the content
     * block on the settings page.
     *
     * @return string The rendered settings HTML
     */
    protected function settingsHtml(): string
    {
        //AdminBar::$plugin->bar->clearAdminBarCache();

        $settings = $this->getSettings();

        // Create one empty table row if non are present
        if (empty($settings->customLinks)) {
            $settings['customLinks'] = [['','',0]];
        }

        $adminBarWidgets = AdminBar::$plugin->bar->getAdminBarWidgetsFromPlugins();

        return Craft::$app->view->renderTemplate(
            'admin-bar/settings',
            [
                'widgets'  => $adminBarWidgets,
                'settings' => $settings
            ]
        );
    }
}
