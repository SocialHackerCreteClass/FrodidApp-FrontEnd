import { sleep } from "../utils"

// const URL=""

export async function getAllVisitations(key, { pageSize, pageIndex }) {
  // const data = await fetch(URL)
  // const response = await data.json()
  // return response

  await sleep(2000)

  return {
    total: mockVisitations.total,
    pageSize,
    pageIndex,
    data: mockVisitations.data.slice(
      pageSize * pageIndex,
      Math.min(mockVisitations.data.length, pageSize * pageIndex + pageSize)
    )
  }
}

export const mockVisitations = {
  total: 23,
  data: [
    {
      id: 1,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 14:45",
      patient: "Mary White_1"
    },
    {
      id: 2,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:25",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_2"
    },
    {
      id: 3,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 09:00",
      endTime: "1990-12-01 11:00",
      patient: "Mary White_3"
    },
    {
      id: 4,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_4"
    },
    {
      id: 5,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_5"
    },
    {
      id: 6,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_6"
    },
    {
      id: 7,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_7"
    },
    {
      id: 8,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_8"
    },
    {
      id: 9,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_9"
    },
    {
      id: 10,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_10"
    },
    {
      id: 11,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 14:45",
      patient: "Mary White_11"
    },
    {
      id: 12,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:25",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_12"
    },
    {
      id: 13,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 09:00",
      endTime: "1990-12-01 11:00",
      patient: "Mary White_13"
    },
    {
      id: 14,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_14"
    },
    {
      id: 15,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_15"
    },
    {
      id: 16,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_16"
    },
    {
      id: 17,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_17"
    },
    {
      id: 18,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_18"
    },
    {
      id: 19,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_19"
    },
    {
      id: 20,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_20"
    },
    {
      id: 21,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_21"
    },
    {
      id: 22,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_22"
    },
    {
      id: 23,
      user: "John Doe",
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White_23"
    }
  ]
}
