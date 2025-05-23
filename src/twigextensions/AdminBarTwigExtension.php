<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar\twigextensions;

use Craft;
use craft\elements\Entry;
use wbrowar\adminbar\AdminBar;

/**
 * Twig can be extended in many ways; you can add extra tags, filters, tests, operators,
 * global variables, and functions. You can even extend the parser itself with
 * node visitors.
 *
 * http://twig.sensiolabs.org/doc/advanced.html
 *
 * @author    Will Browar
 * @package   AdminBar
 * @since     3.0.1
 */
class AdminBarTwigExtension extends \Twig\Extension\AbstractExtension
{
    // Public Methods
    // =========================================================================

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name.
     */
    public function getName(): string
    {
        return 'AdminBar';
    }

    /**
     * Returns an array of Twig functions, used in Twig templates via:
     *
     *      {% set this = someFunction('something') %}
     *
    * @return array
     */
    public function getFunctions(): array
    {
        return [
            new \Twig\TwigFunction('adminBar', [$this, 'adminBar']),
            new \Twig\TwigFunction('adminBarCanRender', [$this, 'adminBarCanRender']),
            new \Twig\TwigFunction('adminBarCssFile', [$this, 'adminBarCssFile']),
            new \Twig\TwigFunction('adminBarJsFile', [$this, 'adminBarJsFile']),
            new \Twig\TwigFunction('adminBarOnPageCss', [$this, 'adminBarOnPageCss']),
        ];
    }

    /**
     * Renders the Admin Bar after checking to see if it can be rendered on the page.
     *
     * @param array $config An object of config options that can be passed into `{{ adminBar() }}`. See the README for a full list of config params.
     * @return string
     */
    public function adminBar(array $config = []): string | null
    {
        if (AdminBar::$plugin->bar->canRender() || ($config['force'] ?? false)) {
            if (!isset($config['entry']) && !isset($config['url'])) {
                // Get the current page element
                $element = Craft::$app->getUrlManager()->getMatchedElement();

                if (!empty($element)) {
                    if ($element instanceof Entry) {
                        $config['entry'] = $element;
                    }
                }
            }

            // Show admin bar in template
            print AdminBar::$plugin->bar->render($config);
        }

        return null;
    }

    /**
     * Lets you check to see if Admin Bar can be rendered before loading assets.
     *
     * @return bool
     */
    public function adminBarCanRender(): bool
    {
        return AdminBar::$plugin->bar->canRender();
    }

    /**
     * Returns the path to Admin Bar’s CSS File.
     *
     * @param array $config An object of config options that can be passed into `{{ adminBarCssFile() }}`.
     * @return string | null
     */
    public function adminBarCssFile(array $config = ['contents' => false]): string | null
    {
        $assets = AdminBar::$plugin->getPathsToAssetFiles('admin-bar.ts');

        if ($config['contents'] ?? false) {
            $glob = glob(AdminBar::$plugin->getBasePath() . '/assetbundles/dist/assets/admin-bar-*.css');
            return file_get_contents($glob[0] ?? null);
        }

        return $assets['css'] ?? null;
    }

    /**
     * Returns the path to Admin Bar’s JavaScript File.
     *
     * @param array $config An object of config options that can be passed into `{{ adminBarJsFile() }}`.
     * @return string | null
     */
    public function adminBarJsFile(array $config = ['contents' => false]): string | null
    {
        $assets = AdminBar::$plugin->getPathsToAssetFiles('admin-bar.ts');

        if ($config['contents'] ?? false) {
            $glob = glob(AdminBar::$plugin->getBasePath() . '/assetbundles/dist/assets/admin-bar-*.js');
            return file_get_contents($glob[0] ?? null);
        }

        return $assets['js'] ?? null;
    }

    /**
     * CSS that tweaks the look of Admin Bar and loads Custom CSS from Amdin Bar plugin settings.
     *
     * @return string | null
     */
    public function adminBarOnPageCss(): string | null
    {
        $settings = AdminBar::$plugin->getSettings();

        return '@layer admin-bar {
            admin-bar {
                &:not(:defined) {
                    display: block;
                    height: var(--admin-bar-height, 43px);
                    
                    & > * {
                        display: none;
                    }
                }
            }
        }' . "\n" . ($settings['customCss'] ?? '');
    }
}
