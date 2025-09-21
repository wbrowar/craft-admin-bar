# Admin Bar for Craft CMS 5

![Screenshot](resources/screenshots/screenshot-bar.png)

Admin Bar is made up of two parts:
- [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) is a standalone web component that can be added to the front end of any project.
- Admin Bar (this plugin) provides plugin settings, a Twig tag, and checks to see if the user is logged in to determine if the Admin Bar Component should be displayed on the page.

If you are creating a Craft CMS site with a Twig front end, you can use this plugin and its Twig tag to add Admin Bar to your front end.

If you are creating a headless site, or a site that is statically cached, you may not need this plugin, and in that case you can add [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) directly into your site’s JavaScript (via a bundler or a `<script>` tag).

> :warning: Admin Bar’s composer package name has changed from `wbrowar/adminbar` to `wbrowar/craft-admin-bar`. Update your composer.json to point to [the new package on Packagist.](https://packagist.org/packages/wbrowar/craft-admin-bar)

## Requirements
* Craft 5.8.0

## Editions

The LITE edition of Admin Bar gives you quick links to frequently-used pages in the Craft CMS Control Panel. You can also use settings to add custom links or rebrand Admin Bar with CSS.

The PRO edition adds interactive menus, statuses, and other information relevant to the page your users are on. Admin Bar PRO integrates Admin Bar with third-party plugins and Craft CMS features.

The LITE edition is free and the PRO edition can be purchased on the [Craft CMS Plugin Store](https://plugins.craftcms.com/admin-bar).

## Installation
To install the plugin, you can find it in the [Craft Plugin Store](https://plugins.craftcms.com/admin-bar), or follow these instructions:

1. Open your terminal and go to your Craft project:
   ```bash
   cd /path/to/project
   ```

2. Then tell Composer to require the plugin:
   ```bash
   composer require wbrowar/craft-admin-bar
   ```

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for Admin Bar.

## Add Admin Bar to Your Twig Template
To add Admin Bar to your website add the `{{ adminBar() }}` function within your Twig template. Admin Bar will be displayed on any page that includes this tag when someone—who has the permission to view the CP—is logged into your website.

In your plugin settings you can use CSS Custom Properties to override the look of your admin bar to match your website’s look and feel.

You may pass in an array of arguments to make some changes on how Admin Bar looks and functions. In this example, you may pass in the entry that you'd like to edit when someone clicks the "Edit" link.

```twig
{{ adminBar({ entry: entry }) }}
```

Admin Bar Widgets will also use this entry value to change their content and functionality.

Here is a list of available arguments:

| Argument        | Default       | Description                                                                                                                                                                                                                       |
|-----------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `customWidgets` | *null*        | Use Twig to add custom widgets to Admin Bar.                                                                                                                                                                                      |
| `editLinkLabel` | *null*        | Set a custom label for the Edit Link when `editLinkUrl` is set to a custom URL.                                                                                                                                                   |
| `editLinkUrl`   | *null*        | Override the Edit Link with a custom URL or URI (this will be run through the `url()` Twig function).                                                                                                                             |
| `entry`         | *null*        | Pass in an entry object to add an edit link for that entry. This value will also be used in Admin Bar Widgets.                                                                                                                    |
| `fixed`         | *false*       | Use CSS `position: fixed` instead of `position: sticky;` to pin Admin Bar to the top or bottom of your page.                                                                                                                      |
| `force`         | *false*       | Bypasses the default check that `{{ adminBar() }}` does to see if Admin Bar can be rendered. This is intended to be used on the Admin Bar plugin settings page, or for edge cases.                                                |
| `id`            | *'admin-bar'* | Set the `id` attribute on the Admin Bar wrapper element.                                                                                                                                                                          |
| `position`      | *'top'*       | When set to `'bottom'` and used with `fixed: true`, Admin Bar will be fixed to the bottom of the page. Accepts: `'bottom'`, `'top'`                                                                                               |
| `returnUrl`     | *'{url}'*     | Sets the URL that you are taken to after saving an entry. Set this to `null` to redirect to the default `returnUrl` for the entry type. Variables in `{}` are replaced based on the entry values after save.                      |
| `rtl`           | *false*       | Changes the reading direction from `ltr` to `rtl` in situations where you need to manually set it. Admin Bar Component will automatcally switch to RTL if your page is set to RTL or if you have the CSS set to `direction: rtl`. |
| `sticky`        | *true*        | Uses CSS to `position: sticky;` Admin Bar to the top of the page.                                                                                                                                                                 |
| `textElements`  | *[]*          | Add text elements to Admin Bar using an array of objects.                                                                                                                                                                         |
| `useCss`        | *true*        | Add the default styles to Admin Bar or leave them out to load the stylesheet with your project’s CSS.                                                                                                                             |
| `useJs`         | *true*        | Use the Admin Bar's default Javascript or set this to `false` to import the [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) into your project’s JS bundle.                                                  |

### Adding Text Elements to Admin Bar

Plain text and labels can be added to Admin Bar by adding objects into the `textElements` argument. Object properties can include any property accepted by `<admin-bar-text>` elements, [as documented here](https://github.com/wbrowar/admin-bar-component#adding-text-elements-to-admin-bar). Each object will add a new text element and the properties in each object will be added using Craft’s `attr()` method.

For example, this will add a line of text that will display the number of entries in the current entry’s section:

```twig
{{ adminBar({
    entry: entry ?? null,
    textElements: [
        { 'label-content': craft.entries.section(entry.section.handle).count(), 'text-content': 'Entries in this section' },
    ],
}) }}
```

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

| Setting                       | Default     | Description                                                                                                            |
|-------------------------------|-------------|------------------------------------------------------------------------------------------------------------------------|
| `additionalLinks`             | *[]*        | Add links to Admin Bar using the [properties found below](https://github.com/wbrowar/craft-admin-bar#additional-links). |
| `displayGreeting`             | *true*      | Displays the logged in user's photo (if it's set) and "Hi, [friendlyname]".                                            |
| `displayDashboardLink`        | *true*      | Displays a link to the CP Dashboard.                                                                                   |
| `displayDefaultEditSection`   | *true*      | Display the name of the section in the default entry edit link if the user has permission to edit it.                  |
| `displayGuideLink`            | *true*      | If the [Guide](https://plugins.craftcms.com/guide) plugin is installed, a link to the Guide CP Section is displayed.   |
| `displayLogout`               | *true*      | Displays a button that logs you out of Craft CMS.                                                                      |
| `displayUtilitiesLink`        | *true*      | Adds the Utilities link to Admin Bar.                                                                                  |
| `displaySettingsLink`         | *true*      | Adds the Settings link to Admin Bar.                                                                                   |
| `displayWidgetLabels`         | *false*     | Displays labels next to Admin Bar Widget icons.                                                                        |
| `theme`                       | *'default'* | Sets CSS variables based on a set of predefined themes.                                                                |
| `widgetEnabledBlitz`          | *false*     | Enables the Admin Bar Widget: Blitz                                                                                    |
| `widgetEnabledCraftAuthors`   | *false*     | Enables the Admin Bar Widget: Authors                                                                                  |
| `widgetEnabledCraftNewEntry`  | *false*     | Enables the Admin Bar Widget: New Entry                                                                                |
| `widgetEnabledCraftPublished` | *false*     | Enables the Admin Bar Widget: Published                                                                                |
| `widgetEnabledCraftSearch`    | *false*     | Enables the Admin Bar Widget: Search                                                                                   |
| `widgetEnabledCraftSites`     | *false*     | Enables the Admin Bar Widget: Sites                                                                                    |
| `widgetEnabledGuide`          | *false*     | Enables the Admin Bar Widget: Guide                                                                                    |
| `widgetEnabledNavigation`     | *false*     | Enables the Admin Bar Widget: Navigation                                                                               |
| `widgetEnabledSeo`            | *false*     | Enables the Admin Bar Widget: Seo                                                                                      |
| `widgetEnabledSeomatic`       | *false*     | Enables the Admin Bar Widget: Seomatic                                                                                 |
| `widgetEnabledViewCount`      | *false*     | Enables the Admin Bar Widget: View Count                                                                               |


#### Additional Links
You can add links to Admin Bar using the config file by passing properties into an array, called `additionalLinks`. There are examples commented out in the `config.php` file, and here are the properties you can use to create links.

| Property             | Values | Description                                                                                                                                                                                                                                                                                           |
|----------------------| --- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `icon`               | *string* | Adds an icon before the label of the link. The value of `icon` is based on the icon set in the icon picker of Craft CMS.                                                                                                                                                                              |
| `mustShowScriptName` | *string* | Appends `index.php`, as [documented here](https://craftcms.com/docs/templating/functions#url)                                                                                                                                                                                                         |
| `params`             | *string* | Passes along url parameters, as [documented here](https://craftcms.com/docs/templating/functions#url). This only supports this string format: `'foo=1&bar=2'`                                                                                                                                         |
| `permissions`        | *array* | An array of required permissions that are needed for this link to be displayed. All permissions in this array will be required for the link to appear                                                                                                                                                 |
| `protocol`           | *string* | Changes the url protocol, as [documented here](https://craftcms.com/docs/templating/functions#url)                                                                                                                                                                                                    |
| `title`              | *string* | Appears as the label for the link                                                                                                                                                                                                                                                                     |
| `type`               | `'url'`, `'cpUrl'`, `'action'` | If the `type` is `'url'`, the `url` value should be an absolute URL or a path relative to the site root. If the `type` is `'cpUrl'`, the `url` value should be a path relative to your site's CP root. If the `type` is `'action'`, set the value for `url` to the path used by the Controller Action |
| `url`                | *string* | Depending on the `type` property, the `url` represents the location or action of the link                                                                                                                                                                                                             |

## Optimizing CSS and JS Delivery for Performance

By default, using `{{ adminBar() }}` will render HTML, and it will link to the static CSS and JS assets that make Admin Bar work. The CSS is loaded in a file in the `<head>` and the JavaScript is loaded in a file at the bottom of the `<body>` tag—deferred so it’s not render blocking. 

Because these add extra requests to your server, you may prefer to move the CSS and JS code into your Twig template. First, to turn off the deafult loading behavior, add `useCss` and `useJs` arguments to your embed code and set them both to `false`:

```twig
{{ adminBar({
    entry: entry ?? null,
    useCss: false,
    useJs: false,
}) }}
```

This turns off loading any JavaScript or CSS onto the page. To load those assets back in, you can add the following anywere on your Twig template:

```twig
{% css adminBarCssFile({ contents: true }) %}
{% css adminBarOnPageCss() %}
{% js adminBarJsFile({ contents: true }) %}
```

- `adminBarCssFile()` gets the CSS that comes with [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) and adds that to the page.
  - Setting the `contents` argument to `true` will use PHP’s `file_get_contents()` method to extract the CSS code from the file as a string.
- The `adminBarOnPageCss()` method adds some CSS that is specific to the Admin Bar plugin along with any CSS that was added in the Custom CSS Admin Bar plugin setting.
- `adminBarJsFile()` gets the JavaScript code that comes with [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) and adds that to the page.
  - The `contents` argument also uses `file_get_contents()` to get the JavaScript code to place inside of a `<script>` tag.

If you prefer to only load Admin Bar’s CSS and JS files when Admin Bar is rendered onto the page, you may add a check using the `adminBarCanRender()` function.

```twig
{% if adminBarCanRender() %}
    {% css adminBarCssFile() %}
    {% css adminBarOnPageCss() %}
    {% js adminBarJsFile() %}
{% endif %}
```

> [!NOTE]
> How you embed your static assets are up to you. One less server request is usually better, but adding a few extra KB to every page in your HTML markup might not be as performant as caching and loading static `.css` and `.js` files.

## Dynamically Loading Admin Bar

### Using Admin Bar with Blitz Static Caching
The [Blitz Craft CMS plugin](https://plugins.craftcms.com/blitz) provides a Twig function, called `includeDynamic()`, that lets you render a Twig template on a statically-cached page. With this function, Admin Bar can be dynamically included into your template so it will work on cached and uncached pages.

With Blitz installed, you can start by moving the `{{ adminBar() }}` method from your Twig templates into a separate Twig file in your `templates` directory. For this example, we’ll add the following code to a file at `/templates/includes/admin-bar.twig`.

```twig
{% set entry = entryUri ?? false ? craft.entries.uri(entryUri).one() : null %}

{{ adminBar({
  entry: entry ?? null,
  useCss: false,
  useJs: false,
}) }}
```

Notice that `useCss` and `useJs` are both set to `false`? This is because registering CSS and JS files from dynamic includes won’t work on a statically-cached page. You can set any other `adminBar()` argument that you’d like here.

Next, call the `dynamicInclude()` function in the place in your layout or page template where you would like Admin Bar to be embedded:

```twig
{{ craft.blitz.includeDynamic('includes/admin-bar.twig', { entryUri: entry.uri ?? '' }) }}

{% css adminBarCssFile() %}
{% css adminBarOnPageCss() %}
{% js adminBarJsFile() with { defer: true, type: 'module' } %}
```

You can pass parameters into `includeDynamic()`, so we can pass the URI of the current page entry—which will be used to figure out what page Admin Bar will use as the "Edit" button.

In order to load Admin Bar’s CSS and JS onto the front end, we can use Admin Bar’s built-in Twig functions anywhere within our template.

## Admin Bar Widgets

**Admin Bar PRO** provides widgets based on the features you are using in Craft CMS and the other Craft CMS plugins you have installed in your project.

When you visit the Admin Bar Plugin Settings page you’ll see a section that lets you enable Admin Bar Widgets. Most of the widgets require that you pass an `entry` into your `adminBar` Twig tag (`{{ adminBar({ entry: entry }) }}`) in order to display relevant information for the current page you are on. The **Preview** area on the settings page will try to load an entry from your site and pass it into the Admin Bar Preview so you can see how the widgets would work for that entry.

The list of widgets that can be enabled will include some widgets based around Craft CMS features. Other widgets will be available if you have their third-party plugin installed. A list of supported plugins that are not installed will appear on the Admin Bar Settings page for reference.

When enabled, a widget might use the current user’s permissions or other factors to decide what to display. When no relevant information or actions are available a widget will not be shown.

Because Craft CMS plugins can change over time, features and availability of Admin Bar Widgets may change in future updates. Here is the list of currently supported widgets:

| Name       | Plugin                                                | Plugin/Craft CMS Version | Widget Description                                                                                    |
|------------|-------------------------------------------------------|--------------------------|-------------------------------------------------------------------------------------------------------|
| Blitz      | [Blitz](https://plugins.craftcms.com/blitz)           | `>= 5.9.0`               | View the Blitz cache status for the current page and refresh the Blitz cache for the current page.    |
| Authors    | Craft CMS                                             | `>= 5.5.0`               | The authors for the current entry.                                                                    |
| New Entry  | Craft CMS                                             | `>= 5.5.0`               | Links to create a new entry from sections that the author has permission to create.                   |
| Published  | Craft CMS                                             | `>= 5.5.0`               | The Post Date for when the current page entry was published, along with other publishing information. |
| Guide      | [Guide](https://plugins.craftcms.com/guide)           | `>= 5.2.0`               | Links to guides assigned to the current page entry.                                                   |
| Navigation | [Navigation](https://plugins.craftcms.com/navigation) | `>= 3.0.0`               | Breadcrumbs for the current page in all navigations.                                                  |
| Search     | Craft CMS                                             | `>= 5.5.0`               | Use Craft CMS’s search to find, edit, and jump to other pages in your site.                           |
| Sites      | Craft CMS                                             | `>= 5.5.0`               | The name of the site for the current page and links to the same page on all propagated sites.         |
| SEO        | [SEO](https://plugins.craftcms.com/seo)               | `>= 5.0.0`               | SEO preview for the current page.                                                                     |
| SEOmatic   | [SEOmatic](https://plugins.craftcms.com/seomatic)     | `>= 5.1.0`               | SEO preview for the current page.                                                                     |
| View Count | [View Count](https://plugins.craftcms.com/view-count) | `>= 2.0.0`               | The number of times the current page has been viewed.                                                 |

### Configuring an Admin Bar Widget via Twig

Some Admin Bar Widgets can be configured for each page using the `widgets` param for the `{{ adminBar() }}` function. For example, when using the SEO plugin you can set the field handle for the SEO field by passing it into `{{ adminBar() }}` like this:

```twig
{{ adminBar({
  entry: entry,
  widgets: {
    seo: {
      handle: 'seoPluginFieldHandle',
    }
  },
}) }}
```

Here is a list of all available Admin Bar widget config options:

| Widget | Param                                | Default    | Description                                                                                                                                 |
|--------|--------------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| SEO    | `widgets.craft-published.dateFormat` | *'medium'* | Formats the date format using values valid for [Craft CMS’s `date` filter](https://craftcms.com/docs/5.x/reference/twig/filters.html#date). |
| SEO    | `widgets.craft-published.timeFormat` | *'short'*  | Formats the time format using values valid for [Craft CMS’s `time` filter](https://craftcms.com/docs/5.x/reference/twig/filters.html#time). |
| SEO    | `widgets.seo.handle`                 | *'seo'*    | Used to match the handle of the SEO field on the entry.                                                                                     |

### Custom Admin Bar Widgets

The Admin Bar Plugin Settings page includes a code editor field that lets you use Twig to create your own Admin Bar Widgets.

While any Twig or HTML can be rendered here, it’s highly recommended that you check out [the docs for Admin Bar Component](https://github.com/wbrowar/admin-bar-component) and use `<admin-bar-text>` and `<admin-bar-button>`. This will help in keeping styles consistent and avoid clashing with your front-end styles.

> [!WARNING]
> The Twig code in this field will be rendered on your front-end. Be careful when using `{% js %}` or `{% css %}` tags, since they may affect elements on your front-end.

You may also add custom widgets by passing a Twig template string into the `{{ adminBar() }}` function in your Twig template. This can be especially useful if you have a page-specific info to show.

For example, this will add two widgets, a link and the title of the page as plain text:

```twig
{% set customWidgets %}
  <admin-bar-button button-href="{{ url('a-link') }}">A Link</admin-bar-button>
  <admin-bar-text>{{ entry.title }}</admin-bar-text>
{% endset %}

{{ adminBar({
  customWidgets,
  entry,
}) }}
```

### Requesting a New Admin Bar Widget

If you have an idea for an Admin Bar Widget, please start a new discussion on the [Admin Bar Github Discussions page](https://github.com/wbrowar/craft-admin-bar/discussions) with your idea for a new widget. PRs are also welcome (but the final implementation may differ)!

While there are no hard rules for creating a widget, here is some general criteria:

- When displayed on a page, the widget should provide information or actions relevant to the current page entry, current user, or the current Craft CMS Site.
- Widgets should use stable, public APIs and Twig tags provided by Craft CMS or Craft CMS plugins.
- Where possible, Widgets should be optimized for quick loading performance.
- Widget code should follow accesibilty patterns and use web standard HTML and CSS.
- Widgets shouldn’t expose any sensitive information.
- Widgets should utilize the components built into [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) to minimize CSS leaking in from the page Admin Bar is embedded on.

---

## Releases

Release notes can be found at [CHANGELOG.md](https://github.com/wbrowar/craft-admin-bar/blob/main/CHANGELOG.md)

## Supported Versions

Here is a general goal for adding and supporting features for Admin Bar going forward:

- New features for the plugin will be added to the current major plugin version that targets the current released version of Craft CMS.
- The latest major plugin version that targets the previous released major version of Craft CMS will be supported with bug fixes intruduced in updates to that version of Craft CMS.
- Previous major plugin versions will only get security-related updates—when necessary.

---

Brought to you by [Will Browar](https://wbrowar.com)
