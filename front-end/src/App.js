import React from 'react';
import Nav from "./components/Nav/index";
import Home from "./pages/Home";
import Burger from "./components/Burger";
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Y: 0,
			nav: ["navbgtop", "itemstop"]
		}
	}

	componentDidMount = () => window.addEventListener('scroll', this.handleScroll);

	componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll);

	handleScroll = () => window.scrollY < 1 ? this.setState({ nav: ["navbgtop", "itemstop"] }) : this.setState({ nav: ["navbgscroll", "itemsscroll"] });

	scrollToPortfolio() {
		scroller.scrollTo("portfolio", {
			duration: 500,
			delay: 0,
			smooth: 'easeInOutQuart'
		});
	};

	scrollToContact() {
		scroller.scrollTo("contact", {
			duration: 500,
			delay: 0,
			smooth: 'easeInOutQuart'
		});
	};

	scrollToTop() {
		scroller.scrollTo("top", {
			duration: 500,
			delay: 0,
			smooth: 'easeInOutQuart'
		});
	};

	render() {
		return (
			<>
				<Burger
					portfolio={this.scrollToPortfolio}
					contact={this.scrollToContact}
					top={this.scrollToTop} />
				<Nav
					nav={this.state.nav}
					portfolio={this.scrollToPortfolio}
					contact={this.scrollToContact}
					top={this.scrollToTop} />
				<Home
					portfolio={<Element name="portfolio" className="element" />}
					contact={<Element name="contact" className="element" />}
					top={<Element name="top" className="element" />} />
			</>
		)
	}
}

export default App;