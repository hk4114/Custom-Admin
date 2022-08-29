import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import Layout from "@/layouts/index";
import { RouteObject } from "@/routers/interface";

// 数据大屏模块
const dataScreenRouter: Array<RouteObject> = [
	{
		element: <Layout />,
		children: [
			{
				path: "/dataScreen/index",
				element: lazyLoad(React.lazy(() => import("@/pages/dataScreen/index"))),
				meta: {
					requiresAuth: true,
					title: "数据大屏",
					key: "dataScreen"
				}
			}
		]
	}
];

export default dataScreenRouter;
