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
                        "menu_class" =>
                            "flex flex-col gap-8 xl:gap-0 xl:items-center xl:flex-row justify-end",
                    ],
                    [
                        "level-0-link" =>
                            "inline-block  px-2 xl:px-4 2xl:px-6  hover:strikethrough strikethrough-yellow",
                        "level-1-link" => "text-sm",
                    ]
                ),
            ];
        } else {
            return [
                "footerNavigation" => $this->navigation(
                    "footer_navigation",
                    [
                        "depth" => 1,
                        "menu_class" =>
                            "ml-0 pl-0 flex flex-row gap-4 list-none 2xl:text-lg",
                    ],
                    [
                        "level-0-link" => "no-underline",
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
