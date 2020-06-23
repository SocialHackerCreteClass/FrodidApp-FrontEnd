import React from "react"
import Badge from "../components/Badge"

import Input from "../components/Input"

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

      <h3>Input</h3>
      <section>
        Normal input: <Input success />
        <Input errorForm />
        <Input search />
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

    </div>
  )
}

export default TestPage
