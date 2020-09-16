import { sleep } from "utils"

export const getUserData = async (key, pin) => {
  console.log("fetching user with pin:", pin)
  await sleep(2000)
  return {
    id: "1",
    firstName: "John",
    lastName: "Doe1",
    email: "johndoe@gmail.com",
    birthDate: 969117408000,
    createdDate: "14 / 8 / 2020",
    afm: "165896352",
    amka: "165896352",
    role: "professional",
    profession: "doctor"
  }
}
