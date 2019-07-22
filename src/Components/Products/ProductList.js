import React from "react";
import Product from "./Product";
import "./ProductList.css";

const ProductList = ({ products }) => {
	return (
		<div className="">
			{products.map((user, i) => {
				return (
					<div className="produs">
						<Product
							className=""
							key={i}
							id={products[i].Product_id}
							name={products[i].Product_Name}
							email={products[i].Product_SubCategory}
							poza={products[i].Product_Image_1}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProductList;
