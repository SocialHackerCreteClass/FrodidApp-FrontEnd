import React from "react"
import Badge from "../components/Badge"
import Input from "../components/Input"
import BreadcrumbsComponent from "../components/Breadcrumbs"
import Avatar from "../components/Avatar"
import Button from "../components/Button"
import { Table, columns, data } from "../table"

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
            lastName: "Doe",
            email: "test@email.com"
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
              lastName: "Doe",
              email: "test@email.com"
            }}
          />
        </div>
      </section>
      <section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}>
          <Button
            type="submit"
            size={"small"}
            onClick={() => console.log("Primary button clicked")}>
            Primary
          </Button>
          <Button
            variant="secondary"
            size={"small"}
            onClick={() => console.log("Secondary button clicked")}>
            Secondary
          </Button>
          <Button variant="danger">Danger</Button>
          <Button ghost size={"small"}>
            Primary Ghost
          </Button>
          <Button ghost variant="secondary" full size={"large"}>
            Secondary Ghost
          </Button>
          <Button ghost variant="danger">
            Danger Ghost
          </Button>
        </div>
      </section>
      ----------------
      <section>
        Table:
        <Table columns={columns} data={data} />
      </section>
    </div>
  )
}

export default TestPage
