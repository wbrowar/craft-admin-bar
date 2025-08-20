<?php

namespace wbrowar\adminbar\helpers;

use Craft;
use craft\helpers\App;
use wbrowar\adminbar\web\assets\AdminBarAssetCss;
use wbrowar\adminbar\web\assets\AdminBarAssetJs;

class AdminBarAssetHelper
{
    /**
     * When in local development mode, register the Vite dev server.
     * Otherwise, register the asset bundles.
     *
     * @param bool $useCss Registers CSS stylesheet asset bundle.
     * @param bool $useJs Registers JavaScript asset bundle.
     * @return void
     * @throws \yii\base\InvalidConfigException
     */
    public static function registerAssetFiles(bool $useCss = false, bool $useJs = false): void
    {
        if (App::parseEnv('$VITE_ADMIN_BAR_HMR')) {
            Craft::$app->getView()->registerJsFile('http://localhost:3300/admin-bar.ts', ['defer' => true, 'type' => 'module']);
        } else {
            if ($useCss) {
                Craft::$app->getView()->registerAssetBundle(AdminBarAssetCss::class);
            }
            if ($useJs) {
                Craft::$app->getView()->registerAssetBundle(AdminBarAssetJs::class);
            }
        }
    }
}