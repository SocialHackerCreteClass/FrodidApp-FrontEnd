import React from "react"
import PropTypes from "prop-types"
import Topbar from "components/Topbar"
import AppFooter from "Layouts/Default/components/AppFooter"
import { content, wrapper } from "./styles"

AppContent.propTypes = {
  children: PropTypes.node
}

function AppContent(props) {
  return (
    <div className={wrapper}>
      <Topbar />
      <div className={content}>{props.children}</div>
      <AppFooter />
    </div>
  )
}

export default AppContent
