<?php

/**
 * Theme block styles.
 */

if (function_exists("register_block_style")) {
    register_block_style("core/image", [
        "name" => "rotated-image",
        "label" => __("Rotated Image", "textdomain"),
        "is_default" => false,
        "inline_style" =>
            ".wp-block-image.is-style-rotated-image { margin-top: var(--gallery-block--gutter-size, 16px) !important; margin-bottom: var(--gallery-block--gutter-size, 16px) !important; transform: rotate(8deg); transform-origin: center center; }",
    ]);

    register_block_style("core/image", [
        "name" => "rotated-image-reverse",
        "label" => __("Rotated Image (reverse)", "textdomain"),
        "is_default" => false,
        "inline_style" =>
            ".wp-block-image.is-style-rotated-image-reverse { margin-top: var(--gallery-block--gutter-size, 16px) !important; margin-bottom: var(--gallery-block--gutter-size, 16px) !important; transform: rotate(-12deg); transform-origin: center center; }",
    ]);

    add_filter(
        "register_block_type_args",
        function ($args, $name) {
            if ($name == "core/image") {
                $args["render_callback"] = function ($attributes, $content) {
                    return str_replace("</figure>", "", $content) .
                        view("partials.image-tag", [
                            "thumbnail_id" => $attributes["id"],
                            "position" => "left",
                        ])->render() .
                        "</figure>";
                };
            }
            return $args;
        },
        10,
        3
    );
}
