import { useEffect, useState } from "react";

export default function Counter() {

	const targetDate = "2024-09-14T21:00:00-03:00";

	const calculateTimeLeft = () => {
		const difference = + new Date(targetDate) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((difference % (1000 * 60)) / 1000)
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<div className='container-fluid countdown'>
			<div className='text-2xl fecha2 flex-wrap'>
				<h2 className="flex-grow flex items-center justify-center">
					{timeLeft.days || 0} Días
				</h2>
				<h2 className="flex-grow flex items-center justify-center">
					{timeLeft.hours || 0} Hs
				</h2>
				<h2 className="flex-grow flex items-center justify-center">
					{timeLeft.minutes || 0} Min
				</h2>
				<h2 className="flex-grow flex items-center justify-center">
					{timeLeft.seconds || 0} Seg
				</h2>
			</div>
			<div className='icono-corazon'>
				<div>
				</div>
			</div>
			<div className='comienza'>
				<h1 className="text-2xl pt-6">
					AQUI COMIENZA, NUESTRO FELICES PARA SIEMPRE
				</h1>
			</div>

		</div>
	)
}