<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Project extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = ["partials.content-single-project"];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function override()
    {
        return [
            "posts" => $this->posts(),
        ];
    }

    public function posts()
    {
        global $post;
        return get_posts([
            "post_type" => "post",
            "orderby" => "date",
            "order" => "DESC",
            "numberposts" => -1,
            "meta_query" => [
                [
                    "key" => "project",
                    "value" => '"' . get_the_ID() . '"',
                    "compare" => "LIKE",
                ],
            ],
        ]);
    }
}
