import React from "react";
import './Navigation.css'
const Navigation = () => {
	return (
		<div className='Navigation flex justify-center items-center  h2 bb b--light-silver'>
			<p className=" f5 link dim pa3 pointer">{"Women"}</p>
			<p className=" f5 link dim pa3 pointer">{"Men"}</p>
			<p className=" f5 link dim pa3 pointer">{"Sale"}</p>
		</div>
	);
};

export default Navigation;
