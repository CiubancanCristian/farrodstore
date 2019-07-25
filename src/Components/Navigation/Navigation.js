import React from "react";
import "./Navigation.css";
import farrod from "./farrod.png";
import SearchToggle from "../Search/SearchToggle";
import Search from "../Search/Search";
const Navigation = ({
	onScrollEvent,
	searchButtonClick,
	show,
	productList,
	enterDown,
	searchChange
}) => {
	return (
		<div className="z-5 outerNavigation">
			<p className="mask"></p>
			<div className="navigation w-100 white">
				<div className="logo flex justify-between items-center w-100 bg-black">
					<div className="menu w-30 flex justify-center items-center src={magnifier}">
						<p className="pr2 pl2">MENU</p>
						<p className="curr pr2 pl2">CURR</p>
						<p className="curr pr2 pl2">COS</p>
					</div>

					<div className="">
						<img
							className="w5 logoPoza dim"
							alt="logo"
							src={farrod}
						/>
					</div>
					<div className="w-30 src={magnifier}">
						<SearchToggle click={searchButtonClick} />
					</div>
				</div>

				<div className="nav flex justify-center items-center bg-black ">
					<div className="showhim  f5 link pa3 pointer flex items-center justify-center">
						Women
						<div className="showme bg-black ">
							<div className="submenu ">
								<ul className="">
									<p className="fw7">Hot</p>
									<li className="pa1 link dim f5 pointer">
										Popular
									</li>
									<li className="pa1 link dim f5 pointer">
										New in store
									</li>
									<li className="pa1 link dim f5 pointer">
										All time favourites
									</li>
									<li className="pa1 link dim f5 pointer">
										Accesories
									</li>
									<li className="pa1 link dim f5 pointer">
										Hats
									</li>
								</ul>
								<ul className="">
									<p className="fw7">Every day</p>
									<li className="pa1 link dim f5 pointer">
										Shirts
									</li>
									<li className="pa1 link dim f5 pointer">
										Blouses
									</li>
									<li className="pa1 link dim f5 pointer">
										Pants
									</li>
									<li className="pa1 link dim f5 pointer">
										Dresses
									</li>
									<li className="pa1 link dim f5 pointer">
										Skirts
									</li>
								</ul>
								<ul className="">
									<p className="fw7">Favourites</p>
									<li className="pa1 link dim f5 pointer">
										Shoes
									</li>
									<li className="pa1 link dim f5 pointer">
										High Heels
									</li>
									<li className="pa1 link dim f5 pointer">
										Sale
									</li>
									<li className="pa1 link dim f5 pointer">
										Last one in stock
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="showhim  f5 link pa3 pointer flex items-center justify-center">
						Men
						<div className="showme bg-black">
							<div className="submenu">
								<ul className="">
									<p className="fw7">Hot</p>
									<li className="pa1 link dim f5 pointer">
										Popular
									</li>
									<li className="pa1 link dim f5 pointer">
										New in store
									</li>
									<li className="pa1 link dim f5 pointer">
										All time favourites
									</li>
									<li className="pa1 link dim f5 pointer">
										Accesories
									</li>
									<li className="pa1 link dim f5 pointer">
										Hats
									</li>
								</ul>
								<ul className="">
									<p className="fw7">Sport</p>
									<li className="pa1 link dim f5 pointer">
										Shirts
									</li>
									<li className="pa1 link dim f5 pointer">
										Shorts
									</li>
									<li className="pa1 link dim f5 pointer">
										Pants
									</li>
									<li className="pa1 link dim f5 pointer">
										Sweaters
									</li>
									<li className="pa1 link dim f5 pointer">
										T-Shirts
									</li>
								</ul>
								<ul className="">
									<p className="fw7">Rock</p>
									<li className="pa1 link dim f5 pointer">
										Shoes
									</li>
									<li className="pa1 link dim f5 pointer">
										Belts
									</li>
									<li className="pa1 link dim f5 pointer">
										Sale
									</li>
									<li className="pa1 link dim f5 pointer">
										Last one in stock
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="showhim  f5 link pa3 pointer flex items-center justify-center">
						Kids
						<div className="showme bg-black ">
							<div className="submenu">
								<ul className="">
									<p className="fw7">Hot</p>
									<li className="pa1 link dim f5 pointer">
										Popular
									</li>
									<li className="pa1 link dim f5 pointer">
										New in store
									</li>
									<li className="pa1 link dim f5 pointer">
										Hats
									</li>
								</ul>
								<ul className="">
									<p className="fw7">Every day</p>
									<li className="pa1 link dim f5 pointer">
										Shirts
									</li>
									<li className="pa1 link dim f5 pointer">
										Blouses
									</li>
									<li className="pa1 link dim f5 pointer">
										Pants
									</li>
									<li className="pa1 link dim f5 pointer">
										Dresses
									</li>
									<li className="pa1 link dim f5 pointer">
										Skirts
									</li>
								</ul>
								<ul className="">
									<p className="fw7">Favourites</p>
									<li className="pa1 link dim f5 pointer">
										Shoes
									</li>
									<li className="pa1 link dim f5 pointer">
										Sale
									</li>
									<li className="pa1 link dim f5 pointer">
										Last one in stock
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="showhim  f5 link pa3 pointer flex items-center justify-center">
						House
						<div className="showme bg-black ">
							<div className="submenu">
								<ul className="">
									<p className="fw7">Hot</p>
									<li className="pa1 link dim f5 pointer">
										Popular
									</li>
									<li className="pa1 link dim f5 pointer">
										New in store
									</li>
									<li className="pa1 link dim f5 pointer">
										All time favourites
									</li>
									<li className="pa1 link dim f5 pointer">
										Accesories
									</li>
									<li className="pa1 link dim f5 pointer">
										Hats
									</li>
								</ul>
								<ul className="">
									<p className="fw7">Every day</p>
									<li className="pa1 link dim f5 pointer">
										Shirts
									</li>
									<li className="pa1 link dim f5 pointer">
										Blouses
									</li>
									<li className="pa1 link dim f5 pointer">
										Pants
									</li>
									<li className="pa1 link dim f5 pointer">
										Dresses
									</li>
									<li className="pa1 link dim f5 pointer">
										Skirts
									</li>
								</ul>
								<ul className="">
									<p className="fw7">Favourites</p>
									<li className="pa1 link dim f5 pointer">
										Shoes
									</li>
									<li className="pa1 link dim f5 pointer">
										High Heels
									</li>
									<li className="pa1 link dim f5 pointer">
										Sale
									</li>
									<li className="pa1 link dim f5 pointer">
										Last one in stock
									</li>
								</ul>
							</div>
						</div>
					</div>
					<p className=" f5 link dim pa3 pointer">{"Sale"}</p>
					<p className=" f5 link dim pa3 pointer">{"Contact"}</p>
				</div>
			</div>
			<Search
				className="filters"
				show={show}
				searchChange={searchChange}
				productList={productList}
				enterDown={enterDown}
			/>
		</div>
	);
};

export default Navigation;
