import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Book({ clickHandler, details }) {
	const { name } = details;
	// console.log(name, logolink, d2clink, description,knowmore,details);
	const [image, Setimage] = useState(null);
	const navigate = useNavigate();
	return (
		<>
			<img
				onClick={() => {
					navigate("events/" + name);
				}}
				src={`../../images/eventsshelf/${name}.png`}
				className="events-book cursor-pointer"
				alt={`${name}`}
			/>
		</>
	);
}
export default Book;
