# Admin Bar Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [3.0.0] - 2017.02.05
### Added
- Added `{{ craft.adminbar.canEmbed }}` to check if Admin Bar or Edit Links can be embedded.
- Added `bgColor` and `textColor` settings.

### Changed
- The default Admin Bar embed tag, `{% hook 'renderAdminBar' %}`, has been replaced with `{{ adminbar() }}`.
- Deprecated `color` settings and replaced it with `highlightColor`.
- Color settings—`bgColor`, `highlightColor`, and `textColor`—require CSS hex values.