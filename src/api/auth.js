export const getUserData = async (key, pin) => {
  const response = await fetch(`https://randomuser.me/api/`)
  const data = await response.json()
  const mockedUser = data.results[0]
  const mockedDateTimestamp = new Date().getTime()

  return {
    email: mockedUser.email,
    firstName: mockedUser.name.first,
    lastName: mockedUser.name.last,
    profession: `random profession${pin}`,
    birthDate: mockedDateTimestamp
  }
}
