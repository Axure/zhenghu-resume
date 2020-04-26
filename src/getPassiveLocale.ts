import { getQueryParams } from "./tools/getQueryParams"
import { getLocale } from "./tools/getLocale"

export function getPassiveLocale(): "zh" | "en" {

  const localeInSearch = getQueryParams().locale
  if (localeInSearch === "zh" || localeInSearch === "en") {
    return localeInSearch
  }

  return getLocale()
}
