import * as React from "react";
const toString = Object.prototype.toString;

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
	return toString.call(val) === `[object ${type}]`;
}

/**
 * @description:  是否为函数
 */
export function isFunction<T = Function>(val: unknown): val is T {
	return is(val, "Function");
}

/**
 * @description: 是否已定义
 */
export const isDef = <T = unknown>(val?: T): val is T => {
	return typeof val !== "undefined";
};

export const isUnDef = <T = unknown>(val?: T): val is T => {
	return !isDef(val);
};
/**
 * @description: 是否为对象
 */
export const isObject = (val: any): val is Record<any, any> => {
	return val !== null && is(val, "Object");
};

/**
 * @description:  是否为时间
 */
export function isDate(val: unknown): val is Date {
	return is(val, "Date");
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: unknown): val is number {
	return is(val, "Number");
}

/**
 * @description:  是否为AsyncFunction
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
	return is(val, "AsyncFunction");
}

/**
 * @description:  是否为promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
	return is(val, "Promise") && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * @description:  是否为数组
 */
export function isArray(val: any): val is Array<any> {
	return val && Array.isArray(val);
}

/**
 * @description: 是否客户端
 */
export const isClient = () => {
	return typeof window !== "undefined";
};

/**
 * @description: 是否为浏览器
 */
export const isWindow = (val: any): val is Window => {
	return typeof window !== "undefined" && is(val, "Window");
};

export const isElement = (val: unknown): val is Element => {
	return isObject(val) && !!val.tagName;
};

export const isServer = typeof window === "undefined";

/**
 * @description: 是否为图片节点
 */
export function isImageDom(o: Element) {
	return o && ["IMAGE", "IMG"].includes(o.tagName);
}

export function isNull(val: unknown): val is null {
	return val === null;
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
	return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
	return isUnDef(val) || isNull(val);
}

export function isReactMemo(
	Component: React.MemoExoticComponent<React.ComponentType<any>> | React.FunctionComponent
): Component is React.MemoExoticComponent<React.ComponentType<any>> {
	return typeof Component !== "function" && !!Component["$$typeof"];
}

export function isComponentClass<T>(Component: React.ComponentClass<T>): Component is React.ComponentClass<T> {
	return Component.prototype && Component.prototype.render;
}

/**
 * @description: 是否邮箱地址
 */
export function isEmail(val: string) {
	const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
	if (reg.test(val)) return true;
}

/**
 * @description: 是否是手机号
 */
export const isTelphone = (val: string) => {
	const reg = /^((\+|00)86)?1[3-9]\d{9}$/g;
	if (reg.test(val)) return true;
};

/**
 * @description 是否是中文
 */
export const isChinese = (val: string) => /^[\u4E00-\u9FA5]+$/g.test(val);

/**
 * @description 判断数据是否为空（包括空对象，空数组）
 */
export function isEmpty(data: unknown) {
	if (data === undefined || data === null || data === 0 || data === "") {
		return true;
	}
	if (Array.isArray(data)) {
		return data.length === 0;
	}
	if (typeof data === "object") {
		return Object.keys(data).length === 0;
	}
	return false;
}
