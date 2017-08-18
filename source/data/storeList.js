import ru from "@/lang/ru.json";

const StoreList = [
	{
		name: "viewport",
		options: {
			initState: { viewport: "/" }
		}
	},
	{
		name: "lang",
		options: {
			initState: { lang: "ru" }
		}
	},
	{
		name: "langPack",
		options: {
			initState: ru
		}
	}
]

export default StoreList;