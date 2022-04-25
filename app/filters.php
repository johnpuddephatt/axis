<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter("excerpt_more", function () {
    return sprintf(
        ' &hellip; <a href="%s">%s</a>',
        get_permalink(),
        __("Continued", "sage")
    );
});

add_filter("body_class", function ($classes) {
    $classes = array_merge($classes, ["font-sans"]);

    // if (is_home()) {
    //     $classes = array_merge($classes, [
    //         "h-screen",
    //         "overflow-y-auto",
    //         "transition-colors",
    //         "duration-500",
    //         "perspective",
    //         "bg-axis-yellow",
    //     ]);
    // }
    return $classes;

    //
});
