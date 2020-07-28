function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const getPatients = async () => {
  await sleep(2000)
  return [
    {
      id: 1,
      firstName: "Giannis",
      lastName: "Doe",
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
    }
  ]
}
