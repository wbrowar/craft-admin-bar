<?php

namespace wbrowar\adminbar\controllers;

use Craft;
use craft\web\Controller;
use wbrowar\adminbar\helpers\AdminBarWidget;
use yii\web\Response;

/**
 * Admin Bar controller
 */
class AdminBarController extends Controller
{
    public $defaultAction = 'index';
    protected array|int|bool $allowAnonymous = self::ALLOW_ANONYMOUS_NEVER;

    /**
     * admin-bar/admin-bar action
     */
    public function actionIndex(): Response
    {
        $params = Craft::$app->getRequest()->getBodyParams();
        $results = [
            'message' => Craft::t('admin-bar', 'Controller action was not valid.'),
            'status' => 'error',
        ];
        $user = self::currentUser();

        // Prepare arguments to pass into actions.
        $actionParams = [];
        if ($params['params'] ?? false) {
            $actionParams = json_decode($params['params']);
        }

        if ($params['requestHandle'] == 'admin-bar-debug-toolbar-toggle') {
            /**
             * Toggle the front-end debug toolbar for the current user.
             */
            if (Craft::$app->getUser()->getIsAdmin()) {
                $preferences = $user->getPreferences();
                $preferences['enableDebugToolbarForSite'] = !$preferences['enableDebugToolbarForSite'];
                Craft::$app->getUsers()->saveUserPreferences($user, $preferences);
            }
            
            $response = [
                'data' => Craft::$app->getUser()->getIdentity()->getPreference('enableDebugToolbarForSite'),
                'message' => Craft::t('admin-bar', 'Debug toolbar toggled.'),
                'refreshPage' => true,
                'status' => 'success',
            ];
        } elseif ($params['requestHandle'] == 'blitz-refresh-cache') {
            /**
             * Refreshes the Blitz Cache based on the user’s Blitz settings.
             */
            $response = AdminBarWidget::performWidgetAction('blitz', 'refresh-cache', [
                'siteId' => $actionParams->siteId,
                'uri' => $actionParams->uri,
            ]);
        } elseif ($params['requestHandle'] == 'craft-search-search') {
            /**
             * Search for entries that have URLs.
             */
            if (isset($actionParams->query)) {
                $response = AdminBarWidget::performWidgetAction('craft-search', 'search', ['query' => $actionParams->query]);
            } else {
                $results['message'] = Craft::t('admin-bar', 'Search query was not provided');
            }
        }

        if (isset($response)) {
            $results = [
                'data' => $response['data'] ?? [],
                'message' => $response['message'],
                'refreshPage' => $response['refreshPage'] ?? false,
                'status' => $response['status'],
            ];
        }
        
        return $this->asJson($results);
    }
}
