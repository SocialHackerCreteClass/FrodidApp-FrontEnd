import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// The following function convert date from a Timestamp format to a Human Readable one.

dayjs.extend(customParseFormat)

export const convertToDate = (timestamp) => {
  //convert timestamp to html format
  return dayjs(timestamp).format("YYYY-MM-DD")
}
