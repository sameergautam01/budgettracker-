import React from "react";
import Epenses from "./components/Epenses";
import Budget from "./components/Budget";
import "bootstrap/dist/css/bootstrap.min.css"
import Remaining from "./components/Remaining";

function App() {
  return (
   <div className="container">
     <div className='row mt-3'>
       <h1>My budget planner</h1>
       <div className='col-sm'>
         <Budget />
       </div>
       <div className='col-sm'>
         <Epenses/>
       </div>
       <div className='col-sm'>
         <Remaining/>
       </div>
     </div>
   </div>
  )
};

export default App;
