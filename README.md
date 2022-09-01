# Custom-Admin

> mock 数据

https://github.com/public-apis/public-apis

https://mock.mengxuegu.com/

## 国际化

```js
// src/language/modules/[lang].ts
// 加入对应文案，格式 page.key
import { useTranslation } from "react-i18next";
const { t } = useTranslation();
t("page.key");
```
