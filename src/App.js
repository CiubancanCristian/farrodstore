import React, { Component } from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import Login from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import FirstPage from "./Components/FirstPage/FirstPage";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="">
				<Logo />
				<Login/>
				<Navigation />
				</div>
				<FirstPage />
			</div>
		);
	}
}

export default App;
