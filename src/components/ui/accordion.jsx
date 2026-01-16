import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <button className="accordion-trigger" onClick={onClick}>
        <span className="accordion-title">{title}</span>
        <ChevronDown 
          className="accordion-icon" 
          size={18} 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div 
        className="accordion-content-wrapper" 
        style={{ height: isOpen ? 'auto' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <div className="accordion-content">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion-root">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export { Accordion };