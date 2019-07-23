import React from "react";
import Product from "./Product";
import "./ProductList.css";

const ProductList = ({ products }) => {
	return (
		<div className="productList pr5-l pl5-l">
			{products.map((user, i) => {
				return (
					<div className="produsDisplay pr1 pl1 pa5-l">
						<Product
							className=""
							key={i}
							id={products[i].Product_id}
							name={products[i].Product_Name}
							email={products[i].Product_SubCategory}
							photo={products[i].Product_Image_1}
							price={products[i].Product_Price_Special* 2.30 *4.75}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProductList;
