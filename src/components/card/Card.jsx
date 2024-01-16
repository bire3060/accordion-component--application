import React, { useState } from "react";
import down from "../../assets/icons/down.svg";
import { cardData } from "../../data/cardData";
import Accordion from "../Accordion";
import SideContent from "../SideContent";

const Card = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="card-container">
        {cardData.map((card, index) => {
          return (
            <div key={card.id}>
              <div
                className="card"
                key={card.id}
                onClick={() => handleTab(card.id)}
              >
                <div>
                  <h4>{card.header}</h4>
                  <img src={card.icon} alt={card.header} />
                </div>
                <p>{card.content}</p>
                <button
                  className={`card-btn ${
                    card.id === activeTab ? "active" : ""
                  }`}
                >
                  <span>Discover</span> <img src={down} alt="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="side-content-acc-wrapper">
        <SideContent activeTab={activeTab} />
        <Accordion activeTab={activeTab} />
      </div>
    </>
  );
};

export default Card;
