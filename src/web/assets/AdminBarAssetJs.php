<?php

namespace wbrowar\adminbar\web\assets;

use craft\web\AssetBundle;

/**
 * Admin Bar asset bundle
 */
class AdminBarAssetJs extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init(): void
    {
        $this->js = ['admin-bar.js'];
        $this->jsOptions = ['defer' => true, 'type' => 'module'];
        $this->sourcePath = '@wbrowar/adminbar/web/assets/dist/assets';

        parent::init();
    }
}
