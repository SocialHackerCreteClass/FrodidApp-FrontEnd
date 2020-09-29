const URL = "/patients"

export const getPatients = async (key, urlParams) => {
  const serverData = await window.appFetch(
    `${URL}?${new URLSearchParams(urlParams).toString()}`
  )
  // eslint-disable-next-line no-unused-vars
  const { total_results, pages_length, total, data } = await serverData.json()
  return {
    total: Number(total),
    data: data.map(normalizeUser),
    ...urlParams
  }
}

export const getPatient = async (key, id) => {
  const serverData = await window.appFetch(`${URL}/${id}`)
  const { data } = await serverData.json()
  return normalizeUser(data[0])
}

export const savePatient = async (user) => {
  const body = JSON.stringify(denormalizeUser(user))
  let serverData
  if (user.id) {
    serverData = await window.appFetch(`${URL}/${user.id}`, {
      method: "PUT",
      body
    })
  } else {
    serverData = await window.appFetch(URL, { method: "POST", body })
  }
  return serverData
}

function denormalizeUser(user) {
  const {
    // eslint-disable-next-line no-unused-vars
    birthDate = new Date().getTime(),
    firstName,
    lastName,
    // eslint-disable-next-line no-unused-vars
    address,
    // eslint-disable-next-line no-unused-vars
    gender,
    ...restProps
  } = user
  return {
    ...restProps,
    birth_date: "2000-01-31",
    first_name: firstName,
    last_name: lastName,
    address_id: 1,
    gender_id: 2
  }
}

function normalizeUser(serverUser) {
  const { birth_date, first_name, last_name, ...restProps } = serverUser
  return {
    ...restProps,
    birthDate: birth_date * 1000,
    firstName: first_name,
    lastName: last_name
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
