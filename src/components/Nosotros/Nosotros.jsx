import { Carousel } from "@material-tailwind/react";

import Imagen1 from "./../../assets/imagen1.jpg"
import Imagen2 from "./../../assets/imagen2.jpg"
import Imagen3 from "./../../assets/imagen3.jpg"
import Imagen4 from "./../../assets/imagen4.jpg"
import Imagen5 from "./../../assets/imagen5.jpg"
import Imagen6 from "./../../assets/imagen6.jpg"
import Imagen7 from "./../../assets/imagen7.jpg"
import Imagen8 from "./../../assets/imagen8.jpg"
import Imagen9 from "./../../assets/imagen9.jpg"


import "./Nosotros.css"

export default function Nosotros() {
	return (
		<section id="Nosotros" className="nosotros p-8">
			<h3 className="text-3xl text-center">Nosotros</h3>
			<Carousel
				className="rounded-xl carousel"
				loop={true}
				autoplay={true}
				navigation={({ setActiveIndex, activeIndex, length }) => (
					<div className="absolute bottom-4 left-2/4 z-30 flex -translate-x-2/4 gap-2">
						{new Array(length).fill("").map((_, i) => (
							<span
								key={i}
								className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
									}`}
								onClick={() => setActiveIndex(i)}
							/>
						))}
					</div>
				)}
			>
				<img
					src={Imagen1}
					alt="image 1"
					className="w-full object-cover"
				/>
				<img
					src={Imagen2}
					alt="image 1"
					className="w-full object-cover"
				/>
				<img
					src={Imagen3}
					alt="image 1"
					className="w-full object-cover"

				/>
				<img
					src={Imagen4}
					alt="image 1"
					height="300"
					className="w-full min-h-full h-full object-cover"

				/>
				<img
					src={Imagen5}
					alt="image 1"
					className="w-full min-h-full h-full object-cover"

				/>
				<img
					src={Imagen6}
					alt="image 1"
					className="w-full object-cover"

				/>
				<img
					src={Imagen7}
					alt="image 1"
					className="w-full object-cover"

				/>
				<img
					src={Imagen8}
					alt="image 1"
					className="w-full min-h-full h-full object-cover"

				/>
				<img
					src={Imagen9}
					alt="image 1"
					className="w-full object-cover"

				/>
			</Carousel>
		</section>
	)
}