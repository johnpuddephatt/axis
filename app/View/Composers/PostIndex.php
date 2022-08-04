<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class PostIndex extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = ["index"];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function override()
    {
        return [
            "title" => "Articles",
            "excerpt" => get_the_excerpt(get_option("page_for_posts")),
            "thumbnail" => get_the_post_thumbnail(
                get_option("page_for_posts"),
                "2by1",
                ["class" => ""]
            ),
            "posts" => $this->posts(),
            "categories" => get_categories(),
        ];
    }

    public function posts()
    {
        global $post;
        $query = [
            "post_type" => "post",
            "orderby" => "date",
            "order" => "DESC",
            "numberposts" => -1,
            "category" => $_GET["category"] ?? null,
        ];

        if (isset($_GET["projects"])) {
            $my_project = get_posts([
                "post_type" => "project",
                "posts_per_page" => 1,
                "post_name__in" => [$_GET["projects"]],
            ]);

            $query = array_merge($query, [
                "meta_query" => [
                    [
                        "key" => "project",
                        "value" => '"' . $my_project[0]->ID . '"',
                        "compare" => "LIKE",
                    ],
                ],
            ]);
        }

        return get_posts($query);
    }
}
