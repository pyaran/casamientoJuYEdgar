import "./Asistencia.css"

export default function Asistencia() {
	return (
		<section id="Asistencia" className="asistencia text-center p-8">
			<h3 className="text-3xl">
				Confirma tu asistencia
			</h3>
			<div className="icon ml-auto mr-auto mt-6 mb-6">
				<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"></path></svg>
			</div>
			<p>Nos encantaría contar con vos en este día mágico!
				Por favor, confirma tu asistencia hasta el día 01/09/2024.
				En caso de no recibir tu confirmación, entenderemos que no podrás acompañarnos.</p>
			<a className="hover:text-white rounded-md mt-6 mb-6 block bg-brown-500 text-white p-1 text-center lg:mt-12" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfuyMnCDkhVVtvfQKqApeutVa91lhKhS1buP0ODABrwepssQw/viewform">Confirmar asistencia</a>
		</section>
	)
}