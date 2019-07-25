import React from "react";
import "./NavigationMenu.css";

const NavigationMenu = props => {
	let productDetails = "Menu bt b--black";
	if (props.show) {
		productDetails = "Menu bt b--black open ";
	}
	return (
		<div className={productDetails}>
			<div className="categorie b--black flex justify-center items-center f1 dim  pointer  bg-gray bb br">
				Brands
			</div>
			<div className="categorie b--black flex justify-center items-center f1 dim  pointer  bg-gray bb br">

				Women
			</div>
			<div className="categorie b--black flex justify-center items-center f1 dim  pointer  bg-gray bb br">

				Men
			</div>
			<div className="categorie b--black flex justify-center items-center f1 dim  pointer  bg-gray bb br">
				Sale
			</div>
		</div>
	);
};

export default NavigationMenu;
