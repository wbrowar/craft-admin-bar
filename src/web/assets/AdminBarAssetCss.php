<?php

namespace wbrowar\adminbar\web\assets;

use craft\web\AssetBundle;

/**
 * Admin Bar asset bundle
 */
class AdminBarAssetCss extends AssetBundle
{
    public function init(): void
    {
        $this->css = ['admin-bar.css'];
        $this->sourcePath = '@wbrowar/adminbar/web/assets/dist/assets';

        parent::init();
    }
}
