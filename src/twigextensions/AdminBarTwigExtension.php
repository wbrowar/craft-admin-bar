<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar\twigextensions;

use wbrowar\adminbar\AdminBar;

use Craft;

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
     * @return string The extension name
     */
    public function getName()
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
    public function getFunctions()
    {
        return [
            new \Twig\TwigFunction('adminBar', [$this, 'adminBar']),
            new \Twig\TwigFunction('adminbar', [$this, 'adminBarLegacy']),
            new \Twig\TwigFunction('adminBarCssFile', [$this, 'adminBarCssFile']),
            new \Twig\TwigFunction('adminBarJsFile', [$this, 'adminBarJsFile']),
        ];
    }

    /**
     * TODO
     *
     * @param null $text
     *
     * @return string
     */
    public function adminBarLegacy(array $config = []):string
    {
        Craft::$app->getDeprecator()->log(__METHOD__, 'The `adminbar()` Twig method has been deprecated and will be removed in Admin Bar 5.0. Use `adminBar()` instead.');

        return $this->adminBar($config);
    }
    public function adminBar(array $config = []):string
    {
        if (AdminBar::$plugin->bar->canEmbed() || ($config['force'] ?? false)) {
            if (!isset($config['entry']) && !isset($config['url'])) {
                // get current page element
                $element = Craft::$app->urlManager->getMatchedElement();

                if (!empty($element)) {
                    if ($element instanceof craft\elements\Entry) {
                        $config['entry'] = $element;
                    }
                }
            }

            // show admin bar in template
            print AdminBar::$plugin->bar->render($config);
        }

        return false;
    }

    public function adminBarCssFile():string | null
    {
        $assets = AdminBar::$plugin->getPathsToAssetFiles('admin-bar.ts');

        return $assets['css'] ?? null;
    }

    public function adminBarJsFile():string | null
    {
        $assets = AdminBar::$plugin->getPathsToAssetFiles('admin-bar.ts');

        return $assets['js'] ?? null;
    }
}
