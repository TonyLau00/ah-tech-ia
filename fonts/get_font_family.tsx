import { locale } from "../i18n.js";

export const get_font_family = (zh, en) => {
    if (locale === "zh"){
        return zh;
    } else if (locale === "en"){
        return en;
    }
}