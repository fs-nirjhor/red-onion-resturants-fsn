import React from 'react';
import Home from "./components/Home/Home";
import ItemArea from "./components/ItemArea/ItemArea";
import Quantity from "./components/Quantity/Quantity";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DeliveryDetails from "./components/DeliveryDetails/DeliveryDetails";
import Location from "./components/Location/Location";
import { Routes, Route } from "react-router-dom";
import {connect} from "react-redux";

function App(props) {
	const {loggedUser} = props;
  return (
    <div >
    <Routes >
       <Route exact path="/" element={<Home/>}>
          <Route index element={<ItemArea defaultCategory={"lunch"}/>}/>
          <Route path="/:category" element={<ItemArea />}/>
          <Route path="/:category/:itemID" element={<Quantity />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          
          <Route element={<PrivateRoute isAllowed={!!loggedUser.email}/>}>
            <Route path="/delivery-details" element={<DeliveryDetails/>}/>
            <Route path="/location" element={<Location/>}/>
          </Route>
          
       </Route>
    </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
	return {loggedUser:state.loggedUser};
};

export default connect(mapStateToProps)(App);
