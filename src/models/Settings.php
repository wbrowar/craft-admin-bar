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
     * Automatically renders Admin Bar at the top of the page and makes it sticky.
     * If the page is an entry, an edit link will be added to the Admin Bar.
     *
     * @var boolean
     */
    public bool $autoRender = false;

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
     * Add your own custom Admin Bar Widgets using Twig.
     *
     * @var string
     */
    public string $customWidgets = '';

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
     * TODO
     *
     * @var bool
     */
    public bool $mobileMode = false;

    /**
     * Sets CSS variables based on a set of predefined themes.
     *
     * @var string
     */
    public string $theme = 'default';

    /**
     * TODO
     *
     * @var bool
     */
    public bool $toolbarToggle = false;

    /**
     * TODO
     *
     * @var bool
     */
    public bool $toolbarToggleDraggable = false;

    /**
     * Enables the Admin Bar Widget: Blitz
     *
     * @var bool
     */
    public bool $widgetEnabledBlitz = false;

    /**
     * Enables the Admin Bar Widget: Authors
     *
     * @var bool
     */
    public bool $widgetEnabledCraftAuthors = false;

    /**
     * Enables the Admin Bar Widget: New Entry
     *
     * @var bool
     */
    public bool $widgetEnabledCraftNewEntry = false;

    /**
     * Enables the Admin Bar Widget: Published
     *
     * @var bool
     */
    public bool $widgetEnabledCraftPublished = false;

    /**
     * Enables the Admin Bar Widget: Search
     *
     * @var bool
     */
    public bool $widgetEnabledCraftSearch = false;

    /**
     * Enables the Admin Bar Widget: Sites
     *
     * @var bool
     */
    public bool $widgetEnabledCraftSites = false;

    /**
     * Enables the Admin Bar Widget: Guide
     *
     * @var bool
     */
    public bool $widgetEnabledGuide = false;

    /**
     * Enables the Admin Bar Widget: Navigation
     *
     * @var bool
     */
    public bool $widgetEnabledNavigation = false;

    /**
     * Enables the Admin Bar Widget: Seo
     *
     * @var bool
     */
    public bool $widgetEnabledSeo = false;

    /**
     * Enables the Admin Bar Widget: Seomatic
     *
     * @var bool
     */
    public bool $widgetEnabledSeomatic = false;

    /**
     * Enables the Admin Bar Widget: View Count
     *
     * @var bool
     */
    public bool $widgetEnabledViewCount = false;

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
            [['customCss', 'theme'], 'string'],
            ['theme', 'default', 'value' => 'default'],
        ];
    }
}
