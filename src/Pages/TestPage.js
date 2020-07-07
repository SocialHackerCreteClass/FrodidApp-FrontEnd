import React from "react"
import Badge from "../components/Badge"
import Input from "../components/Input"
import BreadcrumbsComponent from "../components/Breadcrumbs"
import Avatar from "../components/Avatar"
import Button from "../components/Button"
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
        <Input />
        <Input search errorMessage={"there is an error"} />
        <Input disabled />
      </section>
      ----------------
      <section>
        Avatar:{" "}
        <Avatar
          user={{
            image: "https://placekitten.com/300/300",
            firstName: "John",
            lastName: "Doe"
          }}
        />
        <Avatar user={{ image: null, firstName: "John", lastName: "doe" }} />
        <Avatar user={{ image: "", firstName: "John", lastName: "" }} />
        <div>
          Large Avatar:{" "}
          <Avatar
            size={"large"}
            user={{
              image: "https://placekitten.com/300/300",
              firstName: "John",
              lastName: "Doe"
            }}
          />
        </div>
      </section>
      <section>
        <div>
          <Button type="submit"></Button>
          <Button></Button>
        </div>
      </section>
    </div>
  )
}

export default TestPage
