import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 外部链接模块
const linkRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "外部链接"
		},
		children: [
			{
				path: "/link/juejin",
				element: lazyLoad(React.lazy(() => import("@/pages/link/juejin/index"))),
				meta: {
					requiresAuth: true,
					title: "掘金文档",
					key: "juejin"
				}
			}
		]
	}
];

export default linkRouter;
