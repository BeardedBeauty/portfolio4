import React from 'react';
import Nav from "./components/Nav/index";
import Home from "./pages/Home";
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

	render() {
		return (
			<>
				<Nav nav={this.state.nav} />
				<Home />
			</>
		)
	}
}

export default App;