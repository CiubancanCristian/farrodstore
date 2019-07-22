import React from "react";
import "./Search.css";
import ProductList from "../Products/ProductList";
import whiteMagnifier from "./whiteMagnifier.png";

const Search = props => {
	let drawerClasses = "searchDrawer bg-white b--black";
	if (props.show) {
		drawerClasses = "searchDrawer bg-white b--black open ";
	}
	return (
		<div className="z-1">
			<nav className={drawerClasses}>
				<div className="sbct flex bb bt items-center justify-center">
					<p className="pa3 click dim">brand</p>
					<p className="pa3 click dim">category</p>
					<input
						className="br-pill search-box pl2 flex items-center justify-center"
						type="text"
						placeholder="Search..."
						onChange={props.searchChange}
						onKeyDown={props.enterDown}
					/>
				</div>
			</nav>
		</div>
	);
};

export default Search;
