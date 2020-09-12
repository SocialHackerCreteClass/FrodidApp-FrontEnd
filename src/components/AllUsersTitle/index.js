import React from "react"
import { wrapper, h1Title, subTitle, btnLetters } from "./style"
import PropTypes from "prop-types"
import Button from "components/Button/"
import { useI18n } from "providers/I18n"

const AllUsersTitle = ({ title, total, btn }) => {
  const { t } = useI18n()
  return (
    <div className={wrapper}>
      <div>
        <h1 className={h1Title}> {title}</h1>
        <p className={subTitle}>{`${total} ${t("int.entries")}`}</p>
      </div>
      <div style={{ textAlign: "left" }}>
        <Button
          variant="secondary"
          size={"large"}
          onClick={() => console.log("Secondary button clicked")}>
          <span className={btnLetters}>{btn}</span>
        </Button>
      </div>
    </div>
  )
}

AllUsersTitle.propTypes = {
  total: PropTypes.number,
  title: PropTypes.string,
  btn: PropTypes.string
}

export default AllUsersTitle
