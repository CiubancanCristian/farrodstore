import React from "react";
import "./Search.css";

const Search = props => {
	let drawerClasses = "searchDrawer bg-white b--black";
	if (props.show) {
		drawerClasses = "searchDrawer bg-white b--black open ";
	}
	return (
		<div className="z-1">
			<nav className={drawerClasses}>
				<div className="sbct flex bb bt items-center justify-center">
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
