import React, { Component } from "react";
import LogoView from "~/views/components/common/logoView";
import NavComposition from "./nav/navComposition";
import LangComposition from "./lang/langComposition";

class HeaderComposition extends Component {
	render() {
		return (
			<header>
				<div className="wrapper">
					<LogoView stores={this.props.stores} />
					<NavComposition stores={this.props.stores} />
					<LangComposition stores={this.props.stores} />
				</div>
			</header>
		);
	}
}

export default HeaderComposition;
