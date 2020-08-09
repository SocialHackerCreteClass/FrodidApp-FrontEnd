export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// The following function convert date from a Timestamp format to a Human Readable one.

const dayjs = require("dayjs")
const customParseFormat = require("dayjs/plugin/customParseFormat")
dayjs.extend(customParseFormat)

export const convertToDate = (timestamp) => {
  //convert timestamp to html format
  return dayjs(timestamp["$d"]).format("YYYY-MM-DD")
}
