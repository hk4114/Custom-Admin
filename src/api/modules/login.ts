import { Login } from "@/api/interface";
import qs from "qs";

import request from "@/utils/request";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
	return request.post<Login.ResLogin>(`/hooks/login`, params);
	return request.post<Login.ResLogin>(`/hooks/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
	return request.post<Login.ResLogin>(`/hooks/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
	return request.post<Login.ResLogin>(`/hooks/login`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
};

// * 获取按钮权限
export const getAuthorButtons = () => {
	return request.get<Login.ResAuthButtons>(`/hooks/auth/buttons`);
};

// * 获取菜单列表
export const getMenuList = () => {
	return request.get<Menu.MenuOptions[]>(`https://mock.mengxuegu.com/mock/630c3c54c94098684fb183d3/example/menu`);
};
