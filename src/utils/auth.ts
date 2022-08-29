import Cookies from "js-cookie";

const TokenKey = "token";

export function tokenGet(): string | undefined {
	return Cookies.get(TokenKey);
}

export function tokenSet(token: string) {
	return Cookies.set(TokenKey, token);
}

export function tokenRemove() {
	return Cookies.remove(TokenKey);
}
