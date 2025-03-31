import React from "react";
import { useAccordionContext } from "./AccordionContext";
const AccordionHeader = ({ index, title, className, ...props }) => {
    const { openIndex, handleToggle } = useAccordionContext();
    return (
        <div key={index}>
            <button
                onClick={() => handleToggle(index)}
                className={`cursor-pointer flex justify-between w-full text-left p-4 border-b ${openIndex === index ? 'bg-gray-200' : 'bg-gray-100'}`}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-item-${index}`}
            >
                <span>{title}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
            </button>
        </div>
    );
}

export default AccordionHeader;
// This component is a part of an Accordion component.
// It is used to display the header of the accordion.