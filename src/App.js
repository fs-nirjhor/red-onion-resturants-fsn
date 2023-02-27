import React from 'react';
import Home from "./components/Home/Home";
import ItemArea from "./components/ItemArea/ItemArea";
import Quantity from "./components/Quantity/Quantity";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
    <Routes >
       <Route exact path="/" element={<Home/>}>
          <Route index element={<ItemArea defaultCategory={"lunch"}/>}/>
          <Route path="/:category" element={<ItemArea />}/>
          <Route path="/:category/:itemID" element={<Quantity />}/>
       </Route>
    </Routes>
    </div>
  );
}

export default App;
