<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar\controllers;

use Craft;
use craft\helpers\Json;
use craft\web\Controller;
use wbrowar\adminbar\AdminBar;
use yii\web\User;

/**
 * Default Controller
 *
 * Generally speaking, controllers are the middlemen between the front end of
 * the CP/website and your plugin’s services. They contain action methods which
 * handle individual tasks.
 *
 * A common pattern used throughout Craft involves a controller action gathering
 * post data, saving it on a model, passing the model off to a service, and then
 * responding to the request appropriately depending on the service method’s response.
 *
 * Action methods begin with the prefix “action”, followed by a description of what
 * the method does (for example, actionSaveIngredient()).
 *
 * https://craftcms.com/docs/plugins/controllers
 *
 * @author    Will Browar
 * @package   AdminBar
 * @since     3.0.1
 */
class BarController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = true;

    public $enableCsrfValidation = false;

    // Public Methods
    // =========================================================================

    /**
     * Handle a request going to our plugin's index action URL,
     * e.g.: actions/admin-bar/bar
     *
     * @return mixed
     */
    public function actionIndex()
    {
        $result = [
            'content' => false,
            'response' => 'error',
        ];

        $params = Json::decode(Craft::$app->request->getRawBody());
        //$includeAssets = $params['includeAssets'] ?? false;
        $uri = $params['uri'];

        if (($uri ?? false)) {
            $config = ['includeAssets' => false];

            $result['content'] = AdminBar::$plugin->bar->renderAdminBarForUri($uri, $config);
            if (!empty($result['content'])) {
                $result['response'] = 'success';
            }
        }

        return $this->asJson($result);
    }
}
