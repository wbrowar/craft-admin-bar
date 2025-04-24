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

        // Prepare arguments to pass into actions.
        $actionParams = [];
        if ($params['params'] ?? false) {
            $actionParams = json_decode($params['params']);
        }

        if ($params['requestHandle'] == 'blitz-refresh-cache') {
            /**
             * Refreshes the Blitz Cache based on the user’s Blitz settings.
             */
            $response = AdminBarWidget::performWidgetAction('blitz', 'refresh-cache', [
                'siteId' => $actionParams->siteId,
                'uri' => $actionParams->uri,
            ]);
        } elseif ($params['requestHandle'] == 'craft-search-search') {
            /**
             * Refreshes the Blitz Cache based on the user’s Blitz settings.
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
