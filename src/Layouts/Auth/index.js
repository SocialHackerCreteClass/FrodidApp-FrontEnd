import React from "react"
import PropTypes from "prop-types"
import Footer from "./components/Footer"
import { wrapper, gridNarrow, gridWide } from "./styles"
import LogoIcon from "components/Icons/Logo"

LayoutAuth.propTypes = {
  children: PropTypes.node
}

function LayoutAuth(props) {
  return (
    <div className={wrapper}>
      <div className={gridNarrow}>
        <div className="u-padding-vertical u-margin-bottom-large u-margin-bottom-huge-tablet">
          <div className="u-margin-bottom-large u-text-align-center">
            <h1 className="u-hidden-visually">Frontidapp</h1>
            <a href="/" title="Frontidapp">
              <LogoIcon />
            </a>
          </div>
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
