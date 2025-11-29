<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar\helpers;

use Craft;
use craft\base\Element;
use craft\elements\Entry;
use craft\helpers\Cp;
use craft\helpers\DateTimeHelper;
use craft\models\ImageTransform;
use putyourlightson\blitz\Blitz;
use putyourlightson\blitz\models\SiteUriModel;
use putyourlightson\blitz\records\CacheRecord;
use wbrowar\adminbar\AdminBar;
use wbrowar\adminbar\models\Settings;
use wbrowar\guide\Guide;

/**
 * AdminBar Settings Model
 *
 * This is a model used to define the plugin's settings.
 *
 * Models are containers for data. Just about every time information is passed
 * between services, controllers, and templates in Craft, it’s passed via a model.
 *
 * https://craftcms.com/docs/plugins/models
 *
 * @author    Will Browar
 * @package   AdminBar
 * @since     5.1.0
 */
class AdminBarWidget
{
    private const WIDGET_BLITZ = 'blitz';
    private const WIDGET_CRAFT_AUTHORS = 'craft-authors';
    private const WIDGET_CRAFT_NEW_ENTRY = 'craft-new-entry';
    private const WIDGET_CRAFT_PUBLISHED = 'craft-published';
    private const WIDGET_CRAFT_SEARCH = 'craft-search';
    private const WIDGET_CRAFT_SITES = 'craft-sites';
    private const WIDGET_GUIDE = 'guide';
    private const WIDGET_NAVIGATION = 'navigation';
    private const WIDGET_SEO = 'seo';
    private const WIDGET_SEOMATIC = 'seomatic';
    private const WIDGET_VIEW_COUNT = 'view-count';

    /**
     * List of widgets enabled by plugin settings.
     *
     * @return string[]
     */
    public static function getEnabledWidgets(): array
    {
        $settings = AdminBar::$settings;
        $widgets = [
            (self::WIDGET_BLITZ) => AdminBar::$pro ? $settings->widgetEnabledBlitz : false,
            (self::WIDGET_CRAFT_AUTHORS) => AdminBar::$pro ? $settings->widgetEnabledCraftAuthors : false,
            (self::WIDGET_CRAFT_NEW_ENTRY) => AdminBar::$pro ? $settings->widgetEnabledCraftNewEntry : false,
            (self::WIDGET_CRAFT_PUBLISHED) => AdminBar::$pro ? $settings->widgetEnabledCraftPublished : false,
            (self::WIDGET_CRAFT_SEARCH) => AdminBar::$pro ? $settings->widgetEnabledCraftSearch : false,
            (self::WIDGET_CRAFT_SITES) => AdminBar::$pro ? $settings->widgetEnabledCraftSites : false,
            (self::WIDGET_GUIDE) => AdminBar::$pro ? $settings->widgetEnabledGuide : false,
            (self::WIDGET_NAVIGATION) => AdminBar::$pro ? $settings->widgetEnabledNavigation : false,
            (self::WIDGET_SEO) => AdminBar::$pro ? $settings->widgetEnabledSeo : false,
            (self::WIDGET_SEOMATIC) => AdminBar::$pro ? $settings->widgetEnabledSeomatic : false,
            (self::WIDGET_VIEW_COUNT) => AdminBar::$pro ? $settings->widgetEnabledViewCount : false,
        ];
        return array_keys(array_filter($widgets));
    }

