// import React, { useState } from "react";
// import Card from "./components/Card";
// import MobileCard from "./components/MobileCard";

// const App = () => {
//   const [activeTab, setActiveTab] = useState(1);
//   const handleTab = (tab, type) => {
//     console.log(tab, type);
//     setActiveTab(tab);
//   };
//   return (
//     <>
//       <div className="wrapper">
//         <h1>Section title</h1>
//         <h3>Section subtitle </h3>
//         <div className="card-container-wrapper">
//           <Card handleTab={handleTab} activeTab={activeTab} />
//         </div>

//         <div className="card-container-mob-wrapper">
//           <MobileCard handleTab={handleTab} activeTab={activeTab} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import Card from "./components/card/Card";
import MobileCard from "./components/card/MobileCard";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Section title</h1>
        <h3>Section subtitle </h3>
        <div className="card-container-wrapper">
          <Card />
        </div>

        <div className="card-container-mob-wrapper">
          <MobileCard />
        </div>
      </div>
    </>
  );
};

export default App;
