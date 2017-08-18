import React, { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";
import TitleView from "~/views/components/common/titleView";
import SubMenuComposition from "~/views/components/common/subMenu/subMenuComposition";
import ArticleView from "~/views/components/common/ArticleView";

class ArticleComposition extends ComponentStateStore {
	constructor(propsData){
		super({ props: propsData, name: "articleComposition" });
	}

	render() {
		const path = this.state.viewport.replace("/", "");

		return (
			<article>
				<div className="wrapper">
					<div className="fixed">
						{createElement(SubMenuComposition, {
							stores: this.props.stores,
							history: this.props.history,
							data: path,
							type: "subMenu"
						})}
						{createElement(SubMenuComposition, {
							stores: this.props.stores,
							history: this.props.history,
							data: path,
							type: "anchors"
						})}
					</div>

					<div className="middle">
						{createElement(TitleView, {
							stores: this.props.stores,
							data: path
						})}
						<ArticleView stores={this.props.stores} />
					</div>
				</div>
			</article>
		);
	}
}

export default ArticleComposition;
