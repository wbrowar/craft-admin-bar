# Admin Bar for Craft CMS 4

![Screenshot](resources/screenshots/screenshot-bar.png)

Admin Bar is made up of two parts:
- [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) is a standalone web component that can be added to the front end of any project.
- Admin Bar (this plugin) provides plugin settings, a Twig tag, and checks to see if the user is logged in to determine if the Admin Bar Component should be displayed on the page.

If you are creating a Craft CMS site with a Twig front end, you can use this plugin and its Twig tag to add Admin Bar to your front end.

If you are creating a headless site, or a site that is statically cached, you may not need this plugin, and in that case you can add [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) directly into your site’s JavaScript (via a bundler or a `<script>` tag).

## Requirements
* Craft 4.0.0

## Installation
To install the plugin, you can find it in the [Craft Plugin Store](https://plugins.craftcms.com/admin-bar), or follow these instructions:

1. Open your terminal and go to your Craft project:

`cd /path/to/project`

2. Then tell Composer to require the plugin:

`composer require wbrowar/adminbar`

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for Admin Bar.

## Add Admin Bar to Your Twig Template
To add Admin Bar to your website add the `{{ adminBar() }}` tag within your Twig template. Admin Bar will be displayed on any page that includes this tag when someone—who has the permission to view the CP—is logged into your website.

In your plugin settings you can use CSS Custom Properties to override the look of your admin bar to match your website’s look and feel.

You may pass in an array of arguments to make some changes on how Admin Bar looks and functions. In this example, you may pass in the entry that you'd like to edit when someone clicks the "Edit" link.

```twig
{{ adminBar({ entry: entry }) }}
```

Here is a list of available arguments:

| Argument        | Default | Description                                                                                                                                                                                                                       |
|-----------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `editLinkLabel` | *null*  | Set a custom label for the Edit Link when `editLinkUrl` is set to a custom URL.                                                                                                                                                   |
| `editLinkUrl`   | *null*  | Override the Edit Link with a custom URL or URI (this will be run through the `url()` Twig function).                                                                                                                             |
| `entry`         | *null*  | Pass in an entry object to add an edit link for that entry .                                                                                                                                                                      |
| `fixed`         | *false* | Use CSS `position: fixed` instead of `position: sticky;`.                                                                                                                                                                         |
| `force`         | *false* | Bypasses the default check that `{{ adminBar() }}` does to see if Admin Bar can be rendered.                                                                                                                                      |
| `rtl`           | *false* | Changes the reading direction from `ltr` to `rtl` in situations where you need to manually set it. Admin Bar Component will automatcally switch to RTL if your page is set to RTL or if you have the CSS set to `direction: rtl`. |
| `sticky`        | *true*  | Uses CSS to `position: sticky;` Admin Bar to the top of the page.                                                                                                                                                                 |
| `useCss`        | *true*  | Add the default styles to Admin Bar or leave them out to load the stylesheet with your project’s CSS.                                                                                                                             |
| `useJs`         | *true*  | Use the Admin Bar's default Javascript or set this to `false` to import the [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) into your project’s JS bundle.                                                  |

## Configuration settings
The config file gives you the ability to adjust how Admin Bar looks and functions in multiple environments. It also allows you to create additional links for the Admin Bar, and allows for plugin actions to be called through these additional links.

To add a config file to your site, create a file at `/config/admin-bar.php` that returns an array of settings:

```php
<?php

return array(
    // Settings go here
);
```

Here are the settings you can change with the config file:

### Admin Bar

| Setting | Default | Description                                                                                                              |
| --- | --- |--------------------------------------------------------------------------------------------------------------------------|
| `additionalLinks` | *[]* | Add links to Admin Bar using the [properties found below](https://github.com/wbrowar/craft-3-adminbar#additional-links). |
| `displayGreeting` | *true* | Displays the logged in user's photo (if it's set) and "Hi, [friendlyname]".                                              |
| `displayDashboardLink` | *true* | A link to the CP Dashboard.                                                                                              |
| `displayDefaultEditSection` | *true* | Display the name of the section in the default entry/category edit link if the user has permission to edit it.           |
| `displayGuideLink` | *true* | If the [Guide](https://plugins.craftcms.com/guide) plugin is installed, a link to the Guide CP Section is displayed.     |
| `displayLogout` | *true* | Displays a button that logs you out of Craft CMS.                                                                        |
| `displaySettingsLink` | *true* | A link to the CP Settings page that appears only to admins.                                                              |

#### Additional Links
You can add links to Admin Bar using the config file by passing properties into an array, called `additionalLinks`. There are examples commented out in the `config.php` file, and here are the properties you can use to create links.

| Property | Values | Description |
| --- | --- | --- |
| `title` | *string* | Appears as the label for the link |
| `url` | *string* | Depending on the `type` property, the `url` represents the location or action of the link |
| `title` | `'url'`, `'cpUrl'`, `'action'` | If the `type` is `'url'`, the `url` value should be an absolute URL or a path relative to the site root. If the `type` is `'cpUrl'`, the `url` value should be a path relative to your site's CP root. If the `type` is `'action'`, set the value for `url` to the path used by the Controller Action |
| `params` | *string* | Passes along url parameters, as [documented here](https://craftcms.com/docs/templating/functions#url). This only supports this string format: `'foo=1&bar=2'` |
| `protocol` | *string* | Changes the url protocol, as [documented here](https://craftcms.com/docs/templating/functions#url) |
| `mustShowScriptName` | *string* | Appends `index.php`, as [documented here](https://craftcms.com/docs/templating/functions#url) |
| `permissions` | *array* | An array of required permissions that are needed for this link to be displayed. All permissions in this array will be required for the link to appear |

---

## Releases

Release notes can be found at [CHANGELOG.md](https://github.com/wbrowar/craft-3-adminbar/blob/master/CHANGELOG.md)

Please, let me know if this plugin is useful or if you have any suggestions or issues. [@wbrowar](https://twitter.com/wbrowar)