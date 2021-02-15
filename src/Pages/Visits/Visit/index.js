import React from "react"
import { useQuery } from "react-query"
// import { useI18n } from "providers/I18n"
import Information from "components/Information"
import { useParams } from "react-router"
import { getVisitationDetails } from "api/visits"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import customParseFormat from "dayjs/plugin/customParseFormat"
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

Visit.propTypes = {}

function Visit() {
  // const { t } = useI18n()
  const { id } = useParams()
  const { isLoading, data } = useQuery(
    ["visitationDetails", id],
    getVisitationDetails
  )
  if (isLoading) return "Loading..."

  console.log(data)
  const duration = (startTime, endTime) => {
    let hour = dayjs(endTime).diff(startTime, "h")
    let minutes = dayjs(endTime).diff(startTime, "m") % 60
    let duration = `${hour}h ${minutes}min`

    return duration
  }

  const visitationInformation = [
    {
      name: "Patient",
      value: data.patient
    },
    {
      name: "Address",
      value: data.address
    },
    {
      name: "Duration",
      value: `${duration(data.startTime, data.endTime)}`
    },
    {
      name: "Professional",
      value: data.professional
    }
  ]

  return (
    <>
      <Information
        info={visitationInformation}
        h2Title={"Visitation Details"}
        h3Title={"Information"}
        additional={false}
      />
    </>
  )
}

export default Visit
