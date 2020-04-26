export function getQueryParams(): Record<string, string> {
  const result: Record<string, string> = {}
  if (typeof location !== "undefined") {
    location.search.slice(1).split("&").forEach((piece) => {
      const [key, value] = piece.split("=")
      result[key] = value
    })
  }

  return result
}