    /**
     * List of plugins installed in same project that can be used as Admin Bar Widgets.
     * Strings are formatted in `handle-version`.
     * The version number is pulled from the plugin version that is supported for a widget’s features.
     *
     * @param bool $onlyEnabled Set to `true` to filter list down to only widgets enabled by plugin settings.
     * @return string[]
     */
    public static function getAdminBarWidgets(bool $onlyEnabled = false): array
    {
        $widgets = [
            (self::WIDGET_BLITZ) => [
                'name' => 'Blitz',
                'widgetDescription' => Craft::t('admin-bar', 'View the Blitz cache status for the current page and refresh the Blitz cache for the current page.'),
                'version' => null
            ],
            (self::WIDGET_CRAFT_AUTHORS) => [
                'name' => 'Authors',
                'widgetDescription' => Craft::t('admin-bar', 'The authors for the current entry.'),
                'version' => null
            ],
            (self::WIDGET_CRAFT_NEW_ENTRY) => [
                'name' => 'New Entry',
                'widgetDescription' => Craft::t('admin-bar', 'Links to create a new entry from sections that the author has permission to create.'),
                'version' => null
            ],
            (self::WIDGET_CRAFT_PUBLISHED) => [
                'name' => 'Published',
                'widgetDescription' => Craft::t('admin-bar', 'The Post Date for when the current page entry was published, along with other publishing information.'),
                'version' => null
            ],
            (self::WIDGET_CRAFT_SEARCH) => [
                'name' => 'Search',
                'widgetDescription' => Craft::t('admin-bar', 'Use Craft CMS’s search to find, edit, and jump to other pages in your site.'),
                'version' => null
            ],
            (self::WIDGET_CRAFT_SITES) => [
                'name' => 'Sites',
                'widgetDescription' => Craft::t('admin-bar', 'The name of the site for the current page and links to the same page on all propagated sites.'),
                'version' => null
            ],
            (self::WIDGET_GUIDE) => [
                'name' => 'Guide',
                'widgetDescription' => Craft::t('admin-bar', 'Links to guides assigned to the current page entry.'),
                'version' => null
            ],
            (self::WIDGET_NAVIGATION) => [
                'name' => 'Navigation',
                'widgetDescription' => Craft::t('admin-bar', 'Breadcrumbs for the current page in all navigations.'),
                'version' => null
            ],
            (self::WIDGET_SEO) => [
                'name' => 'SEO',
                'widgetDescription' => Craft::t('admin-bar', 'SEO preview for the current page.'),
                'widgetSettingsWarning' => Craft::t('admin-bar', 'Requires field handle to be set in Twig settings. See [Admin Bar Documentation]({docsUrl}) for details.', ['docsUrl' => 'https://github.com/wbrowar/craft-admin-bar/blob/main/README.md#configuring-an-admin-bar-widget-via-twig']),
                'version' => null
            ],
            (self::WIDGET_SEOMATIC) => [
                'name' => 'SEOmatic',
                'widgetDescription' => Craft::t('admin-bar', 'SEO preview for the current page.'),
                'version' => null
            ],
            (self::WIDGET_VIEW_COUNT) => [
                'name' => 'View Count',
                'widgetDescription' => Craft::t('admin-bar', 'The number of times the current page has been viewed.'),
                'version' => null
            ],
        ];

        $enabledWidgets = $onlyEnabled ? AdminBarWidget::getEnabledWidgets() : array_keys($widgets);

        $widgetHandle = self::WIDGET_BLITZ;
        if (in_array($widgetHandle, $enabledWidgets) && Craft::$app->getPlugins()->isPluginInstalled($widgetHandle) && Craft::$app->getPlugins()->isPluginEnabled($widgetHandle)) {
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '5.9.0', '>=') && version_compare($version, '6.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '5.9.0';
            }
        }

        $widgetHandle = self::WIDGET_CRAFT_AUTHORS;
        if (in_array($widgetHandle, $enabledWidgets)) {
            $widgets[$widgetHandle]['icon'] = Craft::getAlias('@appicons/craft-cms.svg');
            $widgets[$widgetHandle]['version'] = '5.5.0';
        }

        $widgetHandle = self::WIDGET_CRAFT_NEW_ENTRY;
        if (in_array($widgetHandle, $enabledWidgets)) {
            $widgets[$widgetHandle]['icon'] = Craft::getAlias('@appicons/craft-cms.svg');
            $widgets[$widgetHandle]['version'] = '5.5.0';
        }

        $widgetHandle = self::WIDGET_CRAFT_PUBLISHED;
        if (in_array($widgetHandle, $enabledWidgets)) {
            $widgets[$widgetHandle]['icon'] = Craft::getAlias('@appicons/craft-cms.svg');
            $widgets[$widgetHandle]['version'] = '5.5.0';
        }

