# Craft – Admin Bar
Front-end shortcuts for clients logged into [Craft CMS](https://craftcms.com).

| :tumbler_glass:        | Admin Bar 3.2.x is a compatibility release that enables Admin Bar to be used in Craft 4 projects. After this release, the next update will be a major release and a re-write. A few features have been removed, Edit Links and Admin Bar Widgets, to focus on Admin Bar’s main toolbar.  If you have any suggestions or feature requests for the next version, please join in at [Admin Bar’s GitHub Discussions](https://github.com/wbrowar/craft-adminbar/discussions).    |
|---------------|:----|

## Requirements
* Craft 4.0.0

## Installation
To install the plugin, you can find it in the [Craft Plugin Store](https://plugins.craftcms.com/admin-bar), or follow these instructions:

1. Open your terminal and go to your Craft project:

`cd /path/to/project`

2. Then tell Composer to require the plugin:

`composer require wbrowar/adminbar`

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for Admin Bar.

---

# Admin Bar

![Screenshot](resources/screenshots/screenshot-bar.png)

## Add the Default Admin Bar
To add Admin Bar to your website add the `{{ adminbar() }}` tag anywhere within your page template. Admin Bar will appear at the top of any page that includes this tag when someone—who has the permission to view the CP—is logged into your website.

Because Admin Bar is HTML, CSS, and Javascript added to your website's front-end, you may need to make some slight adjustments to override Admin Bar's CSS to make it fit your website.

You may pass in an array of arguments to make some changes on how Admin Bar looks and functions. In this example, you may pass in the entry that you'd like to appear when someone clicks the "Edit" link.

```twig
{{ adminbar({ entry: entry }) }}
```

Here is a list of available arguments:

| Argument | Default | Description |
| --- | --- | --- |
| `category` | *null* | Pass in a category object to add an edit link for that category |
| `editLinkLabel` | *null* | Set a custom label for the Edit Link when `editLinkUrl` is set to a custom URL |
| `editLinkUrl` | *null* | Override the Edit Link with a custom URL or URI (this will be run through the `url()` Twig function) |
| `entry` | *null* | Pass in an entry object to add an edit link for that entry |
| `fixed` | *false* | Use CSS `position: fixed` instead of `position: sticky;` |
| `sticky` | *true* | Uses CSS to `position: sticky;` Admin Bar to the top of the page |
| `useCss` | *true* | Add the default styles to Admin Bar or leave them off and style it your way |
| `useJs` | *true* | Use the Admin Bar's default Javascript |

## Adding Admin Bar to the Front-End via Javascript
Admin Bar can be added to many sites that use Craft as a headless CMS or use static caching, like FastCGI Caching. This requires these three steps:

1. Admin Bar assets get included onto the page, via the `{{ getAdminBarAssets({ uri: craft.app.request.url }) }}` Twig tag
2. Fetch or an HTTP client—like jQuery or Axios—is used to get Admin Bar's HTML and place it onto the page
3. The Javascript function, `window.adminBarInit();`, gets called

The `{{ getAdminBarAssets({ uri: craft.app.request.url }) }}` Twig tag places all of Admin Bar's CSS and Javascript onto the page within `<script>` and `<style>` tags. This should be placed towards the bottom of the `<body>` tag.

With the assets in place, you can use `jQuery.ajax()`, `axios.post()`, or other similar methods to request Admin Bar's HTML from Craft. This requires the URI of the page be passed in to the request to give Admin Bar context.

Here’s an example of using the `fetch()` API to load Admin Bar with vanilla Javascript:
```javascript
    const data = {
        params: {},
        uri: '__home__', // Get URI and pass it through. Use `__home__` for your homepage.
    };
    
    fetch('/actions/admin-bar/bar', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then((response) => {
            const div = document.createElement('div');
            div.innerHTML = response.content;
    
            // Add Admin Bar to the top of the <body> tag
            document.body.prepend(div.children[0]);
    
            // OR
    
            // Add Admin Bar to the bottom of the <body> tag
            // while (div.children.length > 0) {
            //     document.body.appendChild(div.children[0]);
            // }
    
            if (typeof window.adminBarInit === "function") {
                // Call adminBarInit() to add Javascript events via the {{ getAdminBarAssets({ uri: craft.app.request.url }) }} Twig tag
                window.adminBarInit();
            }
        })
        .catch(error => console.error('Error:', error));
```

Note that `JSON.stringify()` is used to convert the data over to JSON before sending.

---

## Configuration settings
The config file gives you the ability to adjust how Admin Bar looks and functions in multiple environments. It also allows you to create additional links for the Admin Bar, and allows for plugin actions to be called through these additional links.

Here are the settings you can change with the config file:

### Admin Bar

| Setting | Default | Description |
| --- | --- | --- |
| `additionalLinks` | *[]* | Add links to Admin Bar using the [properties found below](https://github.com/wbrowar/craft-3-adminbar#additional-links) |
| `displayGreeting` | *true* | Displays the logged in user's photo (if it's set) and "Hi, [friendlyname]" |
| `displayDashboardLink` | *true* | A link to the CP Dashboard |
| `displayDefaultEditSection` | *true* | Display the name of the section in the default entry/category edit link if the user has permission to edit it |
| `displayGuideLink` | *true* | If the [Guide](https://plugins.craftcms.com/guide) plugin is installed, a link to the Guide CP Section is displayed |
| `displaySettingsLink` | *true* | A link to the CP Settings page that appears only to admins |
| `displayLogout` | *true* | Logs you out of Craft CMS |
| `enableMobileMenu` | *true* | Enables Admin Bar to display a separate mobile theme below a width of 600 pixels |

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