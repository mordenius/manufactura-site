import HomeComposition from "./components/home/homeComposition";
import ArticleComposition from "./components/common/articleComposition";

const RouteList = {
	"/": {
		child: HomeComposition,
		type: "common"
	},
	"default": {
		child: ArticleComposition,
		type: "common"
	}
};

export default RouteList;