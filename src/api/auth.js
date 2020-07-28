export const getUserData = async () => {
  console.log("function running")
  const response = await fetch(`https://randomuser.me/api/`)
  const data = await response.json()
  console.log(data.results[0])
  return data.results[0]
}
