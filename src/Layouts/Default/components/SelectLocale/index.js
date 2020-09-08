import React from "react"
import PropTypes from "prop-types"
import { useI18n } from "providers/I18n"
import { css } from "emotion"

SelectLocale.propTypes = {
  className: PropTypes.string
}

function SelectLocale({ className }) {
  const { lang, updateLocale, availableLangs } = useI18n()
  return (
    <div className={className}>
      {availableLangs
        .filter((locale) => locale !== lang)
        .map((locale) => (
          <div key={locale} className={localeWrapper}>
            <img
              className={langLogo}
              onClick={() => updateLocale(locale)}
              alt={`${locale} logo`}
              src={`/images/locale/${locale}.png`}
            />
          </div>
        ))}
    </div>
  )
}

export default SelectLocale

const localeWrapper = css`
  text-transform: uppercase;
  font-size: 50px;
`
const langLogo = css`
  margin-left: 10px;
  cursor: pointer;
`
