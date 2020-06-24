import React from "react"
import Badge from "../components/Badge"
import Input from "../components/Input"
import BreadcrumbsComponent from "../components/Breadcrumbs"

function TestPage() {
  return (
    <div>
      <hr />
      <section>
        <h3>Breadcrumbs Component</h3>
        <BreadcrumbsComponent />
      </section>
      ----------------
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
