import React from "react"
import Button from "components/Button/index"
import { ul, li, dls, dts, dds, wrapper, paddingBot, h3, h2 } from "./style"
import { UserType } from "types"
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

const Information = ({ user }) => {
  const { t } = useI18n()
  const { birthDate, profession, createdDate } = user
  const personalInfo = [
    {
      name: t("int.dateOfBirth"),
      value: birthDate
    },
    {
      name: t("int.profession"),
      value: profession
    },
    {
      name: t("int.contactNumber"),
      value: "6954823581"
    }
  ]

  const additionalInfo = [
    {
      name: t("int.registered"),
      value: createdDate
    },
    {
      name: t("int.status"),
      value: "Active"
    }
  ]
  return (
    <div className={wrapper}>
      <header className={paddingBot}>
        <h2 className={h2}>{t("int.information")}</h2>
        <div>
          <Button ghost variant="secondary">
            {t("int.edit_information")}
          </Button>
        </div>
      </header>
      <h3 className={h3}>{t("int.personal_information")}</h3>
      <ul className={ul}>
        {personalInfo.map((item, i) => (
          <LabelInfo key={i} label={item.name} value={item.value} />
        ))}
      </ul>
      <h3 className={h3}>{t("int.additional_information")}</h3>
      <ul className={ul}>
        {additionalInfo.map((item, i) => (
          <LabelInfo key={i} label={item.name} value={item.value} />
        ))}
      </ul>
    </div>
  )
}

Information.propTypes = { user: UserType }

export default Information
