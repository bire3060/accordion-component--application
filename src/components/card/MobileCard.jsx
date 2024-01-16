import React, { useState } from "react";
import add from "../../assets/icons/add.svg";
import { cardData } from "../../data/cardData";
import Accordion from "../Accordion";
import Button from "../common/Button";
import SideContent from "../SideContent";

const MobileCard = () => {
  const [activeTab, setActiveTab] = useState({ id: 1, open: false });
  const handleTab = (tab) => {
    setActiveTab({ id: tab, open: !activeTab.open });
  };
  return (
    <div className="card-container-mob">
      {cardData.map((card, index) => {
        return (
          <div key={card.id}>
            <div
              className={`card-mob ${
                activeTab.id === card.id && activeTab.open ? "" : "shadow"
              }`}
              key={card.id}
              onClick={() => handleTab(card.id)}
            >
              <div>
                <img src={card.icon} alt={card.header} /> <h4>{card.header}</h4>
              </div>
              <img src={add} />
            </div>
            <div
              className={`toggle-section ${
                activeTab.id === card.id && activeTab.open ? "is-open" : ""
              }`}
            >
              <div className="side-content-acc-wrapper">
                <SideContent activeTab={activeTab.id} />
                <Accordion activeTab={activeTab.id} />
                <div>
                  <Button title="Discover Product" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileCard;
