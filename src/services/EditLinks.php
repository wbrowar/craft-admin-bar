<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\adminbar\services;

use wbrowar\adminbar\AdminBar;
use Mexitek\PHPColors\Color;

use Craft;
use craft\base\Component;
use craft\web\View;


/**
 * EditLinks Service
 *
 * All of your plugin’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other plugins can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Will Browar
 * @package   AdminBar
 * @since     3.0.0
 */
class EditLinks extends Component
{
    private $_editEmbedded = false;
    private $_editId = 0;

    // Public Methods
    // =========================================================================

    /**
     * This function can literally be anything you want, and you can have as many service
     * functions as you want
     *
     * From any other plugin file, call it like this:
     *
     *     AdminBar::$plugin->editLinks->exampleService()
     *
     * @return mixed
     */
    public function render(array $config = [])
    {
        $settings = AdminBar::$plugin->getSettings();
        $config['editEmbedded'] = $this->_editEmbedded;
        $entry = ($config['entry'] = $config['entry'] ?? null);
        $config['url'] = $config['url'] ?? '#';
        $config['id'] = $this->_editId;
        $config['enabled'] = AdminBar::$plugin->bar->canEmbed() ? true : false;

        // add config file settings to config
        $config['displayEditDate'] = $settings->displayEditDate;
        $config['displayEditAuthor'] = $settings->displayEditAuthor;
        $config['displayRevisionNote'] = $settings->displayRevisionNote;

        // figure out if $entry is a custom URL string, otherwise assume it's an Entry
        $config['type'] = $config['entry'] ? 'entry' : 'string';

        // get recent revision information
        $revision = $config['type'] == 'entry' ? Craft::$app->entryRevisions->getVersionsByEntryId($entry->id, $entry->siteId, 1, true) : null;
        if ($revision ?? false) {
            $revisionAuthor = Craft::$app->users->getUserById($revision[0]->creatorId);
            $config['revisionAuthor'] = $revisionAuthor;
            $config['revisionNote'] = $revision[0]->revisionNotes;
        } else {
            $config['revisionAuthor'] = null;
            $config['revisionNote'] = null;
        }

        // set title based on override, entry, or url provided
        if (!isset($config['title'])) {
            if ($config['type'] == 'entry') {
                $config['title'] = $config['entry']->title;
            } else {
                $config['title'] = $config['url'];
            }
        }

        $oldMode = Craft::$app->view->getTemplateMode();
        Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_CP);
        $html = Craft::$app->view->renderTemplate('admin-bar/editLinks', $config);
        Craft::$app->view->setTemplateMode($oldMode);

        print($html);

        $this->_editId += 1;
        $this->_editEmbedded = true;

        return '';
    }
    private function _getColorRgbString(string $cssColor):string
    {
        // convert color to RGB and return string that can be transparentized
        $color = new Color($cssColor);
        $colorRgb = $color->getRgb();
        return $colorRgb['R'] . ',' . $colorRgb['G'] . ',' . $colorRgb['B'];
    }
}
