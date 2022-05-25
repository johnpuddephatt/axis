<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Example extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {
        // $example = new FieldsBuilder("example");

        // $example->setLocation("post_type", "==", "post");

        // $example
        //     ->addTab("header", ["placement" => "left"])
        //     ->addText("intro", ["label" => "Introduction"])
        //     ->setInstructions("An introduction to be shown before the title.")

        //     ->addTrueFalse("subtitle")
        //     ->setInstructions("A subtitle to be shown after the title.")
        //     ->addTextarea("textarea_field", [
        //         "label" => "Textarea Field",
        //         "instructions" => "",
        //         "required" => 0,
        //     ])

        //     ->addRepeater("items")
        //     ->addText("item")
        //     ->endRepeater();

        // return $example->build();
    }
}
