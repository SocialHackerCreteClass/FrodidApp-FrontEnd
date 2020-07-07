import React from "react"

import PropTypes from "prop-types"
import Footer from "./components/Footer"
import { wrapper, gridNarrow, gridWide } from "./styles"

LayoutAuth.propTypes = {
  children: PropTypes.node
}

function LayoutAuth(props) {
  return (
    <div className={wrapper}>
      <div className={gridNarrow}>
        <div className="u-padding-vertical u-margin-bottom-large u-margin-bottom-huge@tablet">
          {props.children}
        </div>
      </div>
      <div className={gridWide}>
        <Footer />
      </div>
    </div>
  )
}

export default LayoutAuth
