import React from "react"

import Button from "components/Button/"
import VisitationTable from "./VisitationsTable"
import { titles } from "./style"

const Visitations = () => {
  return (
    <div>
      <header style={{ marginBottom: "48px" }}>
        <h2 className={titles}>Visitations</h2>
        <div>
          <Button ghost variant="secondary">
            Add visitation
          </Button>
        </div>
      </header>
      <VisitationTable />
    </div>
  )
}

export default Visitations
