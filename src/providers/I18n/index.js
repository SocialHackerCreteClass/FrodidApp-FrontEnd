import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react"
import PropTypes from "prop-types"
import { loadFromStorage, saveToStorage } from "utils/storage"
import translations from "./translations"
import { placeholderReplace } from "utils/string"

const STORAGE_KEY = "i18n"
export const availableLangs = ["en", "el"]

export const I18nContext = React.createContext({
  lang: availableLangs[0],
  t: (s) => s,
  updateLocale: () => {}
})

I18nProvider.propTypes = {
  children: PropTypes.node
}

function I18nProvider({ children }) {
  const { lang: initLang = availableLangs[0] } = useMemo(
    () => loadFromStorage(STORAGE_KEY) || {},
    []
  )
  const [lang, setLang] = useState(initLang)

  const t = useCallback(
    (key, ...params) => {
      const i18nValue = translations[lang][key]
      if (!i18nValue) {
        console.warn(
          `i18n key: "${key}" doesn't exist. Please add it to /providers/I18n/translations.json file`
        )
        return key
      }
      if (params.length > 0) {
        return placeholderReplace(i18nValue, params)
      }
      return i18nValue
    },
    [lang]
  )

  useEffect(() => {
    saveToStorage(STORAGE_KEY, { lang })
  }, [lang])

  return (
    <I18nContext.Provider
      value={{ lang, t, updateLocale: setLang, availableLangs }}>
      {children}
    </I18nContext.Provider>
  )
}

export default I18nProvider

export const useI18n = () => useContext(I18nContext)
