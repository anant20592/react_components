import React, {useRef} from 'react';
import { useAccordionContext } from './AccordionContext';
const AccordionBody = ({ children, index }) => {
    const {openIndex} = useAccordionContext();
    const contentRef = useRef(null);
    const contentHeight = contentRef.current ? contentRef.current.scrollHeight : 0;
    return (
        <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[1000px]' : 'max-h-0'}`}
        style={{ maxHeight: openIndex === index ? contentHeight : 0 }}
        aria-hidden={openIndex !== index}
      >
        <div className="p-4">
            {children}
        </div>
        </div>
    );
}
export default AccordionBody;
// This component is a part of an Accordion component.
// It is used to display the content of the accordion when it is expanded.
// The AccordionBody component is a functional component that takes in children as props.
// It returns a div with some styling applied to it.
// The div contains the children passed to the AccordionBody component.
// The children can be any valid React element or a combination of elements.
// The component is styled using Tailwind CSS classes.