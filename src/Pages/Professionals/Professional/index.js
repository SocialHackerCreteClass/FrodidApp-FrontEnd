import React from "react"
import Title from "./Title"
import Information from "components/Information"
import Visitations from "./Visitations"
import { useQuery } from "react-query"
import { getProfessional } from "api/professionals"
import { useParams } from "react-router"
import { useI18n } from "providers/I18n"

const Professional = () => {
  const { t } = useI18n()
  const { id } = useParams()
  const { isLoading, data } = useQuery(
    ["professionalData", id],
    getProfessional
  )

  if (isLoading) return "Loading..."

  const personalInfo = [
    {
      name: t("int.dateOfBirth"),
      value: data.birthDate
    },
    {
      name: t("int.profession"),
      value: data.profession
    },
    {
      name: t("int.contactNumber"),
      value: "6954823581"
    }
  ]

  const additionalInfo = [
    {
      name: t("int.registered"),
      value: data.createdDate
    },
    {
      name: t("int.status"),
      value: "Active"
    }
  ]

  return (
    <>
      <Title user={data} />
      <Information
        user={data}
        info={personalInfo}
        h2Title={`${t("int.information")}`}
        additional={true}
        h3Title={`${t("int.personal_information")}`}
        additionalInfo={additionalInfo}
      />
      <Visitations user={data} />
    </>
  )
}

export default Professional
