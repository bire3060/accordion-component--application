import React from "react";
import { cardData } from "../data/cardData";
import AccordionItem from "./AccordionItem";

const Accordion = ({ activeTab }) => {
  return (
    <div className="acc-container">
      {cardData[activeTab - 1].accItmes.map((item) => (
        <AccordionItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Accordion;
