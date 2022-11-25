<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

// add_filter("acf/settings/show_admin", "__return_false");

add_action("carbon_fields_register_fields", function () {
    Block::make(__("Quote with image"))
        ->add_fields([
            Field::make("textarea", "quote", __("Quote")),
            Field::make("text", "author", __("Author role/description")),
            Field::make("text", "author_role", __("Author")),
            Field::make("image", "author_image", __("Author image")),
        ])
        ->set_render_callback(function ($fields, $attributes, $inner_blocks) {
            echo view(
                "blocks.quote-with-image",
                compact("fields", "attributes", "inner_blocks")
            );
        });
    Block::make(__("Memberships"))
        ->add_fields([
            Field::make(
                "association",
                "memberships",
                __("Memberships")
            )->set_types([
                [
                    "type" => "post",
                    "post_type" => "membership",
                ],
            ]),
        ])
        ->set_render_callback(function ($fields, $attributes, $inner_blocks) {
            echo view(
                "blocks.memberships",
                compact("fields", "attributes", "inner_blocks")
            );
        });

    Block::make(__("Frequently asked questions"))
        ->add_fields([
            Field::make(
                "complex",
                "faq",
                __("Frequently asked question")
            )->add_fields([
                Field::make("text", "question", __("Question")),
                Field::make("textarea", "answer", __("Answer")),
            ]),
        ])
        ->set_render_callback(function ($fields, $attributes, $inner_blocks) {
            echo view(
                "blocks.faqs",
                compact("fields", "attributes", "inner_blocks")
            );
        });

    Container::make("post_meta", "About this membership")
        ->where("post_type", "=", "membership")
        ->add_fields([
            Field::make("textarea", "description", __("Description"))->set_rows(
                2
            ),
        ]);

    Container::make("post_meta", "Billing")
        ->where("post_type", "=", "membership")
        ->add_fields([
            Field::make("text", "cost", __("Membership cost")),
            Field::make(
                "text",
                "annual_plan_id",
                __("Chargebee annual plan ID")
            ),
            Field::make(
                "text",
                "monthly_plan_id",
                __("Chargebee monthly plan ID")
            ),
            Field::make("text", "url", __("URL")),
        ]);

    Container::make("post_meta", "Membership benefits")
        ->where("post_type", "=", "membership")
        ->add_fields([
            Field::make("complex", "benefits", __("Benefits"))->add_fields([
                Field::make("text", "title", __("Benefit title")),
                Field::make(
                    "textarea",
                    "description",
                    __("Benefit description")
                ),
            ]),
        ]);
});

if (function_exists("acf_add_local_field_group")):
    acf_add_local_field_group([
        "key" => "group_6276a01bbb163",
        "title" => "Artist details",
        "fields" => [
            [
                "key" => "field_6276a04573963",
                "label" => "Artist name",
                "name" => "artist_name",
                "type" => "text",
                "instructions" => "",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => [
                    "width" => "",
                    "class" => "",
                    "id" => "",
                ],
                "default_value" => "",
                "placeholder" => "",
                "prepend" => "",
                "append" => "",
                "maxlength" => "",
            ],
            [
                "key" => "field_6276a04c73964",
                "label" => "Artist link",
                "name" => "artist_link",
                "type" => "url",
                "instructions" => "",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => [
                    "width" => "",
                    "class" => "",
                    "id" => "",
                ],
                "default_value" => "",
                "placeholder" => "",
            ],
        ],
        "location" => [
            [
                [
                    "param" => "attachment",
                    "operator" => "==",
                    "value" => "all",
                ],
            ],
        ],
        "menu_order" => 0,
        "position" => "normal",
        "style" => "default",
        "label_placement" => "top",
        "instruction_placement" => "label",
        "hide_on_screen" => "",
        "active" => true,
        "description" => "",
        "show_in_rest" => 0,
    ]);

    acf_add_local_field_group([
        "key" => "group_62e31536a494a",
        "title" => "Post related project",
        "fields" => [
            [
                "key" => "field_62e3153eb48ae",
                "label" => "Project",
                "name" => "project",
                "type" => "relationship",
                "instructions" => "",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => [
                    "width" => "",
                    "class" => "",
                    "id" => "",
                ],
                "post_type" => [
                    0 => "project",
                ],
                "taxonomy" => "",
                "filters" => [
                    0 => "search",
                ],
                "elements" => "",
                "min" => "",
                "max" => "",
                "return_format" => "id",
            ],
        ],
        "location" => [
            [
                [
                    "param" => "post_type",
                    "operator" => "==",
                    "value" => "post",
                ],
            ],
        ],
        "menu_order" => 0,
        "position" => "side",
        "style" => "default",
        "label_placement" => "top",
        "instruction_placement" => "label",
        "hide_on_screen" => "",
        "active" => true,
        "description" => "",
        "show_in_rest" => 0,
    ]);

    acf_add_local_field_group([
        "key" => "group_62ab1c1ea975d",
        "title" => "User role title",
        "fields" => [
            [
                "key" => "field_62ab1c25e8ce8",
                "label" => "Job/role title",
                "name" => "role_title",
                "type" => "text",
                "instructions" => "",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => [
                    "width" => "",
                    "class" => "",
                    "id" => "",
                ],
                "default_value" => "",
                "placeholder" => "",
                "prepend" => "",
                "append" => "",
                "maxlength" => "",
            ],
        ],
        "location" => [
            [
                [
                    "param" => "user_form",
                    "operator" => "==",
                    "value" => "all",
                ],
            ],
        ],
        "menu_order" => 0,
        "position" => "normal",
        "style" => "default",
        "label_placement" => "top",
        "instruction_placement" => "label",
        "hide_on_screen" => "",
        "active" => true,
        "description" => "",
        "show_in_rest" => 0,
    ]);
endif;
