import React from "react"
import Title from "./Title"
import Information from "./Information"
import Visitations from "./Visitations"

const Professional = () => {
  const user = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    birthDate: 3 / 2 / 1976,
    createdDate: 14 / 8 / 2020,
    afm: "165896352",
    amka: "165896352",
    role: "professional",
    profession: "doctor",
    image: "https://placekitten.com/300/300"
  }
  return (
    <>
      <Title
        firstName={user.firstName}
        lastName={user.lastName}
        image={user.image}
      />
      <Information
        birthDate={user.birthDate}
        createdDate={user.createdDate}
        profession={user.profession}
      />
      <Visitations />
    </>
  )
}

export default Professional
