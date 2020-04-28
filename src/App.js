import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
	state = {
		posts: [],
	};
	componentDidMount() {
		axios
			.get("https://jamia-connect-7679c.firebaseio.com/forums.json")
			.then((resp) => {
				const data = Object.values(resp.data);
				this.setState({ posts: data });
			});
	}

	render() {
		return (
			<div className="App">
				{this.state.posts.map((post) => {
					return (
						<div className="card">
							<h1>{post.title}</h1>
							<p>{post.description}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
