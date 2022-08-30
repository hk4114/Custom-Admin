import { Switch } from "antd";
import { connect } from "react-redux";
import { setDark } from "@/store/modules/global";

const SwitchDark = (props: any) => {
	const { setDark, themeConfig } = props;
	const onChange = (checked: boolean) => {
		setDark(checked);
	};

	return (
		<Switch
			className="dark"
			defaultChecked={themeConfig.isDark}
			checkedChildren={<>🌞</>}
			unCheckedChildren={<>🌜</>}
			onChange={onChange}
		/>
	);
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setDark };
export default connect(mapStateToProps, mapDispatchToProps)(SwitchDark);
