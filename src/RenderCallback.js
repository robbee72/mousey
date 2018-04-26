import React, { Component } from 'react';
import Background from './images/Cromosoma.jpg';

class Mouse extends Component {
	state = { x: 0, y: 0 };

	handleMouseMove = (event) => {
		this.setState({
			x: event.clientX,
			y: event.clientY
		})
	}

	render() {
		return (
			<div onMouseMove={this.handleMouseMove}>
				{this.props.children(this.state)}
			</div>
		);
	}
}

export class RenderCallback extends React.Component {
	render() {
		const styles = {
			position: "fixed",
		  height: "100%",
			width: "100%",
			textAlign: "right",
      backgroundImage: `url(${Background})`,
			backgroundColor: "#e93fa8"
		}
		return (
			<Mouse>
				{mouse => (
					<div style={styles}>
						<h1>Mouse Position: ({mouse.x}, {mouse.y})</h1>
					</div>

				)}
			</Mouse>
		);
	}
}
