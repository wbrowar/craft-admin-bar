# Craft – Admin Bar
Front-end shortcuts for clients logged into [Craft CMS](https://craftcms.com).

> NOTE: Craft 3 has a few bugs in CP, so `Settings > Plugins > Admin Bar` might not work correctly. `Adminbar.php` config settings and Twig arguments seem to be working just fine, though. Also, if you're upgrading from Craft 2, there's no upgrade migration, yet, so please re-enter CP plugin setting values for now.

## Requirements
* Craft 3.0+
* PHP 7.0+

## Installation
1. During Craft 3 beta, [follow these instructions for installation](https://github.com/craftcms/docs/blob/master/en/plugin-intro.md#loading-your-plugin-into-craft).
2. Run `composer update` within the `adminbar` folder to downlaod dependencies.
3. Add one of the Twig tags to your template:
  * [Admin Bar default tag](https://github.com/wbrowar/craft-3-adminbar#add-the-default-admin-bar)
  * [Admin Bar Twig tag](https://github.com/wbrowar/craft-3-adminbar#using-the-admin-bar-twig-tag)
  * [Edit Link Twig tag](https://github.com/wbrowar/craft-3-adminbar#edit-links-for-multiple-entries)

---

# Admin Bar

![Screenshot](resources/screenshots/screenshot-bar.png)

## Add the Default Admin Bar
The easiest way to add Admin Bar to your website is by adding the tag, `{% adminbar() %}`, anywhere within your page template. Admin Bar will appear at the top of any page that includes this tag when someone—who has the permission to view the CP—is logged into your website.

Because Admin Bar is HTML, CSS, and Javascript added to your website's front-end, you may need to make some slight adjustments to override Admin Bar's CSS to make it fit your website.

## Using the Admin Bar Twig Tag
Using the tag to add Admin Bar to your template is the same as using `{% adminbar() %}`, but the Twig tag allows you more flexibility.

Use the tag, `{{ craft.adminbar.bar() }}`, to add Admin Bar anywhere you'd like within your template.

You may pass in an array of arguments to make some changes on how Admin Bar looks and functions. In this example, you may pass in the entry that you'd like to appear when someone clicks the "Edit" link.

```twig
{% set config = {
  entry: entry,
} %}

{{ craft.adminbar.bar(config) }}
```

Here is a list of available arguments:

| Argument | Default | Description |
| --- | --- | --- |
| `category` | *null* | Pass in a category object to add an edit link for that category |
| `bgColor` | *'#000000'* | CSS hex color used for Admin Bar's background color |
| `highlightColor` | *'#d85b4b'* | CSS hex color used for rollovers and for the background of the mobile theme |
| `textColor` | *'#ffffff'* | CSS hex color for icons and link text |
| `entry` | *null* | Pass in an entry object to add an edit link for that entry |
| `sticky` | *true* | Uses css to `position: fixed;` Admin Bar to the top of the page |
| `useCss` | *true* | Add the default styles to Admin Bar or leave them off and style it your way |
| `useJs` | *true* | Use the Admin Bar's default Javascript |

---

# In-Content Edit Links

![Screenshot](resources/screenshots/screenshot-edit.png)

## Edit Links for Multiple Entries
When looping through entries in an Element Criteria Model, entries in search results, or related entries to a page, you can now place edit links that make it easier to find and edit these entries.

To add an Edit Link, use the tag, `{{ craft.Adminbar.edit(entry) }}`, and pass in the entry you'd like the link to edit. You could also use Edit Links to add shortcuts to other areas of the CP by passing in a string, `{{ craft.Adminbar.edit(craft.config.cpTrigger ~ '/categories/myCategories/5-some-category-page') }}`.

By default, Edit Links use Javascript to add the links to your page, so you can feel free to use `{% cache %}` tags around the Twig tag. The only thing a non-logged in user would see is this in the HTML markup: `<div class="admin_edit" data-id="0"></div>`.

You can also add developer notes to content editors, or pass along other arguments.

```twig
{% set myNote %}{% spaceless %}
  {% if loop.last %}
    <p>The last entry always stays full width, even in the 2-column layout. See the <a href="{{ url('style-guide') }}">Style Guide</a> for layout examples.</p>
  {% endif %}
{% endspaceless %}{% endset %}

{{ craft.Adminbar.edit(entry, {
  devNote: myNote,
}) }}
```
![Screenshot](resources/screenshots/screenshot-edit-hover.png)

Here is a full list of available arguments:

| Argument | Default | Description |
| --- | --- | --- |
| `bgColor` | *'#000000'* | Background color behind the Edit link |
| `highlightColor` | *'#d85b4b'* | Color used for rollovers and links |
| `textColor` | *'#FFFFFF'* | Text color of the Edit link |
| `containerSelector` | *null* | Outline a parent element to show content editors the entirety of an entry or editable section. [See below for an example](https://github.com/wbrowar/craft-3-adminbar#inidcating-what-will-change-when-editing-an-entry) |
| `devNote` | *null* | Display information to content editors. You may use plain text or HTML markup |
| `showEditInfo` | *true* | If set to `true`, the Edit Link will display the last updated date and the name of the author that last saved the entry |
| `useCss` | *true* | Add the default styles to Edit Links or leave them off and style it your way |
| `useJs` | *true* | Add the default Javascript used by Entry Edit Links. Setting this to `false` embeds the Entry Edit Link through Twig, instead |

### Inidcating What Will Change When Editing an Entry
To help a content editor realize what part of an Edit Link is editable, the `containerSelector` argument can select a containing parent HTML element of the Entry Edit Link Twig tag. For example, in the code below, by setting `containerSelector` to `'li'`, an outline would appear when a content editor rolls over the `<li>` element on the page.

```twig
<ul class="my_sweet_content">
  {% for summary in mySweetContent %}
    <li>
      <h3>{{ summary.title }}</h3>
      <p>{{ summary.teaser }}</p>
      <a href="{{ summary.url }}">Read more</a>
      
      {{ craft.Adminbar.edit(summary, {
        containerSelector: 'li',
      }) }}
    </li>
  {% endfor %}
</ul>
```

![Screenshot](resources/screenshots/screenshot-edit-outline.png)

---

## Configuration settings
The config file gives you the ability to adjust how Admin Bar looks and functions in multiple environments. It also allows you to create additional links for the Admin Bar, and allows for plugin actions to be called through these additional links.

Here are the settings you can change with the config file:

### Admin Bar

| Setting | Default | Description |
| --- | --- | --- |
| `additionalLinks` | *[]* | Add links to Admin Bar using the [properties found below](https://github.com/wbrowar/craft-3-adminbar#additional-links) |
| `cacheBar` | *true* | Enable caching of Admin Bar links |
| `displayGreeting` | *true* | Displays the logged in user's photo (if it's set) and "Hi, [friendlyname]" |
| `displayDashboardLink` | *true* | A link to the CP Dashboard |
| `displaySettingsLink` | *true* | A link to the CP Settings page that appears only to admins |
| `displayLogout` | *true* | Logs you out of Craft CMS |
| `enableMobileMenu` | *true* | Enables Admin Bar to display a separate mobile theme below a width of 600 pixels |
| `scrollLinks` | *true* | Enable Admin Bar to scroll horizontally when the browser window doesn't have enough room for all of the links |

### Entry Edit Links

| Setting | Default | Description |
| --- | --- | --- |
| `displayEditDate` | *true* | Shows the date of the last time the entry was updated |
| `displayEditAuthor` | *true* | Shows the `friendlyName` of the person who last saved the entry |
| `displayRevisionNote` | *true* | Displays text added to the "Notes about your changes"—a.k.a. Version Notes—field found when editing an entry |

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

## To Do
* ~~New icon :horse:~~
* ~~Update plugin to support Craft 3~~
* ~~Add a new type to be used within multiple entries.~~
* ~~Change—in Craft 3 version—Embed Options in Embed Tag to array~~
* Setup upgrade migration from Craft 2 to Craft 3
* Get `Plguin > Settings > Admin Bar` working

---

## Releases

Release notes can be found at [CHANGELOG.md](https://github.com/wbrowar/craft-3-adminbar/blob/master/CHANGELOG.md)

Please, let me know if this plugin is useful or if you have any suggestions or issues. [@wbrowar](https://twitter.com/wbrowar)