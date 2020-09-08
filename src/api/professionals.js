import { sleep } from "../utils"

export async function getProfessional(key, id) {
  // const response = await fetch(
  //   "https://api.github.com/repos/tannerlinsley/react-query"
  // )
  // return response.json()
  await sleep(2000)
  return { ...mockUser, id }
}

const mockUser = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@gmail.com",
  birthDate: "3 / 2 / 1976",
  createdDate: "14 / 8 / 2020",
  afm: "165896352",
  amka: "165896352",
  role: "professional",
  profession: "doctor",
  image: "https://placekitten.com/300/300"
}
