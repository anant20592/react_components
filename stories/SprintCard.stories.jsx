import React from "react";
import {SprintCard} from "../src/components";

export default {
  title: "Example/SprintCard",
  component: SprintCard,
  tags: ['autodocs'],
  layput: 'centered'
};

export const SprintCardWithData = {
    args: {
        description: "Sprint Description",
        ticketId: "TC-1304",
        storypoint: "1",
        assignee: "",
        onClick: (data) => console.log("Card Click", data)
    },
    decorators: [(Story) => <div style={{width: '300px'}}><Story/></div>]
}