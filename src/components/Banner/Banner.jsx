import Counter from "./Counter"

import "./Banner.css"

export default function Banner() {
	return(
		<section className="banner min-h-screen flex justify-center items-center flex-col p-4 text-center">
			<h1 className="married-names title block">Juli & Edgar</h1>
			<span className="p-6">14 DE SEPTIEMBRE, 2024 - YERBA BUENA</span>
			<Counter />
		</section>
	)
}