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
    public function render($entryOrString, array $config = [])
    {
        $settings = AdminBar::$plugin->getSettings();
        $config['editEmbedded'] = $this->_editEmbedded;
        $config['entryOrString'] = $entryOrString;
        $config['id'] = $this->_editId;
        $config['enabled'] = AdminBar::$plugin->bar->canEmbed() ? true : false;
        $config['bgColor'] = (!empty($config['bgColor'])
                ? $this->_getColorRgbString($config['bgColor']) : null)
            ?? (!empty($settings->bgColor)
                ? $this->_getColorRgbString($settings->bgColor) : null)
            ?? '0, 0, 0';
        $config['highlightColor'] = (!empty($config['highlightColor'])
                ? $this->_getColorRgbString($config['highlightColor']) : null)
            ?? (!empty($settings->highlightColor)
                ? $this->_getColorRgbString($settings->highlightColor) : null)
            ?? '218, 90, 71';
        $config['textColor'] = (!empty($config['textColor'])
                ? $this->_getColorRgbString($config['textColor']) : null)
            ?? (!empty($settings->textColor)
                ? $this->_getColorRgbString($settings->textColor) : null)
            ?? '255, 255, 255';

//        if (Craft::$app->requireEdition(Craft::Pro) === true) {
//            $config['localesEnabled'] = true;
//        } else {
//            $config['localesEnabled'] = false;
//        }

        // add config file settings to config
        $config['displayEditDate'] = $settings->displayEditDate;
        $config['displayEditAuthor'] = $settings->displayEditAuthor;
        $config['displayRevisionNote'] = $settings->displayRevisionNote;

        // figure out if $entryOrString is a custom URL string, otherwise assume it's an Entry
        if (is_string($entryOrString)) {
            $config['type'] = 'string';
        } else {
            $config['type'] = 'entry';
        }

        // get recent revision information
        $revision = $config['type'] == 'entry' ? Craft::$app->entryRevisions->getVersionsByEntryId($entryOrString->id, $entryOrString->siteId, 1, true) : '';
        if (!empty($revision)) {
            $revisionAuthor = Craft::$app->users->getUserById($revision[0]->creatorId);
            $config['revisionAuthor'] = $revisionAuthor;
            $config['revisionNote'] = $revision[0]->revisionNotes;
        } else {
            $config['revisionAuthor'] = null;
            $config['revisionNote'] = null;
        }

        $oldMode = Craft::$app->view->getTemplateMode();
        Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_CP);
        $html = Craft::$app->view->renderTemplate('admin-bar/editLinks', $config);
        Craft::$app->view->setTemplateMode($oldMode);

        print($html);

        $this->_editId += 1;
        $this->_editEmbedded = true;
    }
    private function _getColorRgbString(string $cssColor):string
    {
        // convert color to RGB and return string that can be transparentized
        $color = new Color($cssColor);
        $colorRgb = $color->getRgb();
        return $colorRgb['R'] . ',' . $colorRgb['G'] . ',' . $colorRgb['B'];
    }
}