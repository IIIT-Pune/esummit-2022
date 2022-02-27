import { useEffect, useState } from "react";

function Book({ clickHandler, details }) {
	const { name } = details;
	// console.log(name, logolink, d2clink, description,knowmore,details);
	const [image, Setimage] = useState(null);
	useEffect(() => {
		const fetchImage = async () => {
			await import(`../../assets/eventsshelf/${name}.png`).then((img) => {
				Setimage(img.default);
			});
		};
		fetchImage();
	}, []);
	return (
		<img
			onClick={() => {
				clickHandler(details);
			}}
			src={image}
			className="events-book cursor-pointer"
			alt={`${name}`}
		/>
	);
}
export default Book;
