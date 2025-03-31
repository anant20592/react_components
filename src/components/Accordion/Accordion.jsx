import React, { useState } from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";
import {AccordionProvider} from "./AccordionContext";

const Accordion = ({ children, defaultOpen = null }) => {
    const [openIndex, setOpenIndex] = useState(defaultOpen);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <AccordionProvider value={{ openIndex, handleToggle }}>
            <div className="border">
                {children}
            </div>
        </AccordionProvider>
    );
};

Accordion.Header = AccordionHeader
Accordion.Body = AccordionBody
Accordion.Provider = AccordionProvider
export default Accordion;