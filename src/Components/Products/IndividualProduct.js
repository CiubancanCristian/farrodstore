import React from "react";
import "./IndividualProduct.css";

const IndividualProduct = props => {
	let productDetails = "productDetails bg-white b--black";
	if (props.show) {
		productDetails = "productDetails bg-white b--black open ";
	}
	return (
		<div className={productDetails}>
			<p className="flex w-100 justify-end pr2 " onClick={props.click}>
				Exit
			</p>
			<div className="">
				<img className="" alt="robots" src={props.clickedProduct.Product_Image_1} />
				<h5>{props.clickedProduct.Product_Name}</h5>
				<div dangerouslySetInnerHTML={{ __html: props.clickedProduct.Product_Description }} />
				
			</div>
		</div>
	);
};

export default IndividualProduct;
