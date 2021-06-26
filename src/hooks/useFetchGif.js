import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {
	const [images, setImages] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(category).then((img) => {
			setImages({
				data: img,
				loading: false,
			});
		});
	}, [category]);

	return images;
};
