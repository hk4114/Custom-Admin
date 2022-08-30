import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import "antd/dist/antd.less";
import "@/styles/reset.less";
import "@/assets/iconfont/iconfont.less";
import "@/styles/common.less";

import "@/language/index";
import { store, persistor } from "@/store";
import App from "@/App";

const root = createRoot(document.getElementById("root")!);

root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
