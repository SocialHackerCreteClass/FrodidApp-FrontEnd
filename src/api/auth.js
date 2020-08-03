export const getUserData = async (key, pin) => {
  const response = await fetch(`https://randomuser.me/api/`)
  const data = await response.json()
  const mockedUser = data.results[0]
  //Converting Timestamp values coming from backend into usable input format.

  //Mocked Time stamp in milliseconds
  //Here i am using the new Date().getTime() as a placeholder for the timestamp
  //that backend will serve us.
  // I did so because the timestamp would be on the same format.
  const mockedDateTimestamp = new Date().getTime()

  // initialize new Date object
  var date_ob = new Date(mockedDateTimestamp)
  // year as 4 digits (YYYY)
  var year = date_ob.getFullYear()
  // month as 2 digits (MM)
  var month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
  // date as 2 digits (DD)
  var date = ("0" + date_ob.getDate()).slice(-2)

  const dateString = `${year}-${month}-${date}`
  console.log(dateString)

  return {
    email: mockedUser.email,
    firstName: mockedUser.name.first,
    lastName: mockedUser.name.last,
    profession: `random profession${pin}`,
    birthDate: dateString
    //birthDate: "1994-05-25"  ---> working date format
  }
}
