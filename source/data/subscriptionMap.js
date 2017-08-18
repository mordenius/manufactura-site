const SubscriptionMap = [
	{
		class: "langController",
		storesRules: [
			{
				store: "lang"
			}
		]
	},
	{
		class: "historyController",
		storesRules: [
			{
				store: "viewport"
			},
			{
				store: "lang"
			}
		]
	},
	{
		component: "indexView",
		storesRules: [
			{
				store: "viewport"
			}
		]
	},
	{
		component: "langItemView",
		storesRules: [
			{
				store: "lang"
			}
		]
	},
	{
		component: "navComposition",
		storesRules: [
			{
				store: "langPack",
				fileds: ["sections"]
			}
		]
	},
	{
		component: "navItemView",
		storesRules: [
			{
				store: "viewport"
			}
		]
	},
	{
		component: "titleView",
		storesRules: [
			{
				store: "langPack",
				fileds: ["sections"]
			}
		]
	},
	{
		component: "subMenuItemView",
		storesRules: [
			{
				store: "langPack",
				fileds: ["anchors"]
			}
		]
	},
	{
		component: "homeComposition",
		storesRules: [
			{
				store: "viewport"
			},
			{
				store: "lang"
			}
		]
	},
	{
		component: "articleComposition",
		storesRules: [
			{
				store: "viewport"
			},
			{
				store: "lang"
			}
		]
	}
]

export default SubscriptionMap;