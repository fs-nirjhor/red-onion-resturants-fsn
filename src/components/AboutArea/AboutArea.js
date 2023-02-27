import Abouts from "../Abouts/Abouts";
import aboutData from "../../data/aboutData";
import { Row } from "react-bootstrap";
const AboutArea = () => {
return (
	<div className="text-start my-3">
	<h2>Why you choose us</h2>
	<p className="w-75">Barton waited twenty always repair in within we do.An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
	<Row >
	{
		aboutData.map(about => <Abouts about={about} key={about.id}/>)
	}
	</Row>
	</div>
);
};

export default AboutArea;