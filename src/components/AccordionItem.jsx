import React, { useState } from "react";
import collapse from "../assets/icons/collapse.svg";
import show from "../assets/icons/show.svg";

const AccordionItem = ({ item: { title, content, icon } }) => {
  const [classToggle, setClass] = useState("");

  const handleToggle = () => {
    setClass(classToggle ? "" : "is-open");
  };
  return (
    <>
      <div className="acc-header" onClick={handleToggle}>
        <div>
          <img src={icon} alt="" /> <span>{title}</span>
        </div>
        <img src={classToggle ? show : collapse} alt="" />
      </div>
      <div className={`acc-content-wrapper ${classToggle}`}>
        <div className="acc-content">{content}</div>
      </div>
    </>
  );
};

export default AccordionItem;
