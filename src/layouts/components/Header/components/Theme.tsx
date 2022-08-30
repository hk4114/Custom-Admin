import { Drawer, Divider, Switch } from "antd";
import { useState } from "react";
import { RootState, useDispatch, useSelector } from "@/store";
import { FireOutlined } from "@ant-design/icons";
import { setWeakOrGray } from "@/store/modules/global";
import SwitchDark from "@/layouts/components/Header/components/SwitchDark";

const Theme = () => {
	const dispatch = useDispatch();
	const { weakOrGray } = useSelector((state: RootState) => state.global.themeConfig);
	const [visible, setVisible] = useState<boolean>(false);

	const onChange = (checked: boolean, theme: string) => {
		if (checked) return dispatch(setWeakOrGray(theme));
		dispatch(setWeakOrGray(""));
	};

	return (
		<>
			<i
				className="icon-style iconfont icon-zhuti"
				onClick={() => {
					setVisible(true);
				}}
			></i>
			<Drawer
				title="布局设置"
				closable={false}
				onClose={() => {
					setVisible(false);
				}}
				visible={visible}
				width={320}
			>
				<Divider className="divider">
					<FireOutlined />
					全局主题
				</Divider>
				<div className="theme-item">
					<span>暗黑模式</span>
					<SwitchDark />
				</div>
				<div className="theme-item">
					<span>灰色模式</span>
					<Switch
						checked={weakOrGray === "gray"}
						onChange={e => {
							onChange(e, "gray");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>色弱模式</span>
					<Switch
						checked={weakOrGray === "weak"}
						onChange={e => {
							onChange(e, "weak");
						}}
					/>
				</div>
			</Drawer>
		</>
	);
};

export default Theme;
