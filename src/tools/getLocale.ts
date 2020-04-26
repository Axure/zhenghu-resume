export function getLocale(): "zh" | "en" {
  return 'zh';

  if (typeof navigator !== "undefined") {
    if (Array.isArray(navigator.languages)) {
      navigator.languages.forEach((language) => {
        if (language.indexOf("zh") === 0) {
          return "zh"
        }
        if (language.indexOf("en") === 0) {
          return "en"
        }
      })
    }
    if (typeof navigator.language === "string") {
      if (navigator.language.indexOf("zh") === 0) {
        return "zh"
      }
      if (navigator.language.indexOf("en") === 0) {
        return "en"
      }
    }
  }

  return "en"
}
