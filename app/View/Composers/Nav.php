<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Nav extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = ["sections.header", "sections.footer"];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        if ($this->view->name() == "sections.header") {
            return [
                "primaryNavigation" => $this->navigation(
                    "primary_navigation",
                    [
                        "menu_class" => "flex flex-col md:flex-row justify-end",
                    ],
                    [
                        "level-0-link" => "px-4 ",
                        "level-1-link" => "text-sm",
                    ]
                ),
            ];
        } else {
            return [
                "primaryNavigationFooter" => $this->navigation(
                    "primary_navigation",
                    [
                        "depth" => 1,
                        "menu_class" => "flex flex-col",
                    ],
                    [
                        "level-0-link" => "hover:border-sky",
                    ]
                ),
            ];
        }
    }

    public function navigation($name, $args = [], $styles = [])
    {
        if (has_nav_menu($name)) {
            return wp_nav_menu(
                array_merge(
                    [
                        "theme_location" => $name,
                        "walker" => new \App\Navwalker($styles),
                        "menu_class" => "nav flex",
                        "echo" => false,
                    ],
                    $args
                )
            );
        }
    }
}
