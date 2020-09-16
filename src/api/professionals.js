import { sleep } from "../utils"

// const URL = "";

export async function getProfessionals(key, { pageSize, pageIndex }) {
  // const response = await fetch(URL);
  // return response.json();
  await sleep(2000)

  return {
    total: mockProfessionals.total,
    pageIndex,
    pageSize,
    data: mockProfessionals.data.slice(
      pageIndex * pageSize,
      Math.min(mockProfessionals.data.length, pageIndex * pageSize + pageSize)
    )
  }
}

export async function getProfessional(key, id) {
  // const response = await fetch(
  //   "https://api.github.com/repos/tannerlinsley/react-query"
  // )
  // return response.json()
  await sleep(2000)
  return mockProfessionals.data.find((pr) => pr.id === id)
}

export const mockProfessionals = {
  total: 23,
  data: [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe1",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "2",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "3",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "4",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "5",
      firstName: "John",
      lastName: "Doe5",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "6",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "7",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "8",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "9",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "10",
      firstName: "John",
      lastName: "Doe10",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "11",
      firstName: "John",
      lastName: "Doe11",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "12",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "13",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "14",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "15",
      firstName: "John",
      lastName: "Doe15",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "16",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "17",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "18",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "19",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "20",
      firstName: "John",
      lastName: "Doe20",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "21",
      firstName: "John",
      lastName: "Doe21",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "22",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    },
    {
      id: "23",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      birthDate: "3 / 2 / 1976",
      createdDate: "14 / 8 / 2020",
      afm: "165896352",
      amka: "165896352",
      role: "professional",
      profession: "doctor",
      image: "https://placekitten.com/300/300",
      lastvisit: {
        patient: "Mary White",
        date: "12/9/2020"
      }
    }
  ]
}
