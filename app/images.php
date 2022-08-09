<?php

/**
 * Theme images.
 */

namespace App;

use function Roots\bundle;

add_image_size("16by9-xxxl", 3008, 1692, true);
add_image_size("16by9-xxl", 2000, 1125, true);
add_image_size("16by9-xl", 1600, 900, true);
add_image_size("16by9-l", 1200, 675, true);
add_image_size("16by9", 800, 450, true);
add_image_size("16by9-s", 400, 225, true);
add_image_size("16by9-xs", 240, 135, true);

add_image_size("9by16-xxl", 1125, 2000, true);
add_image_size("9by16-xl", 900, 600, true);
add_image_size("9by16-l", 675, 1200, true);
add_image_size("9by16", 450, 800, true);
add_image_size("9by16-s", 225, 400, true);
add_image_size("9by16-xs", 135, 240, true);

add_image_size("2by1-xxxl", 3000, 1500, true);
add_image_size("2by1-xxl", 2000, 1000, true);
add_image_size("2by1-xl", 1600, 800, true);
add_image_size("2by1-l", 1200, 600, true);
add_image_size("2by1", 800, 400, true);
add_image_size("2by1-s", 480, 240, true);
add_image_size("2by1-xs", 240, 120, true);

add_image_size("3by1-2xl", 3000, 1000, true);
add_image_size("3by1-xl", 1620, 540, true);
add_image_size("3by1-l", 1200, 400, true);
add_image_size("3by1", 810, 270, true);
add_image_size("3by1-s", 420, 140, true);
add_image_size("3by1-xs", 240, 80, true);

// add_image_size( 'twothirds-2xl', 1500, 1000, true );
// add_image_size( 'twothirds-xl', 1200, 800, true );
// add_image_size( 'twothirds-l', 900, 600, true );
// add_image_size( 'twothirds', 640, 420, true );
// add_image_size( 'twothirds-s', 450, 300, true );
// add_image_size( 'twothirds-xs', 240, 160, true );

add_image_size("4by3-xxxl", 3000, 2250, true);
add_image_size("4by3-xxl", 1600, 1200, true);
add_image_size("4by3-xl", 1200, 900, true);
add_image_size("4by3-l", 960, 720, true);
add_image_size("4by3", 800, 600, true);
add_image_size("4by3-s", 640, 480, true);
add_image_size("4by3-xs", 320, 240, true);

add_image_size("square-xxl", 1600, 1600, true);
add_image_size("square-xl", 1200, 1200, true);
add_image_size("square-l", 960, 960, true);
add_image_size("square", 800, 800, true);
add_image_size("square-s", 640, 640, true);
add_image_size("square-xs", 320, 320, true);

add_filter("image_size_names_choose", function ($default_sizes) {
    return array_merge($default_sizes, [
        "square" => __("Square"),
        "4by3" => __("4:3"),
        "16by9" => __("16:9"),
        "2by1" => __("2:1"),
        "3by1" => __("3:1"),
    ]);
});
