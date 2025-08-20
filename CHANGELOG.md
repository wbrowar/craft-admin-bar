# Admin Bar Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).


## 5.6.2 - 2025-08-19
### Changed
- Refactored CSS and JavaScript files to be registered as asset bundles, instead of individual file registrations.

### Fixed
- The Admin Bar settings page no longer displays an empty table row by default.



## 5.6.1 - 2025-07-04
### Changed
- Updated Admin Bar Component to version `1.6.1`. To see what’s new see the [Admin Bar Component Changelog on GitHub](https://github.com/wbrowar/admin-bar-component/blob/main/CHANGELOG.md)
  - _NOTE: this includes some changes to CSS variables and their defaults. If you have overridden CSS variables for Admin Bar, take a look at the changelog to see what variables got affected._ 

### Fixed
- Set the style for links in the Seomatic and SEO widgets to match the rest of the text in the widget. This avoids links being hard to read because they picked up the text color from the page.


## 5.6.0 - 2025-07-01
### Added
- When on an entry page and clicking on the Edit button, a `returnUrl` parameter is passed to the edit page, returning you back to the front-end URL upon save. [#47](https://github.com/wbrowar/craft-admin-bar/issues/47)
- Added an optional `returnUrl` parameter to the `{{ adminBar() }}` Twig method, allowing you to set the URL that you return to upon saving an entry.
  - Setting the `returnUrl` parameter to `null` returns you to the default return URL for that entry type.

### Changed
- Updated Admin Bar Component to version `1.5.4`. To see what’s new see the [Admin Bar Component Changelog on GitHub](https://github.com/wbrowar/admin-bar-component/blob/main/CHANGELOG.md)
- Bumped the minimum Craft CMS version to `5.8.0`.


## 5.5.2 - 2025-04-24
### Changed
- Added CSS Custom Properties to style the API status line and search input (and future input fields).


## 5.5.1 - 2025-04-24
### Fixed
- Fixed an issue that occurs when no icon is set on an additional link.
- Fixed a style issue on the new search input.


## 5.5.0 - 2025-04-24
### Added
- Added a new Search Admin Bar Widget.
- Added button to Blitz Admin Bar Widget that refreshes the cache for the current page.
- Added a controller and the abilty to perform POST requests from Admin Bar Widgets.
- Added the ability to set an icon on Additional Links (via plugin settings) and `additionalLinks` (via an `admin-bar.php` config file).
  - Icons use the icon set built into Craft CMS’s Control Panel.
- Added widget config settings for Craft Published date and time formats.
  - Set `widgets.craft-published.dateFormat` to set the date format.
  - Set `widgets.craft-published.timeFormat` to set the time format.
- Added placeholder content for widgets that can’t be correctly displayed on the Admin Bar plugin settings page.

### Changed
- Updated Admin Bar Component to version `1.4.2`. To see what’s new see the [Admin Bar Component Changelog on GitHub](https://github.com/wbrowar/admin-bar-component/blob/main/CHANGELOG.md)
- Bumped the minimum Craft CMS version to `5.7.0`.

### Fixed
- Fixed an issue where CSS in some widgets wrapped text for incorrectly.

### Removed
- Removed the `title` attribute from all Admin Bar Widgets.
- Removed the home icon getting added when an Additional Link was added with the URL, `/`.
  - If you would like to add this back in, use the `house` icon name 🏠


## 5.4.0 - 2025-04-15
### Added
- Added SEO Admin Bar Widget.
  - View SEO meta info for the current page, as managed by the [SEO](https://plugins.craftcms.com/seo) plugin.
- Added Navigation Admin Bar Widget.
  - View the current page and where it appears for each navigation.
- Added Twig method to see if Admin Bar will be rendered based on the conidtions Admin Bar checks for.
  - You can use `{% if adminBarCanRender() %}{# add assets or other markup #}{% endif %}` to add code that only renders when Admin bar does.

### Deprecated
- The `canEmbed()` PHP method has been deprecated and renamed to `canRender()`.
  - The `canEmbed()` method will be removed in the next major version of Admin Bar.


## 5.3.2 - 2025-03-25
### Changed
- Updated Admin Bar Component to version `1.3.5`. To see what’s new see the [Admin Bar Component Changelog on GitHub](https://github.com/wbrowar/admin-bar-component/blob/main/CHANGELOG.md)

### Fixed
- Fixed an issue where icons would shrink in certain browsers.


## 5.3.1 - 2025-02-25
### Changed
- Updated Admin Bar Component to version `1.3.1`. To see what’s new see the [Admin Bar Component Changelog on GitHub](https://github.com/wbrowar/admin-bar-component/blob/main/CHANGELOG.md)


## 5.3.0 - 2025-02-07
### Added
- Added a menu below the greeting area (Hi, User) that links to account settings pages for the current user.
- Custom Widgets (Admin Bar PRO)
  - Added a new property to the `{{ adminBar() }}` method, called `customWidgets`, that lets you pass widgets in as a template string.
  - Added a code editor field to the plugin settings page, letting you add custom widgets via Twig and HTML.
### Changed
- Updated Admin Bar Component to version `1.3.0`. To see what’s new see the [Admin Bar Component Changelog on GitHub](https://github.com/wbrowar/admin-bar-component/blob/main/CHANGELOG.md)


## 5.2.1 - 2024-12-31
### Changed
- Changed labels on Authors and Published widgets to be more descriptive.


## 5.2.0 - 2024-12-31
### Added
- Added new Admin Bar Widget: Authors
  - Lets you quickly see who the author was for the current page you are on—without needing to go to the edit page.
- Added new Admin Bar Widget: Published
  - See the Post Date for the current entry. Click on the widget to see the Created Date, Updated Date, Entry ID, and Revision Notes.
- Added `widgetEnabledCraftAuthors` and `widgetEnabledCraftPublished` settings.

### Changed
- Refactored `AdminBarWidget` class for simpler maintainence and to remove unneeded queries.
- Updated Admin Bar Component to version `1.2.0`. To see what’s new see the [Admin Bar Component Changelog on GitHub](https://github.com/wbrowar/admin-bar-component/blob/main/CHANGELOG.md)
- Changed the display of the Blitz widget to a lightning bolt for the cached indicator.
- Changed the display of title/value-style text pairs to definition lists in the Blitz and SEOmatic widgets.


## 5.1.1 - 2024-12-20
### Fixed
- Fixed issue with Blitz widget not showing cache status.


## 5.1.0 - 2024-12-20
### Added
- Added PRO edition.
- Added Admin Bar Widgets logic and settings.
- Added the following Admin Bar widgets:
  - Blitz
  - New Entry
  - Guide
  - SEOmatic
  - Sites
  - View Count

### Changed
- Admin Bar Preview is now sticky to the top of the Admin Bar Settings page, so you can more easily preview your CSS changes.
- Updated Admin Bar Component to version `1.1.3`
- Changed the plugin license from MIT to the Craft license


## 5.0.1 - 2024-12-04
### Added
- Added `id` argument to `{{ adminBar() }}` Twig tags—letting you set the `id` for the Admin Bar wrapper element.

### Changed
- Updated Admin Bar Component to `1.1.1`.
  - Note there are changes in the CSS Custom Properties: `--admin-bar-bg-color` and `--admin-bar-bg`. Nothing should break, if you’ve overridden these in custom settings, but the behavior of `--admin-bar-bg` is slightly changed.
- Updated build dependencies.
- Bumped up required Craft CMS version to `5.5.0` to get around plugin development issue.

### Removed
- Removed `{{ adminbar() }}` Twig tag and deprecation error that was suppoed to be removed in `5.0.0`.
  - NOTE: on local development environments, Craft’s errors will ask you if you mean `adminBar` as a reminder.


## 5.0.0 - 2024-03-23
### Added
- Added support for Craft 5
- An icon is shown when no utility notifications are shown
- An icon is shown when a custom url is set to `"/"`

### Changed
- The `{{ adminBar() }}` Twig method now returns `null` instead of `false` when Admin Bar isn’t rendered.
- Updated Admin Bar icons to match Craft CMS’s CP icons

### Fixed
- Fixed an issue with the asset build process removing spaces in CSS that shouldn’t have been removed. [#42](https://github.com/wbrowar/craft-admin-bar/issues/42)


## 4.3.0 - 2024-02-09
### Added
- Added `position` argument to `{{ adminBar() }}` [#40](https://github.com/wbrowar/craft-admin-bar/issues/40)
  - When setting `{{ adminBar({ fixed: true, position: 'bottom' }) }}` Admin Bar will be fixed to the bottom of the page.

### Removed
- Removed unused logic around setting defaults for `fixed` and `sticky` arguments.

## 4.2.0 - 2024-01-25
### Added
- Link to Utilities page with a badge label showing number of utilities notifications.
- Added config option to disable Utilities link.

### Changed
- Upgraded to [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) **1.0.1** and updated dependencies

## 4.1.0 - 2024-01-14
### Added
- Added `textElements` setting for the `{{ adminBar() }}` method, letting you add text elements and labels to Admin Bar.
- Added a text element label to indicate the current environment when `devMode` is enabled.
- Added an option to `adminBarCssFile()` and `adminBarJsFile()` Twig methods that lets you output the contents of the file, instead of getting the cpresources URL.

### Changed
- Upgraded to [Admin Bar Component](https://github.com/wbrowar/admin-bar-component) **1.0.0**
- When `useJs` is set to `true` the `<script>` tag that loads Admin Bar’s JS is set to `defer`.
  - To avoid this, set `useJs` to `false` and load Admin Bar’s JS file using `{% js adminBarJsFile() with { type: 'module' } %}`.
- Custom CSS that is set on the Admin Bar plugin settings page no longer gets registered when `useCss` is set to `false`.
  - The Custom CSS will now get loaded whenever the `adminBarOnPageCss()` is called.

## 4.0.1 - 2023-12-25
### Changed
- Removed rounded corners and margin on buttons so that the "flat" style is the default.
- Moved the icon SVG code into the Admin Bar main template—making it easier to load Admin Bar via Sprig or Blitz dynamic includes. Thanks to alexr on the Craft CMS Discord for the idea!

## 4.0.0 - 2023-12-01

> {warning} Admin Bar’s composer package name has changed from `wbrowar/adminbar` to `wbrowar/craft-admin-bar`. Update your composer.json to point to [the new package on Packagist.](https://packagist.org/packages/wbrowar/craft-admin-bar)

### Added
- Added static translations for all strings on admin bar.
- Added `rtl` config option that can be passed into `adminBar()` as `adminBar({ rtl: true })`.
  - _NOTE: Admin Bar will automatically adjust when the page reading direction is set to `rtl`, so this option is here for situations where you have to manually set it._
- Added `force` option to `adminBar()`, bypassing the default check to see if Admin Bar can be rendered.
- When rendering `{{ adminBar() }}` results in an error, the error is caught and contained for easier debugging.
- All PHP classes are now documented with updated comments.

### Changed
- Admin Bar is now rendered as a web component, [Admin Bar Component](https://www.npmjs.com/package/admin-bar-component), instead of via a Twig template and custom JavaScript.
  - It’s rendered via the Shadow DOM, which means that Admin Bar is less likely to be affected by your front-end’s CSS.
  - More CSS Custom Properties can be changed to customize the look of Admin Bar.
- The `adminbar()` twig function has been deprecated and changed to `adminBar()` to better follow Craft Twig naming conventions.
- Changed all CP URLs to use the `cpUrl()` Twig method, instead of `url()`.
- Changed the Custom CSS text area field into a [Craft Code Editor](https://github.com/nystudio107/craft-code-editor) field.
- Changed all instances of `adminbar` with `admin-bar` or `craft-admin-bar`, where applicable.

### Fixed
- Fixed an issue preventing removing items from the Custom Links settings table field.

### Removed
- Removed any code related to deprecated "Admin Bar Widgets" feature.
- Removed any code related to deprecated "Edit Links" feature.
- Removed the `category` config option for `adminBar()`
- Removed `addAdminBarCss` Twig function.
- Removed `addAdminBarJs` Twig function.
- Removed `editlink` Twig function.
- Removed `getAdminBarAssets` Twig function.
- Removed `enableMobileMenu` config option.
- Removed `clearAdminBarCache` method from Bar service.
- Removed `renderAdminBarForUri` method from Bar service.
- Removed `AdminBarRenderEvent` event.
- Removed `BarController` controller.


## 3.2.1 - 2022-05-07
### Fixed
- Fixed CHANGELOG link in `composer.json`


## 3.2.0 - 2022-05-07
### Added
- Craft 4 compatibility [#28](https://github.com/wbrowar/craft-admin-bar/issues/28)

### Removed
- Removed Edit Links and Admin Bar Widgets


## 3.1.11 - 2019-10-31
### Fixed
- Composer 2 compatibility [#23](https://github.com/wbrowar/craft-admin-bar/issues/23)


## 3.1.10 - 2019-11-28
### Changed
- Bumped minimum Craft CMS requirement to `^3.3.16`

### Fixed
- Fixed Admin Bar appearing in Live Preview based on a change in Craft 3.2 ([#16](https://github.com/wbrowar/craft-admin-bar/issues/16))

## 3.1.9 - 2019-11-28
### Added
- You can now set the Edit Link to a custom URL or URI (it will be run through the `url()` Twig function). ([#15](https://github.com/wbrowar/craft-admin-bar/issues/15))
- The label for the Edit Link can be set to a custom string when setting a custom Edit Link URL.

### Removed
- Removed unused console commands

## 3.1.8.1 - 2019-04-29
### Fixed
- Fixed a Twig bug introduced in 3.1.8


## 3.1.8 - 2019-04-27
### Added
- You can switch from CSS `position: sticky` to `position: fixed` by passing in `{ fixed: true }`
  - _NOTE: Passing in `{ sticky: false }` uses `position: relative` by default_
- When using Javascript to embed Admin Bar, a `params` object can be passed in to pass arguments into the rendered Admin Bar

### Changed
- Removed Vue component example in README and replaced it with a vanilla, `fetch()`-based Javascript example

### Fixed
- Support for checking if the logged in user can edit an entry or category based on UID instead of user permissions. Thanks, Daniel Jagszent!


## 3.1.7.1 - 2019-04-16
### Fixed
- Fixed a bug that occurred when you are not logged in to a site that has Admin Bar embedded


## 3.1.7 - 2019-04-15
### Added
- Added Guide link if the Guide plugin is installed and enabled and the user can access the Guide CP section
  - Added `displayGuideLink` to disable Guide link in `admin-bar.php` config file

### Changed
- "Edit" links only appear for users who have access to edit the linked Entry or Category
- "Settings" link only appears when `allowAdminChanges` is set to `true`
- Changed sticky CSS from `position: fixed` to `position: sticky`
- Changed default Admin Bar background color
- Bumped minimum Craft version to 3.1.22

### Fixed
- Fixed an issue that displayed section name on the "Edit" link when `displayDefaultEditSection` was set to `false`
- Fixed an issue that added an asset bundle to the CP when it shouldn't have


## 3.1.6 - 2018-05-10
### Changed
- Changed "Logout" to "Sign out" to be consistent with Craft's CP Sign out link

### Fixed
- Changed the method that registered Twig extensions


## 3.1.5 - 2018-02-16
### Fixed
- Removed padding that caused a vertical scrollbar to appear
- Fixed an order of operations error (thanks to @sbossarte)


## 3.1.4 - 2018-02-10
### Added
- An Admin Bar Widget can now be invalidated using PHP via an Event that's called before widgets are loaded
- The title on Edit Links can now be overridden when `url` and `title` are both passed in as config parameters

### Changed
- Removed `--adminbar-color-bg-image` CSS variable and replaced it with `--adminbar-bg` so you can set the entire `background` shorthand CSS property
- Removed need to pass `includeAssets` into `{{ addAdminBarCss() }}` and `{{ addAdminBarJs() }}` Twig tags

### Fixed
- Fixed an issue that duplicated `additionalLinks` when settings were saved through CP
  - If you're seeing duplicate `additionalLinks`, just re-save Admin Bar's plugin settings
- Set Edit Links on Edit Links widget to a fixed height
- Fixed a bug that loaded AdminBarAsset bundle files on the front-end
- Fixed an error that was thrown when `{{ getAdminBarAssets() }}` was called and there was no logged in user
- Fixed a bug where the current logged in user photo was shown instead of the revision author's photo.


## 3.1.3 - 2018-02-07
### Added
- Admin Bar can now be pulled into sites via HTTP Request (using jQuery, Axios, and other HTTP clients)
- Added `{{ getAdminBarAssets() }}` Twig tag that includes the CSS and Javascript for Admin Bar and its widgets
- Added `--adminbar-color-bg-image` CSS variable

### Changed
- Replaced include CSS and JS pattern with new `{{ addAdminBarCss() }}` and `{{ addAdminBarJs() }}` Twig tags

### Fixed
- Fixed bug that prevented clicking on widget buttons


## 3.1.2 - 2018-02-05
### Fixed
- Quick bug fix


## 3.1.1 - 2018-02-05
### Fixed
- Quick bug fix


## 3.1.0 - 2018-02-04
### Added
- Admin Bar Widgets lets plugins add contextual content to the front-end
- Added more re-branding options with a new Custom CSS setting

### Changed
- Redesigned Edit Links to be more mobile friendly and more consistent with the look of Admin Bar
- Overhauled the CSS for Edit Links
- Changed much of the HTML and CSS for Admin Bar to make Admin Bar Widgets work
- Removed the `scrollLinks` and `cacheBar` settings
- Removed old color settings
- Replaced mobile menu toggle text with the Admin Bar icon (if you can think of a better icon idea, please suggest it)

### Fixed
- Added pointer cursor to mobile menu toggle
- Cleaned up and updated the `config.php` file (copy this to `config/admin-bar.php` to use it)


## 3.0.3 - 2017-11-24
### Added
- Added `{{ editlink() }}` Twig tag for adding Edit Links to your templates.
- Added `entry` and `url` arguments to Edit Link Twig tag.

### Changed
- Removed template variables, in favor of using `{{ adminbar() }}` and `{{ editlink() }}`.

### Fixed
- Support for Craft RC1. Thanks to @MakeilaLundy for fixing translation bugs.


## 3.0.1 - 2017-05-29
### Added
- Added option to turn off the section title shown in the default Entry/Category edit link.

### Changed
- Moved check for user and user permission from template files over to Service.
- Removed Admin Bar and Edit Links from templates when in Live Preview.

### Fixed
- Fixed detection of default Entry or Category when using `{{ adminbar() }}`.


## 3.0.0 - 2017-02-06
### Added
- Added `{{ craft.adminbar.canEmbed }}` to check if Admin Bar or Edit Links can be embedded.
- Added `bgColor` and `textColor` settings.

### Changed
- The default Admin Bar embed tag, `{% hook 'renderAdminBar' %}`, has been replaced with `{{ adminbar() }}`.
- Deprecated `color` settings and replaced it with `highlightColor`.
- Color settings—`bgColor`, `highlightColor`, and `textColor`—require CSS hex values.