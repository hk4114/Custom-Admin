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
			},
			{
				path: "/dashboard/selectIcon",
				element: lazyLoad(React.lazy(() => import("@/pages/dashboard/selectIcon/index"))),
				meta: {
					requiresAuth: true,
					title: "Icon 选择",
					key: "selectIcon"
				}
			},
			{
				path: "/dashboard/batchImport",
				element: lazyLoad(React.lazy(() => import("@/pages/dashboard/batchImport/index"))),
				meta: {
					requiresAuth: true,
					title: "批量导入数据",
					key: "selectIcon"
				}
			}
		]
	}
];

export default dashboardRouter;
