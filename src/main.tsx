import { createRoot } from "react-dom/client";
import "@/styles/reset.less";
import "antd/dist/antd.less";
import "@/styles/common.less";
import "@/language/index";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
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
