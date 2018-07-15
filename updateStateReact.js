import React, {Component} from 'react';


export default class Dummy extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'something'
		};
	} 

	changeTitle = () => {
		this.setState({
			...this.state,
			title: 'something new'
		});
	}
	
	render() {
		return (
			<div>
				{this.state.title}
				<button onclick={this.changeTitle}>change state</button>
			</div>
		)
	}
}
