<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar\assetbundles\AdminBar;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * AdminBarAsset AssetBundle
 *
 * AssetBundle represents a collection of asset files, such as CSS, JS, images.
 *
 * Each asset bundle has a unique name that globally identifies it among all asset bundles used in an application.
 * The name is the [fully qualified class name](http://php.net/manual/en/language.namespaces.rules.php)
 * of the class representing it.
 *
 * An asset bundle can depend on other asset bundles. When registering an asset bundle
 * with a view, all its dependent asset bundles will be automatically registered.
 *
 * http://www.yiiframework.com/doc-2.0/guide-structure-assets.html
 *
 * @author    Will Browar
 * @package   AdminBar
 * @since     3.0.1
 */
class AdminBarAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * Initializes the bundle.
     */
    public function init()
    {
        // define the path that your publishable resources live
        $this->sourcePath = "@wbrowar/adminbar/assetbundles/adminbar/dist";

        // define the relative path to CSS/JS files that should be registered with the page
        // when this asset bundle is registered
        $this->js = [
            'js/adminbar.js',
        ];

        $this->css = [
            'css/adminbar.css',
        ];

        parent::init();
    }
}
