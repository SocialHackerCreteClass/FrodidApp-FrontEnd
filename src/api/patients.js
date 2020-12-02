const URL = "/patients"

export const getPatients = async (key, urlParams) => {
  const serverData = await window.appFetch(
    `${URL}?${new URLSearchParams(urlParams).toString()}`
  )
  const { total, data } = await serverData.json()
  return {
    total: Number(total),
    data,
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
