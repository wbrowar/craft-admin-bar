<?php

namespace wbrowar\adminbar\web\assets;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use wbrowar\adminbar\helpers\AdminBarAsset;

/**
 * Admin Bar asset bundle
 */
class AdminBarAssetJs extends AssetBundle
{
    public function init(): void
    {
        $this->depends = [CpAsset::class];
        $this->sourcePath = '@wbrowar/adminbar/web/assets/dist/assets';
        $this->jsOptions = ['defer' => true, 'type' => 'module'];

        $assets = AdminBarAsset::getPathsToAssetFiles('admin-bar.ts');

        $this->js = [$assets['js']['filename']] ?? [];

        parent::init();
    }
}
