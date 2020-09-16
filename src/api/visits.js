import { sleep } from "../utils"

export async function getProfessionalVisits(key, { id, pageSize, pageIndex }) {
  // const response = await fetch(
  //   "https://api.github.com/repos/tannerlinsley/react-query"
  // )
  // return response.json()
  console.log("fetching visits for:", id)
  await sleep(2000)
  return {
    total: mockVisitData.total,
    pageIndex,
    pageSize,
    data: mockVisitData.data.slice(
      pageIndex * pageSize,
      Math.min(mockVisitData.data.length, pageIndex * pageSize + pageSize)
    )
  }
}

export const mockVisitData = {
  total: 10,
  data: [
    {
      id: 1,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 14:45",
      patient: "Mary White_1"
    },
    {
      id: 2,
      date: "12/3/2020",
      startTime: "1990-12-01 13:25",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_2"
    },
    {
      id: 3,
      date: "12/3/2020",
      startTime: "1990-12-01 09:00",
      endTime: "1990-12-01 11:00",
      patient: "Mary White_3"
    },
    {
      id: 4,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_4"
    },
    {
      id: 5,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_5"
    },
    {
      id: 6,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_6"
    },
    {
      id: 7,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_7"
    },
    {
      id: 8,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_8"
    },
    {
      id: 9,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_9"
    },
    {
      id: 10,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_10"
    }
  ]
}
