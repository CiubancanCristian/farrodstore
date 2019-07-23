import React from "react";
import "./SearchToggle.css";
import magnifier from "./magnifier.png"

const SearchToggle = props => (
	<input className="search" onClick={props.click} type="image" src={magnifier} alt="Submit" width="48" height="48"/>
	);

export default SearchToggle;