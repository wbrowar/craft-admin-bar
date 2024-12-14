<?php
/**
 * Admin Bar plugin for Craft CMS 4.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar;

use Craft;
use craft\base\Model;
use craft\base\Plugin;
use craft\helpers\App;
use craft\helpers\Json;
use wbrowar\adminbar\models\Settings;
use wbrowar\adminbar\services\Bar;
use wbrowar\adminbar\twigextensions\AdminBarTwigExtension;

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
 * @property Bar $bar
 * @method Settings getSettings()
 */
class AdminBar extends Plugin
{
    // Constants
    // =========================================================================
    const EDITION_LITE = 'lite';
    const EDITION_PRO = 'pro';

    // Static Properties
    // =========================================================================

    /**
     * @var bool
     */
    public static $pro;

    /**
     * Static property that is an instance of this plugin class so that it can be accessed via
     * AdminBar::$plugin
     *
     * @var AdminBar|null
     */
    public static ?AdminBar $plugin;
    
    /**
     * @var ?Settings
     */
    public static ?Settings $settings = null;

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
    public function init(): void
    {
        parent::init();
        self::$plugin = $this;
        self::$pro = self::$plugin->is(AdminBar::EDITION_PRO);
        self::$settings = self::$plugin->getSettings();

        // Add our services
        $this->setComponents([
            "bar" => "wbrowar\adminbar\services\Bar"
        ]);

        // Add in our Twig extensions
        Craft::$app->view->registerTwigExtension(new AdminBarTwigExtension());

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

    /**
     * @inheritdoc
     */
    public static function editions(): array
    {
        return [
            self::EDITION_LITE,
            self::EDITION_PRO,
        ];
    }

    // Private Methods
    // =========================================================================

    /**
     * List of plugins installed in same project that can be used as Admin Bar Widgets.
     * Strings are formatted in `handle-version`.
     * The version number is pulled from the plugin version that is supported for a widget’s features.
     *
     * @return string[]
     */
    public function widgetPlugins(): array
    {
        $plugins = [
            'blitz' => [
                'name' => 'Blitz',
                'widgetDescription' => Craft::t('admin-bar', 'Displays cache status for the current page.'),
                'version' => null
            ],
            'guide' => [
                'name' => 'Guide',
                'widgetDescription' => Craft::t('admin-bar', 'Displays all of the guides for the current page entry.'),
                'version' => null
            ],
            'seomatic' => [
                'name' => 'Seomatic',
                'widgetDescription' => Craft::t('admin-bar', 'Displays meta details for the current page.'),
                'version' => null
            ],
            'view-count' => [
                'name' => 'View Count',
                'widgetDescription' => Craft::t('admin-bar', 'Displays number of times the current page has been viewed.'),
                'version' => null
            ],
            'workflow' => [
                'name' => 'Workflow',
                'widgetDescription' => Craft::t('admin-bar', 'Displays workflow status for the current page.'),
                'version' => null
            ],
        ];

        if (Craft::$app->getPlugins()->isPluginInstalled('blitz')) {
            $pluginHandle = 'blitz';
            $plugin = Craft::$app->getPlugins()->getPlugin($pluginHandle);
            $plugins[$pluginHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($pluginHandle);
            $plugins[$pluginHandle]['name'] = $plugin->name;
            $plugins[$pluginHandle]['version'] = version_compare($plugin->getVersion(), '5.9.0', '>=') ? '5.9.0' : null;
        }
        if (Craft::$app->getPlugins()->isPluginInstalled('guide')) {
            $pluginHandle = 'guide';
            $plugin = Craft::$app->getPlugins()->getPlugin($pluginHandle);
            $plugins[$pluginHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($pluginHandle);
            $plugins[$pluginHandle]['name'] = $plugin->name;
            $plugins[$pluginHandle]['version'] = version_compare($plugin->getVersion(), '5.2.0', '>=') ? '5.2.0' : null;
        }
        if (Craft::$app->getPlugins()->isPluginInstalled('seomatic')) {
            $pluginHandle = 'seomatic';
            $plugin = Craft::$app->getPlugins()->getPlugin($pluginHandle);
            $plugins[$pluginHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($pluginHandle);
            $plugins[$pluginHandle]['name'] = $plugin->name;
            $plugins[$pluginHandle]['version'] = version_compare($plugin->getVersion(), '5.1.0', '>=') ? '5.1.0' : null;
        }
        if (Craft::$app->getPlugins()->isPluginInstalled('view-count')) {
            $pluginHandle = 'view-count';
            $plugin = Craft::$app->getPlugins()->getPlugin($pluginHandle);
            $plugins[$pluginHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($pluginHandle);
            $plugins[$pluginHandle]['name'] = $plugin->name;
            $plugins[$pluginHandle]['version'] = version_compare($plugin->getVersion(), '2.0.0', '>=') ? '2.0.0' : null;
        }
        if (Craft::$app->getPlugins()->isPluginInstalled('workflow')) {
            $pluginHandle = 'workflow';
            $plugin = Craft::$app->getPlugins()->getPlugin($pluginHandle);
            $plugins[$pluginHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($pluginHandle);
            $plugins[$pluginHandle]['name'] = $plugin->name;
            $plugins[$pluginHandle]['version'] = version_compare($plugin->getVersion(), '3.0.0', '>=') ? '3.0.0' : null;
        }

        return $plugins;
    }

    // Protected Methods
    // =========================================================================

    /**
     * Creates and returns the model used to store the plugin’s settings.
     *
     * @return Model|null
     */
    protected function createSettingsModel(): ?Model
    {
        return new Settings();
    }

    /**
     * Returns the rendered settings HTML, which will be inserted into the content
     * block on the settings page.
     *
     * @return string|null The rendered settings HTML
     */
    protected function settingsHtml(): ?string
    {
        // Create one empty table row if non are present
        if (empty(self::$settings->customLinks)) {
            self::$settings['customLinks'] = [['','',0]];
        }

        return Craft::$app->view->renderTemplate(
            'admin-bar/_settings',
            [
                'settings' => self::$settings,
                'widgetPlugins' => $this->widgetPlugins() ?? [],
            ]
        );
    }

    // Public Methods
    // =========================================================================

    /**
     * Get paths of all JS and CSS files generated by Vite
     *
     * @param string $filename The name of the Vite entry file, usually 'main.ts'
     * @return array
     */
    public function getPathsToAssetFiles(string $filename): array
    {
        $assetPaths = [
            'css' => '',
            'js' => '',
        ];

        // testinggg
        if (App::parseEnv('$VITE_ADMIN_BAR_HMR')) {
            return [
                'css' => '',
                'js' => 'http://localhost:3300/' . $filename,
            ];
        }

        $manifestPath = self::$plugin->getBasePath() . '/assetbundles/dist/.vite/manifest.json';

        if (file_exists($manifestPath)) {
            $manifestJson = file_get_contents($manifestPath);

            if (!empty($manifestJson)) {
                $manifest = Json::decodeIfJson($manifestJson);

                if (!empty($manifest) && $manifest[$filename]) {
                    $path = Craft::$app->getAssetManager()->getPublishedUrl('@wbrowar/adminbar/assetbundles/dist/', true);

                    if (!empty($path)) {
                        if ($manifest[$filename]['css'] ?? false) {
                            $assetPaths['css'] = $path . '/' . $manifest[$filename]['css'][0];
                        }
                        if ($manifest[$filename]['file'] ?? false) {
                            $assetPaths['js'] = $path . '/' . $manifest[$filename]['file'];
                        }
                    }
                }
            }
        }

        return $assetPaths;
    }
}
