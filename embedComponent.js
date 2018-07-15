import React, {Component} from 'react';

const FirstComponent = () => (
	<div>
		this is the first component
	</div>
)

const SecondComponent = () => (
        <div>
                this is the second component
        </div>
)


export default class EmbeddedComponent extends Component {
	render() {
		return (
			<div>
				<FirstComponent/>
				<SecondComponent/>
			</div>
		)
	}
}
