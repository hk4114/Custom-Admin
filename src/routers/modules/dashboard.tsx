import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import Layout from "@/layouts/index";
import { RouteObject } from "@/routers/interface";

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
	{
		element: <Layout />,
		meta: {
			title: "Dashboard"
		},
		children: [
			{
				path: "/dashboard/embedded",
				element: lazyLoad(React.lazy(() => import("@/pages/dashboard/embedded/index"))),
				meta: {
					requiresAuth: true,
					title: "内嵌页面",
					key: "embedded"
				}
			}
		]
	}
];

export default dashboardRouter;
