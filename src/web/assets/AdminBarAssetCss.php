<?php

namespace wbrowar\adminbar\web\assets;

use craft\web\AssetBundle;
use wbrowar\adminbar\helpers\AdminBarAsset;

/**
 * Admin Bar asset bundle
 */
class AdminBarAssetCss extends AssetBundle
{
    public function init(): void
    {
        $this->sourcePath = '@wbrowar/adminbar/web/assets/dist/assets';

        $assets = AdminBarAsset::getPathsToAssetFiles('admin-bar.ts');

        $this->css = [$assets['css']['filename']] ?? [];

        parent::init();
    }
}
