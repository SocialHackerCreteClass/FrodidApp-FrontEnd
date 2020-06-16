import React from "react"
import Badge from "../components/Badge"
import Avatar from "../components/Avatar"

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
      <section>
        Avatar: <Avatar src="https://placekitten.com/300/300" />
        <div>
          Large Avatar:{" "}
          <Avatar size={"large"} src="https://placekitten.com/300/400" />
        </div>
      </section>
    </div>
  )
}

export default TestPage
