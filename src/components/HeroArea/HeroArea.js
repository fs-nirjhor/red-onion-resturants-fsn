import bannerbackground from "../../images/bannerbackground.png";
import "./HeroArea.css";
import { Button } from "react-bootstrap";

const HeroArea = () => {
return (
	<section style={{
        backgroundImage: `url(${bannerbackground})`}} className="hero-image d-flex flex-column justify-content-center py-5 text-center">
        <div className="search-bar my-5">
    <h1 >Best Food Waiting For Your Belly</h1>
		<br />
		<input type="text" name="text" placeholder="Search food items" />
		<Button variant="danger">Search</Button>
        </div>
	</section>
);
};

export default HeroArea;