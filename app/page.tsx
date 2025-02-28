import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function Home() {
  // 获取请求头中的 Accept-Language
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // 支持的语言列表
  const supportedLanguages = ["zh", "en", "ja", "ko", "fr", "es", "de"];

  // 解析 Accept-Language 头，格式如：zh-CN,zh;q=0.9,en;q=0.8
  const languagePreferences = acceptLanguage
    .split(",")
    .map((item) => {
      const [lang, qValue] = item.trim().split(";");
      const q = qValue ? parseFloat(qValue.replace("q=", "")) : 1.0;
      return { lang: lang.substring(0, 2).toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);

  // 查找匹配的语言
  let redirectLang = "en"; // 默认为英文

  for (const pref of languagePreferences) {
    if (supportedLanguages.includes(pref.lang)) {
      redirectLang = pref.lang;
      break;
    }
  }

  // 重定向到对应语言页面
  redirect(`/${redirectLang}`);
}
