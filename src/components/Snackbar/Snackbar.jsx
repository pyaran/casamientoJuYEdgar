/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Alert } from "@material-tailwind/react";

export default function Snackbar({ onClose }) {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			onClose();
		}, 2000);
		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		visible && (
			<div className="w-full fixed bottom-2 ml-auto left-0 z-50 flex items-center justify-center">
				<Alert color="green" className="w-80">Tu mensaje fue copiado</Alert>
			</div>
		)
	);
}