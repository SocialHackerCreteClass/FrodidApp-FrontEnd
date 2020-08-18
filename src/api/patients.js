const URL = "/patients"

export const getPatients = async (params) => {
  const queryParams = new URLSearchParams(params).toString()
  const url = `${URL}?${queryParams}`
  const response = await window.appFetch(url)
  return response.json()
}
