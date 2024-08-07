import data from "../../textos/textos.json"

import {
	Card,
	Typography,
	List,
	ListItem,
} from "@material-tailwind/react";
import Logo from "./../../assets/logo.png"
import { useState } from "react";

import "./Header.css"

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	if (isMenuOpen) {
		return <Card className="z-50 fixed h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bottom-0 rounded-none bg-orange-100 top-0">
			<button onClick={() => { setIsMenuOpen(!isMenuOpen) }} className="header__menu--close">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
			<div className="mb-2 p-4 text-center">
				<img className="w-48 mt-0 mb-0 mr-auto ml-auto" src={Logo} alt="" />
				<Typography variant="h5" color="blue-gray" className="married-names">
					Juli & Edgar
				</Typography>
				<span className="tracking-widest text-sm">{data.fechaCasamiento}</span>
			</div>
			<List>
				{data.menu.map((data, i) => {
					return (<ListItem key={i} className="hover:bg-orange-300 p-0">
						<a href={`#${data.id}`} className="p-4 w-full text-blue-gray-800 hover:text-blue-gray-800">{data.text}</a>
					</ListItem>)
				})}
			</List>
		</Card>
	} else {
		return (
			<Card className="p-4 absolute top-0 shadow-none rounded-none bg-transparent fixed">
			<button className="text-black header__menu--open" onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</button>
			</Card >
		)

	}
}