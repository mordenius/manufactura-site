import React, { Component } from "react";

class FooterComposition extends Component {
	render() {
		return (
			<footer>
				<div className="wrapper">
					<p className="copyrigth">
						<span>Manufatura is open-source (MIT) run by </span>
						<a href="http://kvinto.com.ua/" target="_blank" rel="noopener noreferrer" alt="Kvinto">
							Kvinto
						</a>
						<span> | BlackBird Team</span>
					</p>
				</div>
			</footer>
		);
	}
}

export default FooterComposition;
