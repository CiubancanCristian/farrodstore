import React from "react";
import farrod from "./farrod.png";

const Logo = () => {
	return (
		<div className="flex justify-between items-center w-100 bb">
		<div className="w-30">
			<input
				className="h2"
				type="search"
				placeholder="Search"
			/>
		</div>
			<div className="">
				<img alt="logo" src={farrod} />
			</div>
			<p className="w-30 link dim pointer">{"Currencies"}</p>
		</div>
	);
};

export default Logo;
