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
use putyourlightson\blitz\Blitz;
use putyourlightson\blitz\models\SiteUriModel;
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
    /**
     * List of plugins installed in same project that can be used as Admin Bar Widgets.
     * Strings are formatted in `handle-version`.
     * The version number is pulled from the plugin version that is supported for a widget’s features.
     *
     * @return string[]
     */
    public static function getAdminBarWidgets(): array
    {
        $widgets = [
            'blitz' => [
                'name' => 'Blitz',
                'widgetDescription' => Craft::t('admin-bar', 'The Blitz cache status for the current page.'),
                'version' => null
            ],
            'craft-new-entry' => [
                'name' => 'New Entry',
                'widgetDescription' => Craft::t('admin-bar', 'Links to create a new entry from sections that the author has permission to create.'),
                'version' => null
            ],
            'craft-sites' => [
                'name' => 'Sites',
                'widgetDescription' => Craft::t('admin-bar', 'Displays the name of the site for the current page, and displays links for the same page on all propagated sites.'),
                'version' => null
            ],
            'guide' => [
                'name' => 'Guide',
                'widgetDescription' => Craft::t('admin-bar', 'Links to guides for the current page entry.'),
                'version' => null
            ],
            'seomatic' => [
                'name' => 'Seomatic',
                'widgetDescription' => Craft::t('admin-bar', 'SEO preview for the current page.'),
                'version' => null
            ],
            'view-count' => [
                'name' => 'View Count',
                'widgetDescription' => Craft::t('admin-bar', 'Displays the number of times the current page has been viewed.'),
                'version' => null
            ],
        ];

        if (Craft::$app->getPlugins()->isPluginInstalled('blitz') && Craft::$app->getPlugins()->isPluginEnabled('blitz')) {
            $widgetHandle = 'blitz';
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '5.9.0', '>=') && version_compare($version, '6.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '5.9.0';
            }
        }

        $widgetHandle = 'craft-new-entry';
        $widgets[$widgetHandle]['icon'] = Craft::getAlias('@appicons/craft-cms.svg');
        $widgets[$widgetHandle]['version'] = '5.5.0';

        $widgetHandle = 'craft-sites';
        $widgets[$widgetHandle]['icon'] = Craft::getAlias('@appicons/craft-cms.svg');
        $widgets[$widgetHandle]['version'] = '5.5.0';

        if (Craft::$app->getPlugins()->isPluginInstalled('guide') && Craft::$app->getPlugins()->isPluginEnabled('guide')) {
            $widgetHandle = 'guide';
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '5.2.0', '>=') && version_compare($version, '6.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '5.2.0';
            }
        }

        if (Craft::$app->getPlugins()->isPluginInstalled('seomatic') && Craft::$app->getPlugins()->isPluginEnabled('seomatic')) {
            $widgetHandle = 'seomatic';
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '5.1.0', '>=') && version_compare($version, '6.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '5.1.0';
            }
        }

        if (Craft::$app->getPlugins()->isPluginInstalled('view-count') && Craft::$app->getPlugins()->isPluginEnabled('view-count')) {
            $widgetHandle = 'view-count';
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '2.0.0', '>=') && version_compare($version, '3.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '2.0.0';
            }
        }

        if (Craft::$app->getPlugins()->isPluginInstalled('workflow') && Craft::$app->getPlugins()->isPluginEnabled('workflow')) {
            $widgetHandle = 'workflow';
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $version = $plugin->getVersion();
            if (version_compare($version, '3.0.0', '>=') && version_compare($version, '4.0.0', '<')) {
                $widgets[$widgetHandle]['version'] = '3.0.0';
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
    public static function getWidgetConfigForEntry($entry, $settings, $widgetPlugins): array
    {
        $config = [];

        $entrySection = !empty($entry) ? Craft::$app->getEntries()->getSectionById($entry['sectionId']) : null;

        // Blitz Widget
        $config['blitzCached'] = false;
        if (
            !empty($entry)
            && $settings->widgetEnabledBlitz
            && ($widgetPlugins['blitz']['version'] ?? false)
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
            $cachedValue = Blitz::$plugin->cacheStorage->get($siteUri);

            $config['blitzCached'] = !empty($cachedValue);
        }

        // Craft New Entry
        $config['newEntrySections'] = [];
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

            $config['newEntrySections'] = $sections;
        }

        // Craft Sites
        $config['currentSite'] = null;
        $config['entrySiteLinks'] = [];
        if ($settings->widgetEnabledCraftSites) {
            $currentSite = Craft::$app->getSites()->getCurrentSite();
            $config['currentSite'] = ['name' => $currentSite->name];
            $config['earthIcon'] = Cp::earthIcon();

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

                            $config['entrySiteLinks'][] = [
                                'title' => $site->name,
                                'url' => $propagatedEntry->getUrl(),
                            ];
                        }
                    }
                }
            }
        }

        // Guide Widget
        $config['guides'] = [];
        if (
            !empty($entry)
            && $settings->widgetEnabledGuide
            && ($widgetPlugins['guide']['version'] ?? false)
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

            $config['guides'] = Guide::$plugin->guide->getGuides(['id' => $guideIds]);
        }

        return $config;
    }
}
