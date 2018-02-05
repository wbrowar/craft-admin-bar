# Admin Bar Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).


## 3.1.2 - 2018-02-05
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
- (3.1.2) Quick bug fix


## 3.1.1 - 2018-02-05
- (3.1.1) Quick bug fix


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


## 3.1.0 - 2017-02-06
### Added
- Admin Bar can now be pulled into sites via HTTP Request (using jQuery, Axios, and other HTTP clients).

### Changed
- Completely rebuilt the admin bar template and CSS.
  - Admin Bar now relies on CSS Grid and CSS Custom Properties.
- Replaced `bgColor`, `highlightColor`, and `textColor` settings with a `customCSS` setting that gives you more control over admin bar's color theme.


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