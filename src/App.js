import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
	state = {
		posts: [],
		title: null,
		desc: null,
	};
	componentDidMount() {
		axios
			.get("https://jamia-connect-7679c.firebaseio.com/forums.json")
			.then((resp) => {
				const data = Object.values(resp.data);
				this.setState({ posts: data });
			});
	}

	onSubmit = () => {
		const val = {
			title: this.state.title,
			description: this.state.desc,
			key: "",
			comments: Math.random() * 10,
		};

		console.log(val);
		axios
			.post("https://jamia-connect-7679c.firebaseio.com/forums.json", val)
			.then((resp) => {
				console.log(resp);
			});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<div className="App">
				<form>
					<input
						type="text"
						name="title"
						value={this.state.name}
						onChange={(e) => this.handleChange(e)}
					/>
					<input
						type="text"
						name="desc"
						value={this.state.name}
						onChange={(e) => this.handleChange(e)}
					/>
					<button type="button" onClick={this.onSubmit}>
						Save
					</button>
				</form>
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
