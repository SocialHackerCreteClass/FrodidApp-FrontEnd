import React from "react"
import Title from "./Title"
import Information from "./Information"
import Visitations from "./Visitations"
import { useQuery } from "react-query"
import { getProfessional } from "api/professionals"
import { useParams } from "react-router"

const Professional = () => {
  const { id } = useParams()
  const { isLoading, data } = useQuery(
    ["professionalData", id],
    getProfessional
  )

  if (isLoading) return "Loading..."

  return (
    <>
      <Title user={data} />
      <Information user={data} />
      <Visitations user={data} />
    </>
  )
}

export default Professional
