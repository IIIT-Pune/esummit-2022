import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Book({ clickHandler, details }) {
	const { name } = details;
	// console.log(name, logolink, d2clink, description,knowmore,details);
	const [image, Setimage] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		const fetchImage = async () => {
			await import(`../../images/eventsshelf/${name}.png`).then((img) => {
				Setimage(img.default);
			});
		};
		fetchImage();
	}, []);
	return (
		<>
			{image && (
				<img
					onClick={() => {
						navigate("events/" + name);
					}}
					src={image}
					className="events-book cursor-pointer"
					alt={`${name}`}
				/>
			)}
		</>
	);
}
export default Book;
