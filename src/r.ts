import { getLocale } from "./tools/getLocale"
import { getQueryParams } from "./tools/getQueryParams"
import { getPassiveLocale } from "./getPassiveLocale"

export const rawResource = {
  ZhengHu: {
    zh: "郑虎",
    en: "Hu ZHENG",
  },
  ZhengHuSResume: {
    zh: "郑虎的简历",
    en: "Hu ZHENG's resume",
  },
  Education: {
    zh: "教育",
    en: "Education",
  },
  Experience: {
    zh: "经历",
    en: "Experience",
  },
  fulltime: {
    zh: "全职",
    en: "Full-time",
  },
  intership: {
    zh: "实习",
    en: "Internship",
  },
  fe: {
    zh: "前端工程师",
    en: "Software Engineer, Frontend",
  },
  ZJU: {
    zh: "浙江大学",
    en: "Zhejiang University",
  },
  BS: {
    zh: "理学学士",
    en: "Bachelor of Science",
  },
  Math: {
    zh: "数学与应用数学",
    en: "Mathematics and Applied Mathematics",
  },
  Bytedance: {
    zh: "字节跳动",
    en: "Bytedance",
  },
  Hangzhou: {
    zh: "杭州",
    en: "Hangzhou",
  },
  Beijing: {
    zh: "北京",
    en: "Beijing",
  },
  comma: {
    zh: "，",
    en: ", ",
  },
  colon: {
    zh: "：",
    en: ":&nbsp;",
  },
  leftBracket: {
    zh: "（",
    en: " (",
  },
  rightBracket: {
    zh: "）",
    en: ") ",
  },
  Top: {
    zh: "前",
    en: "top",
  },
  Rep: {
    zh: "声望",
    en: "rep",
  },
  Contact: {
    zh: "联系方式",
    en: "Contact",
  },
  Communities: {
    zh: "编程社区",
    en: "Communities",
  },
  SD: {
    zh: "软件开发者",
    en: "Software Developer",
  },
  SwitchLanguage: {
    zh: "切换语言",
    en: "Switch Language",
  },
  MathEnsu: {
    zh: "数学爱好者",
    en: "Math Enthusiast",
  },
  zh: {
    zh: "中文",
    en: "Chinese",
  },
  en: {
    zh: "英文",
    en: "English",
  },
}

export const getResourceByLanguage = (language: "en" | "zh"): Record<keyof typeof rawResource, string> => {
  const result: Record<keyof typeof rawResource, string> = {} as any
  Object.keys(rawResource).forEach((key) => {
    (result as any)[key] = ((rawResource as any)[key] as any)[language]
  })

  return result
}

export function R(): Record<keyof typeof rawResource, string> {
  return getResourceByLanguage(getPassiveLocale())
}
