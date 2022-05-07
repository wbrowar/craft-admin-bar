# Admin Bar Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## 3.2.0 - 2019-05-07
### Added
- Craft 4 compatibility [#28](https://github.com/wbrowar/craft-adminbar/issues/28)

### Removed
- Removed Edit Links and Admin Bar Widgets


## 3.1.11 - 2019-10-31
### Fixed
- Composer 2 compatibility [#23](https://github.com/wbrowar/craft-adminbar/issues/23)


## 3.1.10 - 2019-11-28
### Changed
- Bumped minimum Craft CMS requirement to `^3.3.16`

### Fixed
- Fixed Admin Bar appearing in Live Preview based on a change in Craft 3.2 ([#16](https://github.com/wbrowar/craft-adminbar/issues/16))

## 3.1.9 - 2019-11-28
### Added
- You can now set the Edit Link to a custom URL or URI (it will be run through the `url()` Twig function). ([#15](https://github.com/wbrowar/craft-adminbar/issues/15))
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