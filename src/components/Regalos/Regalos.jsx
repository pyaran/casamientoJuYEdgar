import { useState } from "react"
import Modal from 'react-modal';

import "./Regalos.css"
import Snackbar from "../Snackbar/Snackbar";

export default function Regalos() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [notificationMessage, setNotificationMessage] = useState('');

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	function openModal() {
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
	}

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text).then(() => {
			setNotificationMessage('Copiado al portapapeles');
		}).catch(() => {
			setNotificationMessage('Failed to copy text');
		});
	};

	return (
		<section id="Regalos" className="regalos p-8 text-center">
			<h3 className="text-3xl">
				Regalos
			</h3>
			<div className="icon ml-auto mr-auto mt-6 mb-6">
				<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="present" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M149.518 78.38c-6.55.117-12.45 1.736-17.35 4.91-7.465 4.84-11.765 12.904-13.063 21.34-2.595 16.874 4.747 36.355 19.862 52.31C154.08 172.893 177.643 185 208 185h2.438l-9.118-18.234c-22.194-1.554-38.46-10.777-49.287-22.205-11.885-12.545-16.543-28.064-15.138-37.19.702-4.564 2.402-7.25 5.062-8.974 2.66-1.724 7.113-2.875 14.756-1.326 13.078 2.65 34.233 13.948 62.205 39.284L220.27 135h23.408c-35.31-34.8-62.215-51.278-83.39-55.57-2.715-.55-5.363-.887-7.925-1.006-.96-.045-1.91-.06-2.845-.043zm212.964 0c-.935-.016-1.885 0-2.845.044-2.562.12-5.21.455-7.924 1.006-21.176 4.292-48.082 20.77-83.39 55.57h23.406l1.352 1.354c27.972-25.336 49.127-36.633 62.205-39.284 7.643-1.55 12.096-.398 14.756 1.326 2.66 1.725 4.36 4.41 5.062 8.973 1.405 9.126-3.253 24.645-15.138 37.19-10.827 11.43-27.093 20.652-49.287 22.206L301.562 185H304c30.357 0 53.92-12.106 69.033-28.06 15.115-15.955 22.457-35.436 19.862-52.31-1.298-8.436-5.598-16.5-13.063-21.34-4.9-3.174-10.8-4.793-17.35-4.91zM227.73 153l-8.78 8.777L229.564 183h52.875l10.61-21.223-8.777-8.777h-56.54zM73 201v46h142v-46H73zm160 0v270h46V201h-46zm64 0v46h142v-46H297zm-192 64v206h110V265H105zm192 0v206h110V265H297z"></path></svg>
			</div>
			<p>
				Lo mas importante para nosotros es tu precencia y amor,
				sin embargo si deseas colaborar con nuestra luna de miel
				facilitamos una cuenta donde puedes hacerlo
			</p>
			<button onClick={openModal} className="hover:text-white p-2 mt-6 mb-6 bg-brown-500 rounded-md ml-auto mr-auto block text-white text-center lg:mt-12 outline-none border-none">Ver datos bancarios</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Modal regalo"
			>
				<div className="modal-regalos">
					<h2>Datos bancarios</h2>
					<svg xmlns="http://www.w3.org/2000/svg" onClick={closeModal} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 absolute top-4 right-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
					<div className="modal-fields">
						<div className="field flex items-center justify-between">
							<p><strong>Nombre:</strong> Julieta Andjel</p>
							<button className="text-white" onClick={() => copyToClipboard("Julieta Andjel")}>
								Copiar
							</button>
						</div>
						<div className="field flex items-center justify-between">
							<p><strong>CVU:</strong> 0000003100093872067334</p>
							<button className="text-white"
								onClick={() => copyToClipboard("0000003100093872067334")}
							>
								Copiar
							</button>
						</div>
						<div className="field flex items-center justify-between">
							<p><strong>Alias:</strong> juliyedgar</p>
							<button className="text-white" onClick={() => copyToClipboard("juliyedgar")}>
								Copiar
							</button>
						</div>
						<div className="field flex items-center justify-between">
							<p><strong>CUIT/CUIL:</strong> 27377253227</p>
							<button className="text-white" onClick={() => copyToClipboard("27377253227")}>
								Copiar
							</button>
						</div>
					</div>
				</div>
			</Modal>
			{
				notificationMessage && (
					<Snackbar onClose={() => setNotificationMessage("")} />
				)
			}
		</section>
	)
}