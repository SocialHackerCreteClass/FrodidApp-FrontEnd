export function placeholderReplace(source, params) {
  params.forEach(function (n, i) {
    source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n)
  })
  return source
}
