<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Home extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = ["front-page"];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function override()
    {
        return [
            "projects" => $this->projects(),
            "posts" => $this->posts(),
        ];
    }

    public function projects()
    {
        global $post;
        return get_posts([
            "post_type" => "project",
            "orderby" => "menu_order",
            "order" => "ASC",
            "numberposts" => 3,
        ]);
    }

    public function posts()
    {
        global $post;
        return get_posts([
            "post_type" => "post",
            "orderby" => "menu_order",
            "order" => "ASC",
            "numberposts" => 3,
        ]);
    }
}
