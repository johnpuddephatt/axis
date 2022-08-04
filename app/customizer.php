<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

add_action("carbon_fields_register_fields", function () {
    $parent_options = Container::make(
        "theme_options",
        __("Theme Options")
    )->add_fields([
        Field::make("text", "crb_facebook_url", __("Something or other")),
        Field::make("textarea", "crb_footer_text", __("Footer Text")),
    ]);

    Container::make("theme_options", __("Organisation details"))
        ->set_page_parent($parent_options) // reference to a top level container
        ->add_fields([
            Field::make("textarea", "address", __("Address ")),
            Field::make("text", "charitynumber", __("Charity number")),
        ]);

    Container::make("theme_options", __("Social Links"))
        ->set_page_parent($parent_options) // reference to a top level container
        ->add_fields([
            Field::make("text", "facebook", __("Facebook Link")),
            Field::make("text", "twitter", __("Twitter Link")),
            Field::make("text", "instagram", __("Instagram Link")),
            Field::make("text", "linkedin", __("LinkedIn Link")),
            Field::make("text", "youtube", __("YouTube Link")),
        ]);
});

add_action("after_setup_theme", function () {
    require_once get_template_directory() . "/vendor/autoload.php";
    \Carbon_Fields\Carbon_Fields::boot();
});
