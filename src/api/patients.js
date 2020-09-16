import { sleep } from "../utils"

// const URL=""

export const getPatients = async (key, { pageSize, pageIndex }) => {
  //  const data = await fetch(URL)
  //  const response = await data.json()
  //  return response
  await sleep(2000)

  return {
    total: mockPatients.total,
    pageSize,
    pageIndex,
    data: mockPatients.data.slice(
      pageSize * pageIndex,
      Math.min(mockPatients.data.length, pageSize * pageIndex + pageSize)
    )
  }
}

export const mockPatients = {
  total: 22,
  data: [
    {
      id: 1,
      firstName: "Giannis",
      lastName: "Doe (Page1)",
      birthDate: "1986-05-03",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2019-12-27",
      user: "Mary Doe"
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 5,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 6,
      firstName: "John",
      lastName: "Doe (Page 2)",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 7,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 8,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 9,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 10,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 11,
      firstName: "John",
      lastName: "Doe (Page 3)",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 12,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 13,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 14,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 15,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 16,
      firstName: "John",
      lastName: "Doe (Page 4)",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 17,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 18,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 19,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 20,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 21,
      firstName: "John",
      lastName: "Doe (Page 5)",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    },
    {
      id: 22,
      firstName: "John",
      lastName: "Doe",
      birthDate: "1930-12-30",
      address: {
        street: "Leoforos Ionias",
        streetNumber: "35",
        region: "Mastampas",
        country: "Greece",
        state: "Heraklion"
      },
      date: "2020-06-27",
      user: "Mary Doe"
    }
  ]
}
