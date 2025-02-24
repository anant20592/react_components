import React from "react";
import { Rounded  } from "../src/components";

export default {
    component: Rounded,
    title: "Example/Rounded",
    parameters: {
        layout: "centered",
    },  
    tags: ['autodocs']
}

export const StoryPoint = {
    args: {
        children: ""
    },
    render: (args) => (
        <Rounded>{args.children}</Rounded>
    )
};