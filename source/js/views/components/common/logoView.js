import React, { Component } from "react";

class LogoView extends Component {
	click() {
		this.props.stores.viewport.set({ viewport: "/" });
	}

	render() {
		return (
			<div className="logo" onClick={this.click.bind(this)}>
				<img src="/build/style/img/logo.png" />
			</div>
		);
	}
}

export default LogoView;
