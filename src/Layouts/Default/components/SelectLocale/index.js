import React from "react"
import PropTypes from "prop-types"
import { useI18n } from "providers/I18n"
import { css } from "emotion"
import elLogo from "images/lang_images/el.png"
import enLogo from "images/lang_images/en.png"

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
          <div
            key={locale}
            className={localeWrapper}
            onClick={() => updateLocale(locale)}>
            {locale === "el" ? (
              <img className={langLogo} alt="el logo" src={elLogo} />
            ) : (
              <img className={langLogo} alt="en logo" src={enLogo} />
            )}
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
`
