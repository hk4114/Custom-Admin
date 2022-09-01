import React from "react";
import "./index.less";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();
	return <div className="home">{t("home.welcome")}</div>;
};

export default Home;
