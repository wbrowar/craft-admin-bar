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
class AdminBarTwigExtension extends \Twig_Extension
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
            new \Twig_SimpleFunction('adminbar', [$this, 'adminBar']),
            new \Twig_SimpleFunction('editlink', [$this, 'editLink']),
        ];
    }

    /**
     * Our function called via Twig; it can do anything you want
     *
     * @param null $text
     *
     * @return string
     */
    public function adminBar(array $config = [])
    {
        if (AdminBar::$plugin->bar->canEmbed()) {
            if (!isset($config['entry']) && !isset($config['url'])) {
                // get current page element
                $element = Craft::$app->urlManager->getMatchedElement();

                if (!empty($element)) {
                    //$element->
                    if ($element instanceof craft\elements\Entry) {
                        $config['entry'] = $element;
                    } elseif ($element instanceof craft\elements\Category) {
                        $config['category'] = $element;
                    }
                }
            }

            // show admin bar in template
            print AdminBar::$plugin->bar->render($config);
        }

        return false;
    }

    public function editLink(array $config = [])
    {
        // deprecate color argument and migrate it to highlightColor
        if ($config['color'] ?? false) {
            $config['highlightColor'] = $config['color'];
        }

        // embed admin bar in twig template
        return AdminBar::$plugin->editLinks->render($config);
    }
}
