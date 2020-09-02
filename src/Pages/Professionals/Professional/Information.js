import React from "react"
import Button from "components/Button/index"
import { ul, li, dl, dt, dd, wrapper } from "./style"
import { UserType } from "types"

const Information = ({ birthDate, profession, createdDate }) => {
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
        <li className={li}>
          <dl className={dl}>
            <dt className={dt}>Birthday</dt>
            <dd className={dd}>{birthDate}</dd>
          </dl>
        </li>
        <li className={li}>
          <dl className={dl}>
            <dt className={dt}>Profession</dt>
            <dd className={dd}>{profession}</dd>
          </dl>
        </li>
        <li className={li}>
          <dl className={dl}>
            <dt className={dt}>Contact number</dt>
            <dd className={dd}>6954823581</dd>
          </dl>
        </li>
      </ul>
      <h3 style={{ fontSize: "1.35rem", lineHeight: 1.39, marginBottom: 24 }}>
        Additional Information
      </h3>
      <ul className={ul}>
        <li className={li}>
          <dl className={dl}>
            <dt className={dt}>Registered</dt>
            <dd className={dd}>{createdDate}</dd>
          </dl>
        </li>
        <li className={li}>
          <dl className={dl}>
            <dt className={dt}>Status</dt>
            <dd className={dd}>Active</dd>
          </dl>
        </li>
      </ul>
    </div>
  )
}

Information.propTypes = UserType

export default Information
