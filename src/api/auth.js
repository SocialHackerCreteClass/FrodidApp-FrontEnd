export const getUserData = async (key, pin) => {
  const response = await fetch(`https://randomuser.me/api/`)
  const data = await response.json()
  const mockedUser = data.results[0]
  const fullDate = mockedUser.dob.date
  const inputDate = fullDate.slice(0, 10)
  console.log(inputDate)

  return {
    email: mockedUser.email,
    firstName: mockedUser.name.first,
    lastName: mockedUser.name.last,
    profession: `random profession${pin}`,
    birthDate: inputDate
    //birthDate: "1994-05-25"  ---> working date format
  }
}
