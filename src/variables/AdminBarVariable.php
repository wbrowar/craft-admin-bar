<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wb\adminbar\variables;

use wb\adminbar\AdminBar;

use Craft;

/**
 * Admin Bar Variable
 *
 * Craft allows plugins to provide their own template variables, accessible from
 * the {{ craft }} global variable (e.g. {{ craft.adminBar }}).
 *
 * https://craftcms.com/docs/plugins/variables
 *
 * @author    Will Browar
 * @package   AdminBar
 * @since     3.0.0
 */
class AdminBarVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Whatever you want to output to a Twig tempate can go into a Variable method.
     * You can have as many variable functions as you want.  From any Twig template,
     * call it like this:
     *
     *     {{ craft.adminBar.exampleVariable }}
     *
     * Or, if your variable requires parameters from Twig:
     *
     *     {{ craft.adminBar.exampleVariable(twigValue) }}
     *
     * @param null $optional
     * @return string
     */
    public function bar(array $config = array())
    {
        // deprecate color argument and migrate it to highlightColor
        if ($config['color'] ?? false) {
            $config['highlightColor'] = $config['color'];
        }

        // embed admin bar in twig template
        return AdminBar::$plugin->bar->render($config);
    }
    public function canEmbed()
    {
        // embed admin bar in twig template
        return AdminBar::$plugin->bar->canEmbed();
    }
    public function edit(string $entryOrString, array $config = array())
    {
        // embed admin bar in twig template
        return AdminBar::$plugin->editLinks->render($entryOrString, $config);
    }
}
