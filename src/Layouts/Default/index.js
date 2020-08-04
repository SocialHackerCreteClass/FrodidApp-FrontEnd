import React from "react"
import AppHeader from "components/AppHeader"
import AppContent from "components/AppContent"
import AppHeaderMobile from "components/AppHeaderMobile"

import { wrapper } from "./styles"

function LayoutDefault() {
  return (
    <div className={wrapper}>
      <AppHeaderMobile />
      <AppHeader />
      <AppContent />
    </div>
  )
}

export default LayoutDefault
