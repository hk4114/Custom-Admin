import Layout from "@/layouts/index";
import { RouteObject } from "@/routers/interface";
import Home from "@/pages/home/index";

// 首页模块
const homeRouter: Array<RouteObject> = [
	{
		element: <Layout />,
		children: [
			{
				path: "/home/index",
				element: <Home />,
				meta: {
					requiresAuth: true,
					title: "首页",
					key: "home"
				}
			}
		]
	}
];

export default homeRouter;
