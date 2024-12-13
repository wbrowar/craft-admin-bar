<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar\models;

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
     * Links added via `config/admin-bar.php`.
     *
     * @var array
     */
    public array $additionalLinks = [];

    /**
     * Some field model attribute
     *
     * @var string Custom CSS used to style Guide components.
     */
    public string $customCss = '';

    /**
     * Links added via settings page.
     *
     * @var array
     */
    public array $customLinks = [];

    /**
     * Adds the Dashboard link to Admin Bar.
     *
     * @var bool
     */
    public bool $displayDashboardLink = true;

    /**
     * Adds the Edit link to Admin Bar.
     *
     * @var bool
     */
    public bool $displayDefaultEditSection = true;

    /**
     * Adds the Greeting section to Admin Bar. This displays the current user’s
     * avatar (if one is set) and the text, “Hi, {{ user.friendlyName }}”.
     *
     * @var bool
     */
    public bool $displayGreeting = true;

    /**
     * Adds the Guide link to Admin Bar.
     *
     * @var bool
     */
    public bool $displayGuideLink = true;

    /**
     * Adds the Logout section to Admin Bar. This displays a “Sign out” link that
     * links to the `/logout` URL.
     *
     * @var bool
     */
    public bool $displayLogout = true;

    /**
     * Adds the Utilities link to Admin Bar.
     *
     * @var bool
     */
    public bool $displayUtilitiesLink = true;

    /**
     * Adds the Settings link to Admin Bar.
     *
     * @var bool
     */
    public bool $displaySettingsLink = true;

    /**
     * Displays labels next to Admin Bar Widget icons.
     *
     * @var bool
     */
    public bool $displayWidgetLabels = false;

    /**
     * Enables the Admin Bar Widget: Blitz
     *
     * @var bool
     */
    public bool $widgetEnabledBlitz = false;

    /**
     * Enables the Admin Bar Widget: Guide
     *
     * @var bool
     */
    public bool $widgetEnabledGuide = false;

    /**
     * Enables the Admin Bar Widget: Seomatic
     *
     * @var bool
     */
    public bool $widgetEnabledSeomatic = false;

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
    public function rules(): array
    {
        return [
            [['customCss'], 'string'],
        ];
    }
}
