import React from "react";
import { Card } from "../src/components";


export default {
    title: 'Example/Card',
    component: Card,
  //  subcomponents: { Button },
    parameters: {
      //  layout: 'centered',
    },
    tags: ['autodocs'],
};

export const CardWithData = {
    args: {
        title: "Card Title",
        description: "Card Description",
        image: "https://via.placeholder.com/150",
        footer: "Card Footer"
    },
    render: (args) => (
         <Card {...args}>
            <Card.Header title={args.title}/>
            <Card.Content>
                <p>{args.description}</p>
            </Card.Content>
            <Card.Footer>
                <p>{args.footer}</p>
            </Card.Footer>
         </Card>
    )
}