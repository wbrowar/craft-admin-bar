# Admin Bar Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [3.0.1] - 2017.05.29
### Added
- Added option to turn off the section title shown in the default Entry/Category edit link.

### Changed
- Moved check for user and user permission from template files over to Service
- Removed Admin Bar and Edit Links from templates when in Live Preview.

### Fixed
- Fixed detection of default Entry or Category when using `{{ adminbar() }}`


## [3.0.0] - 2017.02.06
### Added
- Added `{{ craft.adminbar.canEmbed }}` to check if Admin Bar or Edit Links can be embedded.
- Added `bgColor` and `textColor` settings.

### Changed
- The default Admin Bar embed tag, `{% hook 'renderAdminBar' %}`, has been replaced with `{{ adminbar() }}`.
- Deprecated `color` settings and replaced it with `highlightColor`.
- Color settings—`bgColor`, `highlightColor`, and `textColor`—require CSS hex values.