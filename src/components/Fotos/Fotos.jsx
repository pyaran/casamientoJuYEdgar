import "./Fotos.css"

export default function Fotos() {
	return (
		<section id="Fotos" className="fotos text-center p-8">
			<h3 className="text-3xl">
				¡Fotos!
			</h3>
			<div className="icon ml-auto mr-auto mt-6 mb-6">
				<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="camera" height="47px" width="47px" xmlns="http://www.w3.org/2000/svg"><path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>
			</div>
			<p>Podes subir fotos de nuestros recuerdos, preparativos y de nuestra noche especial.</p>
			<a className="hover:text-white rounded-md mt-6 mb-6 block text-white p-1 text-center lg:mt-12" target="_blank" href="https://photos.google.com/share/AF1QipNHklKs3hj8CUSbt1_1V1kdDoaPibeM-dq-403I5Zt8Tg0Y_4IaQynstsibHM_nWQ?key=Y2lnYVJoNVVyc3J1Q241WWRHeFkybG9zR19KY2tn">Album de fotos</a>
		</section>
	)
}