<?php
namespace App;

/**
 * Plugin Name:  Tailwind Nav Walker
 * Plugin URI:   https://github.com/roots/bedrock/
 * Description:  Uses tailwind classes.
 * Version:      1.0.0
 * Author:       Let’s Dance
 * Author URI:   https://letsdance.agency
 * License:      MIT License
 */

class Navwalker extends \Walker_Nav_Menu
{
    public $styles;

    public $default_styles = [
        "dropdown_ul" =>
            "absolute right-0 z-20 hidden w-64 overflow-hidden shadow-lg md:group-hover:block",
        "toplevel_li" => "group relative text-current ",
        "level-0-link" =>
            "inline-flex py-2 px-1 md:px-2 my-1 mx-2 lg:mx-3 2xl:mx-4 border-b-2 border-transparent items-center",
        "level-1-link" => "hover:bg-gray-100 p-4 block whitespace-no-wrap",
    ];

    public function __construct($styles = [])
    {
        $this->styles = array_merge($this->default_styles, $styles);
    }

    /**
     * Filter used to remove built in WordPress-generated classes
     * @param  mixed $var The array item to verify
     * @return boolean      Whether or not the item matches the filter
     */
    function filter_builtin_classes($var)
    {
        return false === strpos($var, "item") ? $var : "";
    }
    function start_lvl(&$output, $depth = 0, $args = [])
    {
        // $indent = str_repeat("\t", $depth);
        $output .= "<ul class='{$styles["dropdown_ul"]}'>";
        // $output .= "\n$indent<ul>\n";
        // $output .= "</div>";
        // $output .= "\n</dropdown-link>";
        // $output .= "\n</div>";
    }
    function start_el(&$output, $item, $depth = 0, $args = [], $id = 0)
    {
        $indent = $depth ? str_repeat("\t", $depth) : "";
        $class_names = $value = "";
        $unfiltered_classes = $item->classes ?? [];
        $classes = array_filter($unfiltered_classes, [
            $this,
            "filter_builtin_classes",
        ]);
        if (preg_grep("/^current/", $unfiltered_classes)) {
            $classes[] = "active";
        }
        $class_names = join(
            " ",
            apply_filters(
                "nav_menu_css_class",
                array_filter($classes),
                $item,
                $args
            )
        );
        if ($depth == 0) {
            $class_names .= $this->styles["toplevel_li"];
        }
        $class_names = $class_names
            ? ' class="' . esc_attr($class_names) . '"'
            : "";

        $id = apply_filters(
            "nav_menu_item_id",
            "menu-item-" . $item->ID,
            $item,
            $args
        );
        $id = $id ? ' id="' . esc_attr($id) . '"' : "";
        $output .= $indent . "<li" . $class_names . ">";
        $atts = [
            "title" => $item->attr_title ?? "",
            "target" => $item->target ?? "",
            "rel" => $item->xfn ?? "",
            "href" => $item->url ?? "",
            //  'title'  => ! empty( $item->attr_title ) ? $item->attr_title : '',
            // 'target' => ! empty( $item->target )     ? $item->target     : '',
            // 'rel'    => ! empty( $item->xfn )        ? $item->xfn        : '',
            // 'href'   => ! empty( $item->url )        ? $item->url        : ''
        ];

        if ($depth == 0) {
            $atts["class"] = $this->styles["level-0-link"];
        } else {
            $atts["class"] = $this->styles["level-1-link"];
        }

        $atts = apply_filters("nav_menu_link_attributes", $atts, $item, $args);
        $attributes = "";
        foreach ($atts as $attr => $value) {
            if (!empty($value)) {
                $value = "href" === $attr ? esc_url($value) : esc_attr($value);
                $attributes .= " " . $attr . '="' . $value . '"';
            }
        }
        $item_output = $args->before;

        $item_output .= "<a" . $attributes . ">";
        $item_output .=
            $args->link_before .
            apply_filters("the_title", $item->title, $item->ID) .
            $args->link_after;
        if (
            $args->depth == 0 &&
            $depth == 0 &&
            in_array("menu-item-has-children", $item->classes)
        ) {
            $item_output .=
                "<svg class='hidden w-6 h-6 ml-1 md:block' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='currentColor' d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' /></svg>";
        }
        $item_output .= "</a>";

        $item_output .= $args->after;
        $output .= apply_filters(
            "walker_nav_menu_start_el",
            $item_output,
            $item,
            $depth,
            $args
        );
    }
}
