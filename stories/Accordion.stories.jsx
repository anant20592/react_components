import {Accordion} from '../src/components';
import React from 'react';
export default {
    title: 'Example/Accordion',
    component: Accordion,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  const array = [{id: 1, title: 'Accordion one', content: 'Accordion one content'}, {id: 2, title: 'Accordion two', content: 'Accordion two content'}]
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  const AccordionWithData = ({data}) => {
    return (
        <>
        {data.map((item) => (
            <Accordion key={item.id} >
                <Accordion.Header index={item.id} title={item.title}/>
                <Accordion.Body index={item.id} className="p-4">
                    {item.content}
                </Accordion.Body>
            </Accordion>
        ))}
        </>
    )

  }
  export const AccordionExample = {
    args: {data: array},
    render: (args) =>  (
        <AccordionWithData {...args} />
    )
};