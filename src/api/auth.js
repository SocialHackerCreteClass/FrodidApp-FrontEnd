export const getUserData = async (key, pin) => {
  const response = await fetch(`https://randomuser.me/api/`)
  const data = await response.json()
  const mockedUser = data.results[0]

  return {
    email: mockedUser.email,
    firstName: mockedUser.name.first,
    lastName: mockedUser.name.last,
    profession: `random profession${pin}`,
    //birthDate: new Date(mockedUser.dob.date).getTime()
    birthDate: mockedUser.dob.date
  }
}
