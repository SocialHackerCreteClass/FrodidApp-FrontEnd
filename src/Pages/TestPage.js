import React from "react"
import Badge from "../components/Badge"

function TestPage() {
  return (
    <div>
      <hr />
      <h3>Badge</h3>
      <section>
        Normal badge: <Badge />
      </section>
      ----------------
      <section>
        Active badge: <Badge active />
      </section>
      <hr />
    </div>
  )
}

export default TestPage
