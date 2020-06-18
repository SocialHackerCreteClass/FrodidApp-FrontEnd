import React from "react"
import Badge from "../components/Badge"
import Input from "../components/Input"

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
      <h3>Input</h3>
      <section>
        Normal input: <Input success />
        <Input errorForm />
        <Input search />
        <Input disabled />
      </section>
      ----------------
    </div>
  )
}

export default TestPage
