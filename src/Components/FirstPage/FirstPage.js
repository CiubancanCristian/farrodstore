import React from "react";
import "./FirstPage.css";
const FirstPage = () => {
	return (
		<div className="firstPage">
			<div className="women">
				<p className="flex items-center f1 justify-center bg-white h-100 o-80 fw1">
					Women
				</p>
			</div>
			<div className="men grow">
				<p className="barbati flex items-center f2 justify-center bg-blue h5 o-60 white fw1">
					Men
				</p>
			</div>
			<div className="newest grow">
				{" "}
				<p className="noutati flex items-center f2 justify-center bg-light-red h5 o-60 fw1">
					Latest Arrivals
				</p>
			</div>
		</div>
	);
};

export default FirstPage;
