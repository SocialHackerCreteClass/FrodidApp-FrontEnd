import React from "react"
import PropTypes from "prop-types"
import AppHeader from "./components/AppHeader"
import AppContent from "./components/AppContent"
import AppHeaderMobile from "./components/AppHeaderMobile"

import { wrapper } from "./styles"

LayoutDefault.propTypes = {
  children: PropTypes.node
}

function LayoutDefault(props) {
  return (
    <div className={wrapper}>
      <AppHeaderMobile />
      <AppHeader />
      <AppContent>{props.children}</AppContent>
    </div>
  )
}

export default LayoutDefault
