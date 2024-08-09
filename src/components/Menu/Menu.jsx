import "./Menu.css"

export default function Menu() {
	return (
		<section id="Menu" className="menu p-8 text-center">
			<h3 className="text-3xl">
				Menú
			</h3>
			<div className="icon ml-auto mr-auto mt-6 mb-6">
				<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="dress" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"></path><path d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"></path></svg>
			</div>
			<p>Queremos que todos nuestros invitados disfruten, por eso hacenos saber si tenes alguna restricción alimentaria.</p>
			<a className="hover:text-white rounded-md mt-6 mb-6 block text-white p-1 text-center lg:mt-12" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc-A6SZNJUOK3c3cknYaYMgqs3PtSmwrpCufx_b1HvKjEQj_A/viewform">Indicar menú</a>
		</section>
	)
}