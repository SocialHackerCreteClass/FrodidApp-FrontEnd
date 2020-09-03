import React from "react"
import Button from "components/Button/index"
import { ul, li, dls, dts, dds, wrapper } from "./style"
import { UserType } from "types"

const Information = ({ birthDate, profession, createdDate }) => {
  const personalInfo = [
    {
      name: "Birthday",
      value: birthDate
    },
    {
      name: "Profession",
      value: profession
    },
    {
      name: "Contact number",
      value: "6954823581"
    }
  ]

  const additionalInfo = [
    {
      name: "Registered",
      value: createdDate
    },
    {
      name: "Status",
      value: "Active"
    }
  ]
  return (
    <div className={wrapper}>
      <header style={{ paddingBottom: 48 }}>
        <h2 style={{ fontSize: 37.33, lineHeight: 1.29 }}>Information</h2>
        <div>
          <Button ghost variant="secondary">
            Edit Information
          </Button>
        </div>
      </header>
      <h3 style={{ fontSize: "1.35rem", lineHeight: 1.39, marginBottom: 24 }}>
        Personal Information
      </h3>
      <ul className={ul}>
        {personalInfo.map((item, i) => (
          <li key={i} className={li}>
            <dl className={dls}>
              <dt className={dts}>{item.name}</dt>
              <dd className={dds}>{item.value}</dd>
            </dl>
          </li>
        ))}
      </ul>
      <h3 style={{ fontSize: "1.35rem", lineHeight: 1.39, marginBottom: 24 }}>
        Additional Information
      </h3>
      <ul className={ul}>
        {additionalInfo.map((item, i) => (
          <li key={i} className={li}>
            <dl className={dls}>
              <dt className={dts}>{item.name}</dt>
              <dd className={dds}>{item.value}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

Information.propTypes = UserType

export default Information
