<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar\models;

//use wbrowar\adminbar\AdminBar;

//use Craft;
use craft\base\Model;

/**
 * AdminBar Settings Model
 *
 * This is a model used to define the plugin's settings.
 *
 * Models are containers for data. Just about every time information is passed
 * between services, controllers, and templates in Craft, it’s passed via a model.
 *
 * https://craftcms.com/docs/plugins/models
 *
 * @author    Will Browar
 * @package   AdminBar
 * @since     3.0.1
 */
class Settings extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * Some field model attribute
     *
     * @var string
     */
    // Settings that can be set in CP
    // Custom CSS used to style Guide components
    public $customCss = '';

    // Links added via config file
    public $customLinks = [];

    // Settings set in adminbar.php
    // ADMIN BAR
    public $additionalLinks = [];
    public $displayGreeting = true;
    public $displayDashboardLink = true;
    public $displayDefaultEditSection = true;
    public $displaySettingsLink = true;
    public $displayLogout = true;
    public $enableMobileMenu = true;
    public $widgets = [];

    // EDIT LINKS
    public $displayEditDate = true;
    public $displayEditAuthor = true;
    public $displayRevisionNote = true;

    // Public Methods
    // =========================================================================

    /**
     * Returns the validation rules for attributes.
     *
     * Validation rules are used by [[validate()]] to check if attribute values are valid.
     * Child classes may override this method to declare different validation rules.
     *
     * More info: http://www.yiiframework.com/doc-2.0/guide-input-validation.html
     *
     * @return array
     */
    public function rules()
    {
        return [
            [['customCss'], 'string'],
        ];
    }
}
