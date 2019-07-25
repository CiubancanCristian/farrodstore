import React from "react";
import Product from "./Product";
import "./ProductList.css";
import IndividualProduct from "./IndividualProduct";

const ProductList = ({ products, productDetailsClick, show, product, backdrop }) => {
	return (
		<div className="productList pr5-l pl5-l">
			{products.map((user, i) => {
				return (
					<div className="produsDisplay" key={i}>
						<div className=" pr1 pl1 pa5-l">
							<Product
								click={productDetailsClick}
								className=""
								key={i}
								id={products[i].Product_id}
								name={products[i].Product_Name}
								email={products[i].Product_SubCategory}
								photo={products[i].Product_Image_1}
								price={
									products[i].Product_Price_Special *
									2.3 *
									4.75
								}
							/>
						</div>
						<IndividualProduct
							clickedProduct={product}
							show={show}
							id={products[i].Product_id}
							name={products[i].Product_Name}
							email={products[i].Product_SubCategory}
							photo={products[i].Product_Image_1}
							price={
								products[i].Product_Price_Special * 2.3 * 4.75
							}
							click={productDetailsClick}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProductList;
