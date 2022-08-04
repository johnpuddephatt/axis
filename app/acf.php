<?php
add_filter("acf/settings/show_admin", "__return_false");

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