        $widgetHandle = self::WIDGET_CRAFT_SEARCH;
        if (in_array($widgetHandle, $enabledWidgets)) {
            $widgets[$widgetHandle]['icon'] = Craft::getAlias('@appicons/craft-cms.svg');
            $widgets[$widgetHandle]['version'] = '5.5.0';
        }

        $widgetHandle = self::WIDGET_CRAFT_SITES;
        if (in_array($widgetHandle, $enabledWidgets)) {
            $widgets[$widgetHandle]['icon'] = Craft::getAlias('@appicons/craft-cms.svg');
            $widgets[$widgetHandle]['version'] = '5.5.0';
        }

        $widgetHandle = self::WIDGET_GUIDE;
        if (in_array($widgetHandle, $enabledWidgets) && Craft::$app->getPlugins()->isPluginInstalled($widgetHandle) && Craft::$app->getPlugins()->isPluginEnabled($widgetHandle)) {
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '5.2.0', '>=') && version_compare($version, '6.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '5.2.0';
            }
        }

        $widgetHandle = self::WIDGET_NAVIGATION;
        if (in_array($widgetHandle, $enabledWidgets) && Craft::$app->getPlugins()->isPluginInstalled($widgetHandle) && Craft::$app->getPlugins()->isPluginEnabled($widgetHandle)) {
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '3.0.0', '>=') && version_compare($version, '4.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '3.0.0';
            }
        }

        $widgetHandle = self::WIDGET_SEO;
        if (in_array($widgetHandle, $enabledWidgets) && Craft::$app->getPlugins()->isPluginInstalled($widgetHandle) && Craft::$app->getPlugins()->isPluginEnabled($widgetHandle)) {
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '5.0.0', '>=') && version_compare($version, '6.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '5.0.0';
            }
        }

        $widgetHandle = self::WIDGET_SEOMATIC;
        if (in_array($widgetHandle, $enabledWidgets) && Craft::$app->getPlugins()->isPluginInstalled($widgetHandle) && Craft::$app->getPlugins()->isPluginEnabled($widgetHandle)) {
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '5.1.0', '>=') && version_compare($version, '6.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '5.1.0';
            }
        }

        $widgetHandle = self::WIDGET_VIEW_COUNT;
        if (in_array($widgetHandle, $enabledWidgets) && Craft::$app->getPlugins()->isPluginInstalled($widgetHandle) && Craft::$app->getPlugins()->isPluginEnabled($widgetHandle)) {
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '2.0.0', '>=') && version_compare($version, '3.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '2.0.0';
            }
        }

        return $widgets;
    }

    /**
     * Gets the config for the Admin Bar Widgets rendered for an entry.
     *
     * @param $entry Entry
     * @param $settings Settings
     * @param $widgetPlugins array
     *
     * @return array
     */
    public static function getWidgetConfigForEntry(Entry | null $entry, Settings $settings, array $widgetPlugins, array $userWidgetsConfig): array
    {
        $config = [];

        $onSettingsPreivew = implode('/', Craft::$app->getRequest()->getSegments()) == 'settings/plugins/admin-bar';

        $entrySection = !empty($entry) ? Craft::$app->getEntries()->getSectionById($entry['sectionId']) : null;

        // Blitz Widget
        $config[self::WIDGET_BLITZ] = [
            'cached' => false,
            'cachedDate' => null,
            'siteUri' => [],
        ];
        if (
            !empty($entry)
            && $settings->widgetEnabledBlitz
            && ($widgetPlugins[self::WIDGET_BLITZ]['version'] ?? false)
            && class_exists(Blitz::class)
            && class_exists(SiteUriModel::class)
        ) {
            $siteUri = new SiteUriModel([
                'siteId' => $entry->siteId,
                'uri' => $entry->uri,
            ]);
            if ($siteUri->uri === Element::HOMEPAGE_URI) {
                $siteUri->uri = '';
            }
            $cacheRecord = CacheRecord::find()
                ->where($siteUri->toArray())
                ->one();

            if (!empty($cacheRecord)) {
                $config[self::WIDGET_BLITZ]['cached'] = true;
                $config[self::WIDGET_BLITZ]['cachedDate'] = DateTimeHelper::toDateTime($cacheRecord->dateCached);
                $config[self::WIDGET_BLITZ]['siteUri'] = $siteUri->toArray();
            }
        }

        // Craft Authors
        $config[self::WIDGET_CRAFT_AUTHORS] = [
            'entryAuthors' => [],
        ];
        if (
            !empty($entry)
            && $settings->widgetEnabledCraftAuthors
        ) {
            $config[self::WIDGET_CRAFT_AUTHORS]['entryAuthors'] = array_map(function ($author) {
                $photo = $author->getPhoto();
                $photoUrl = !empty($photo) ? $photo->getUrl(new ImageTransform([
                    'mode' => 'crop',
                    'width' => 50,
                    'height' => 50,
                ])) : null;

                return [
                    'name' => $author->friendlyName,
                    'photo' => $photoUrl,
                ];
            }, $entry->authors);
        }

        // Craft New Entry
        $config[self::WIDGET_CRAFT_NEW_ENTRY] = ['sections' => []];
        if ($settings->widgetEnabledCraftNewEntry) {
            $sections = [];
            $editableSections = Craft::$app->getEntries()->getEditableSections();

            foreach ($editableSections as $editableSection) {
                if ($editableSection->type !== 'single') {
                    $sections[] = [
                        'handle' => $editableSection->handle,
                        'name' => $editableSection->name,
                        'icon' => $editableSection->getEntryTypes()[0]->icon ?? 'newspaper',
                    ];
                }
            }

            $config[self::WIDGET_CRAFT_NEW_ENTRY]['sections'] = $sections;
        }

        // Craft Published
        $config[self::WIDGET_CRAFT_PUBLISHED] = [
            'dateFormat' => 'medium',
            'timeFormat' => 'short',
        ];
        if ($settings->widgetEnabledCraftPublished) {
            $config[self::WIDGET_CRAFT_PUBLISHED]['dateFormat'] = $userWidgetsConfig[self::WIDGET_CRAFT_PUBLISHED]['dateFormat'] ?? $config[self::WIDGET_CRAFT_PUBLISHED]['dateFormat'];
            $config[self::WIDGET_CRAFT_PUBLISHED]['timeFormat'] = $userWidgetsConfig[self::WIDGET_CRAFT_PUBLISHED]['timeFormat'] ?? $config[self::WIDGET_CRAFT_PUBLISHED]['timeFormat'];
        }

        // Craft Search
        $config[self::WIDGET_CRAFT_SEARCH] = [
            'onSettingsPreivew' => $onSettingsPreivew,
        ];

        // Craft Sites
        $config[self::WIDGET_CRAFT_SITES] = [
            'currentSite' => null,
            'earthIcon' => null,
            'entrySiteLinks' => [],
        ];
        if ($settings->widgetEnabledCraftSites) {
            $currentSite = Craft::$app->getSites()->getCurrentSite();
            $config[self::WIDGET_CRAFT_SITES]['currentSite'] = ['name' => $currentSite->name];
            $config[self::WIDGET_CRAFT_SITES]['earthIcon'] = Cp::earthIcon();

            if (!empty($entry)) {
                $supportedSites = $entry->supportedSites;

                if (!empty($supportedSites)) {
                     $supportedSiteIds = array_map(function ($site) {
                        return $site['siteId'];
                    }, $supportedSites);

                    $propagatedEntries = Entry::find()->id($entry->id)->siteId($supportedSiteIds)->all();
                    foreach ($propagatedEntries as $propagatedEntry) {
                        if ($propagatedEntry->siteId !== $currentSite->id) {
                            $site = Craft::$app->getSites()->getSiteById($propagatedEntry->siteId);

                            $config[self::WIDGET_CRAFT_SITES]['entrySiteLinks'][] = [
                                'title' => $site->name,
                                'url' => $propagatedEntry->getUrl(),
                            ];
                        }
                    }
                }
            }
        }

        // Guide Widget
        $config[self::WIDGET_GUIDE] = [
            'guides' => [],
        ];
        if (
            !empty($entry)
            && $settings->widgetEnabledGuide
            && ($widgetPlugins[self::WIDGET_GUIDE]['version'] ?? false)
            && class_exists(Guide::class)
        ) {
            $guideIds = [];

            $entryGuidePlacements = Guide::$plugin->placement->getPlacements([
                'group' => 'entry',
                'groupId' => null,
            ]);

            $sectionGuidePlacements = Guide::$plugin->placement->getPlacements([
                'group' => 'section',
                'groupId' => $entrySection->uid,
            ]);

            $placements = array_merge($entryGuidePlacements, $sectionGuidePlacements);

            foreach ($placements as $placement) {
                $guideIds[] = $placement->guideId;
            }

            $config[self::WIDGET_GUIDE]['guides'] = Guide::$plugin->guide->getGuides(['id' => $guideIds]);
        }

        // SEO
        $config[self::WIDGET_SEO] = [
            'handle' => 'seo',
        ];
        if (
            !empty($entry)
            && $settings->widgetEnabledSeo
            && ($widgetPlugins[self::WIDGET_SEO]['version'] ?? false)
        ) {
            $seoFieldHandle = null;
            $fields = $entry->getFieldLayout()->getCustomFields();
            foreach ($fields as $field) {
                if (get_class($field) == 'ether\seo\fields\SeoField') {
                    $config[self::WIDGET_SEO]['handle'] = $field->handle;
                }
            }
            $config[self::WIDGET_SEO]['handle'] = $userWidgetsConfig[self::WIDGET_SEO]['handle'] ?? $config[self::WIDGET_SEO]['handle'];
        }

        return $config;
    }

    /**
     * Performs an action from an Admin Bar widget.
     *
     * @param string $handle The handle for the Admin Bar Widget’s plugin.
     * @param string $action The handle for the action being fired.
     * @param array $params Parameters that can be passed into the action to change its behavior.
     * @return array
     */
    public static function performWidgetAction(string $handle, string $action, array $params = []): array
    {
        $results = [
            'message' => Craft::t('admin-bar', 'Controller action could not be performed.'),
            'status' => 'error',
        ];

        if (AdminBar::$pro) {
            if ($handle == self::WIDGET_BLITZ) {
                if ($action === 'refresh-cache') {
                    $siteUri = new SiteUriModel([
                        'siteId' => $params['siteId'],
                        'uri' => $params['uri'],
                    ]);

                    Blitz::$plugin->refreshCache->refreshSiteUris([$siteUri], [], true);

                    $results = [
                        'message' => Craft::t('admin-bar', 'Blitz cache refreshed.'),
                        'refreshPage' => true,
                        'status' => 'success',
                    ];
                }
            } elseif ($handle == self::WIDGET_CRAFT_SEARCH) {
                if ($action === 'search') {
                    $data = [
                        'searchResults' => [],
                        'searchResultsStatus' => 'NO_RESULTS',
                    ];
                    
                    if ($params['query'] ?? false) {
                        $formattedQuery = ctype_alpha($params['query']) ? '*' . $params['query'] . '*' : $params['query'];

                        $searchResponse = Entry::find()
                            ->section('*')
                            ->search($formattedQuery)
                            ->orderBy('score')
                            ->limit(25)
                            ->all();

                        if (!empty($searchResponse)) {
                            $resultsFormatted = [];
                            $editableSectionIds = Craft::$app->getEntries()->getEditableSectionIds();

                            foreach ($searchResponse as $entry) {
                                $addEditUrl = in_array($entry->section->id, $editableSectionIds);

                                $resultsFormatted[] = [
                                    'cpEditUrl' => $addEditUrl ? $entry->getCpEditUrl() : '',
                                    'status' => strtoupper($entry->getStatus()),
                                    'title' => $entry->title,
                                    'url' => $entry->url ?? '',
                                ];
                            }

                            $data['searchResults'] = $resultsFormatted;
                            $data['searchResultsStatus'] = 'OK';
                        }
                    }
                    
                    $results = [
                        'data' => $data,
                        'message' => Craft::t('admin-bar', 'Search was successful.'),
                        'status' => 'success',
                    ];
                }
            }
        }

        return $results;
    }
}
