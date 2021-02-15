import React from "react"
import Button from "components/Button/index"
import { ul, li, dls, dts, dds, wrapper, paddingBot, h3, h2 } from "./style"
import { useI18n } from "providers/I18n"
import * as PropTypes from "prop-types"

function LabelInfo({ label, value }) {
  return (
    <li className={li}>
      <dl className={dls}>
        <dt className={dts}>{label}</dt>
        <dd className={dds}>{value}</dd>
      </dl>
    </li>
  )
}

LabelInfo.propTypes = { label: PropTypes.string, value: PropTypes.string }

const Information = ({
  info,
  h2Title,
  additionalInfo,
  additional,
  h3Title
}) => {
  const { t } = useI18n()

  return (
    <div className={wrapper}>
      <header className={paddingBot}>
        <h2 className={h2}>{h2Title}</h2>
        <div>
          <Button ghost variant="secondary">
            {t("int.edit_information")}
          </Button>
        </div>
      </header>
      <h3 className={h3}>{h3Title}</h3>
      <ul className={ul}>
        {info.map((item, i) => (
          <LabelInfo key={i} label={item.name} value={item.value} />
        ))}
      </ul>
      {additional && (
        <>
          <h3 className={h3}>{t("int.additional_information")}</h3>
          <ul className={ul}>
            {additionalInfo.map((item, i) => (
              <LabelInfo key={i} label={item.name} value={item.value} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

Information.propTypes = {
  info: PropTypes.array,
  additionalInfo: PropTypes.array,
  additional: PropTypes.bool,
  h2Title: PropTypes.string,
  h3Title: PropTypes.string
}

export default Information
