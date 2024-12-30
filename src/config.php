<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

/**
 * Admin Bar config.php
 *
 * Completely optional configuration settings for Admin Bar if you want to customize some
 * of its more esoteric behavior, or just want specific control over things.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'admin-bar.php' and make
 * your changes there.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as well, so you can
 * have different settings groups for each environment, just as you do for 'general.php'
 */

return array(
    'additionalLinks' => [],
    'displayGreeting' => true,
    'displayDashboardLink' => true,
    'displayDefaultEditSection' => true,
    'displayGuideLink' => true,
    'displayUtilitiesLink' => true,
    'displaySettingsLink' => true,
    'displayLogout' => true,
    // Admin Bar PRO
    'displayWidgetLabels' => false,
    'widgetEnabledBlitz' => false,
    'widgetEnabledCraftAuthors' => false,
    'widgetEnabledCraftNewEntry' => false,
    'widgetEnabledCraftPublished' => false,
    'widgetEnabledCraftSites' => false,
    'widgetEnabledGuide' => false,
    'widgetEnabledSeomatic' => false,
    'widgetEnabledViewCount' => false,
);

// EXAMPLES
// Additional Links
/*
'additionalLinks' => [
  // an example of a simple url link
  [
    'title' => 'Craft CMS',
    'url' => 'http://craftcms.com',
    'type' => 'url',
  ],
  // an example of a CP link
  [
    'title' => 'Entries',
    'url' => 'entries',
    'type' => 'cpUrl',
  ],
  // an example of a url link that passes along some extras
  [
    'title' => 'Blog',
    'url' => 'blog',
    'type' => 'url',
    'params' => 'foo=1&bar=2',
    'protocol' => 'http',
    'mustShowScriptName' => true,
    'permissions' => array('myPluginPermission', 'thisIsRequiredToo'),
  ],
  // an example of a plugin action link
  [
    'title' => 'Save Entry',
    'url' => 'entries/save-entry',
    'type' => 'action',
    'admin' => true,
  ],
],
*/