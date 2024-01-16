import React from "react";
import { cardData } from "../data/cardData";
import Button from "./common/Button";

const SideContent = ({ activeTab }) => {
  return (
    <div className="side-content-container">
      <div>{cardData[activeTab - 1].header}</div>
      <p>{cardData[activeTab - 1].content}</p>
      <div>
        <Button title="Discover Product" />
      </div>
    </div>
  );
};

export default SideContent;
