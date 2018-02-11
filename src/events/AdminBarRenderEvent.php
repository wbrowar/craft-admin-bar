<?php

namespace wbrowar\adminbar\events;

use yii\base\Event;

class AdminBarRenderEvent extends Event
{
    public $category;
    public $entry;
}
