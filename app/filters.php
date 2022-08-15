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
    return "&hellip;";
});

add_filter(
    "excerpt_length",
    function ($length) {
        if (is_admin()) {
            return $length;
        }
        return 30;
    },
    999
);

add_filter("body_class", function ($classes) {
    $classes = array_merge($classes, ["font-sans"]);
    return $classes;
});
