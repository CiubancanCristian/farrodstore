import React, { Component } from "react";
import "./App.css";
import classNames from "classnames/bind";
import Navigation from "./Components/Navigation/Navigation";
import FirstPage from "./Components/FirstPage/FirstPage";
import Backdrop from "./Components/Search/Backdrop";
import products from "./products.json";
import ProductList from "./Components/Products/ProductList";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			prevScrollpos: window.pageYOffset,
			products: [],
			searchfield: "",
			visible: true,
			searchOpen: false,
			showProductDetails: false,
			clickedProduct: {}
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
		this.setState({ products: products.Products.Product });
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	SearchButtonHandler = () => {
		this.setState(prevState => {
			return { searchOpen: !prevState.searchOpen };
		});
	};
	productClick = e => {
		const products1 = products.Products.Product;
		const product1 = products1.forEach((product, i) => {
			if (products1[i].Product_id === e.target.id) {
				this.setState({ clickedProduct: products1[i] });
			}
		});
		this.setState(prevState => {
			return { showProductDetails: !prevState.showProductDetails };
		});
	};
	backdropClickHandler = () => {
		this.setState({ searchOpen: false });
	};
	onKeyPressed = event => {
		if (event.keyCode === 13) {
			this.setState({ searchOpen: false });
			this.setState({ searchfield: event.target.value });
		}
	};

	handleScroll = () => {
		const { prevScrollpos } = this.state;

		const currentScrollPos = window.pageYOffset;
		if (currentScrollPos < 400) {
			this.setState({
				visible: true
			});
		} else {
			const visible = prevScrollpos > currentScrollPos;
			this.backdropClickHandler();

			this.setState({
				prevScrollpos: currentScrollPos,
				visible
			});
		}
	};

	render() {
		const { products, searchfield } = this.state;
		const filteredProducts = products.filter(products => {
			return products.Product_Name.toLowerCase().includes(
				searchfield.toLowerCase()
			);
		});
		let backdrop;
		if (this.state.searchOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
		}
		return (
			<div className="App">
				<div>
					<div
						className={classNames("navbar", {
							"navbar--hidden": !this.state.visible
						})}
					>
						<Navigation
							searchButtonClick={this.SearchButtonHandler}
							show={this.state.searchOpen}
							searchChange={this.onSearchChange}
							productList={filteredProducts}
							enterDown={this.onKeyPressed}
						/>
					</div>
				</div>

				<p className="navmask"></p>

				<ProductList
					productDetailsClick={this.productClick}
					className=""
					show={this.state.showProductDetails}
					products={filteredProducts}
					product={this.state.clickedProduct}
				/>
			</div>
		);
	}
}

export default App;
