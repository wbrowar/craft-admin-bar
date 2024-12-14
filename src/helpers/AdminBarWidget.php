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
            'workflow' => [
                'name' => 'Workflow',
                'widgetDescription' => Craft::t('admin-bar', 'The workflow status for the current page.'),
                'version' => null
            ],
        ];

        if (Craft::$app->getPlugins()->isPluginInstalled('blitz')) {
            $widgetHandle = 'blitz';
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $widgets[$widgetHandle]['version'] = version_compare($plugin->getVersion(), '5.9.0', '>=') ? '5.9.0' : null;
        }

        $widgetHandle = 'craft-new-entry';
        $widgets[$widgetHandle]['icon'] = Craft::getAlias('@appicons/craft-cms.svg');
        $widgets[$widgetHandle]['version'] = '5.5.0';

        $widgetHandle = 'craft-sites';
        $widgets[$widgetHandle]['icon'] = Craft::getAlias('@appicons/craft-cms.svg');
        $widgets[$widgetHandle]['version'] = '5.5.0';

        if (Craft::$app->getPlugins()->isPluginInstalled('guide')) {
            $widgetHandle = 'guide';
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $widgets[$widgetHandle]['version'] = version_compare($plugin->getVersion(), '5.2.0', '>=') ? '5.2.0' : null;
        }

        if (Craft::$app->getPlugins()->isPluginInstalled('seomatic')) {
            $widgetHandle = 'seomatic';
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $widgets[$widgetHandle]['version'] = version_compare($plugin->getVersion(), '5.1.0', '>=') ? '5.1.0' : null;
        }

        if (Craft::$app->getPlugins()->isPluginInstalled('view-count')) {
            $widgetHandle = 'view-count';
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $widgets[$widgetHandle]['version'] = version_compare($plugin->getVersion(), '2.0.0', '>=') ? '2.0.0' : null;
        }

        if (Craft::$app->getPlugins()->isPluginInstalled('workflow')) {
            $widgetHandle = 'workflow';
            $plugin = Craft::$app->getPlugins()->getPlugin($widgetHandle);
            $widgets[$widgetHandle]['icon'] = Craft::$app->getPlugins()->getPluginIconSvg($widgetHandle);
            $widgets[$widgetHandle]['name'] = $plugin->name;
            $widgets[$widgetHandle]['version'] = version_compare($plugin->getVersion(), '3.0.0', '>=') ? '3.0.0' : null;
        }

        return $widgets;
    }

    /**
     * Gets the config for the Admin Bar Widgets rendered for an entry.
     *
     * @param $entry Entry
     * @param $settings Settings
     *
     * @return array
     */
    public static function getWidgetConfigForEntry($entry, $settings): array
    {
        $config = [];

        $entrySection = !empty($entry) ? Craft::$app->getEntries()->getSectionById($entry['sectionId']) : null;

        // Blitz Widget
        $config['blitzCached'] = false;
        if (
            !empty($entry)
            && $settings->widgetEnabledBlitz
            && ($config['widgetPlugins']['blitz']['version'] ?? false)
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
        if (!empty($entry) && $settings->widgetEnabledCraftNewEntry) {
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

        // Guide Widget
        $config['guides'] = [];
        if (
            !empty($entry)
            && $settings->widgetEnabledGuide
            && ($config['widgetPlugins']['guide']['version'] ?? false)
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
