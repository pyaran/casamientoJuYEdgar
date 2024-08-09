import data from "./../../textos/textos.json"

import "./Organization.css"

export default function Organizacion() {
	return (
		<section id="Organizacion" className="organizacion p-8">
			<span className="span-title">Organización del</span>
			<h2 className="section-title lg:mb-4">Casamiento</h2>
			<div className="bg-container lg:flex">
				{data.organization.map((el, i) => {
					return (
						<div key={i} className="steps-container bg-white shadow-lg shadow-brown-800/40 mt-4 hover:text-white lg:min-h-full lg:flex-1 lg:shadow-none lg:mt-0 lg:mb-0">
							<div className="p-6 h-full">
								<span className='organization-steps'>{el.step}</span>
								<h3 className='organization-subtitles'>{el.title}</h3>
								<p>
									{el.text}
								</p>
								{el.location && <a className="hover:text-white rounded-md mt-2 mb-2 block text-white p-1 text-center lg:mt-12" target="_blank" href={el.location}>¿Cómo llegar?</a>}
							</div>
						</div>
					)
				})}


			</div>
			<div className="dresscode pt-8 pb-8">
				<p className="text-4xl text-center">Dress code</p>
				<div className="icon mt-6 mb-6 ml-auto mr-auto">
					<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="dress" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M288 16l32 16s-25.2 44.02-16 64c5 10.8 32 16 32 16-16 32-32 80-32 96 80 48 80 144 160 176 0 64-80 112-208 112S48 448 48 384c80-32 80-128 160-176 0-16-16-64-32-96 0 0 27-5.2 32-16 9.2-19.98-16-64-16-64l32-16c0 32 16 48 32 48s32-16 32-48z"></path></svg>
				</div>
				<span className="block mt-12 text-center">Formal elegante</span>
				<p className="text-black text-center pt-8">En nuestra boda, el blanco y tonalidades afines estan reservados para una sola persona:
					¡La novia!
					¡Vamos a iluminar la fiesta con otros colores!</p>
			</div>
		</section>
	)
}