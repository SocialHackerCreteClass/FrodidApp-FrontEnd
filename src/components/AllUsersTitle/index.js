import React from "react"
import { wrapper, h1Title, subTitle, btnLetters, btnAlign } from "./style"
import PropTypes from "prop-types"
import Button from "components/Button/"
import { useI18n } from "providers/I18n"

const AllUsersTitle = ({ title, total, btn, btnAction }) => {
  const { t } = useI18n()
  return (
    <div className={wrapper}>
      <div>
        <h1 className={h1Title}> {title}</h1>
        <p className={subTitle}>{`${total} ${t("int.entries")}`}</p>
      </div>
      <div className={btnAlign}>
        <Button
          variant="secondary"
          size={"large"}
          onClick={btnAction}
          className={btnLetters}>
          {btn}
        </Button>
      </div>
    </div>
  )
}

AllUsersTitle.propTypes = {
  total: PropTypes.number,
  title: PropTypes.string,
  btn: PropTypes.string,
  btnAction: PropTypes.func
}

export default AllUsersTitle
