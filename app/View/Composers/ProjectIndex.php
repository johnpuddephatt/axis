<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class ProjectIndex extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = ["template-projectindex"];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function override()
    {
        return [
            "title" => "Projects",
            "thumbnail" => get_the_post_thumbnail(null, "2by1", [
                "class" => "",
            ]),
            "excerpt" => get_the_excerpt(),
            "projects" => $this->projects(),
        ];
    }

    public function projects()
    {
        global $post;
        return get_posts([
            "post_type" => "project",
            "orderby" => "menu_order",
            "order" => "ASC",
            "numberposts" => -1,
        ]);
    }
}
