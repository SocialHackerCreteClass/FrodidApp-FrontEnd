import React from "react"
import Badge from "components/Badge"
import Input from "components/Input"
import BreadcrumbsComponent from "components/Breadcrumbs"
import Avatar from "components/Avatar"
import Button from "components/Button"
import PhoneIcon from "components/Icons/Phone"
import MailIcon from "components/Icons/Mail"
import PatientsIcon from "components/Icons/Patients"
import ProfessionalsIcon from "components/Icons/Professionals"
import VisitationsIcon from "components/Icons/Visitations"
import AnalyticsIcon from "components/Icons/Analytics"
import LogoIcon from "components/Icons/Logo"
import { css } from "emotion"
import PatientTable from "../Patients/AllPatients/PatientTable"

function TestPage() {
  return (
    <div className={wrapper}>
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
        <div
          style={{
            borderStyle: "dotted"
          }}>
          <PatientTable />
        </div>
      </section>
      <section>
        <div
          style={{
            display: "flex",
            width: "70%",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
          <PhoneIcon />
          <PhoneIcon color={"red"} size={"small"} />
          <MailIcon />
          <MailIcon color={"var(--secondary-70)"} size={"small"} />
          <PatientsIcon />
          <PatientsIcon type={"secondary"} />
          <ProfessionalsIcon />
          <ProfessionalsIcon type={"secondary"} />
          <VisitationsIcon />
          <VisitationsIcon type={"secondary"} />
          <AnalyticsIcon />
          <AnalyticsIcon type={"secondary"} />
          <LogoIcon />
          <LogoIcon type={"mobile"} />
          <LogoIcon display={"none"} type={"mobile"} />
        </div>
      </section>
    </div>
  )
}

export default TestPage

const wrapper = css`
  section {
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 5px #5691f0 dashed;
  }
`
