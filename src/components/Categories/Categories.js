import { NavLink } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
	let activeStyle = {
    color: "red",
    borderBottom: "3px solid red"
  };
return (
	<div className="categories text-center">
		<NavLink to="/breakfast" style={({ isActive }) => (isActive ? activeStyle : undefined)} >Breakfast</NavLink>
		<NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Lunch</NavLink>
		<NavLink to="/dinner" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Dinner</NavLink>
	</div>
);
};

export default Categories;