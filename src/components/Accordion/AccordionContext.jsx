import React from "react";
const AccordionContext = React.createContext();
export const AccordionProvider = AccordionContext.Provider;
export const AccordionConsumer = AccordionContext.Consumer;
export const useAccordionContext = () => {
    const context = React.useContext(AccordionContext);
    if (!context) {
        throw new Error("useAccordionContext must be used within an AccordionProvider");
    }
    return context;
};
export default AccordionContext;
// This code defines a context for an Accordion component in React.
// The AccordionContext is created using React.createContext().
// The AccordionProvider and AccordionConsumer are exported for use in other components.
// The useAccordionContext hook is defined to provide a way to access the context value.
// It throws an error if used outside of an AccordionProvider.
// The default export is the AccordionContext itself.
// This allows other components to consume the context and access its value.