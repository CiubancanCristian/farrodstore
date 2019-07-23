import React from "react";
import "./SearchToggle.css";

const SearchToggle = props => (
	<input className="search" onClick={props.click} type="image" src={magnifier} alt="Submit" width="48" height="48"/>
	);

export default SearchToggle;