import React, { useState } from "react"
import { useParams } from "react-router"
import { queryCache, useMutation, useQuery } from "react-query"
import { getPatient, savePatient } from "api/patients"

Edit.propTypes = {}

function Edit() {
  const { id } = useParams()
  const isNew = !id
  const [formData, setFormData] = useState({})
  const { isLoading } = useQuery([`patient_${id}`, id], getPatient, {
    enabled: id,
    refetchOnWindowFocus: false,
    onSuccess: (user) => {
      setFormData(user)
    }
  })

  const [savePatientMutation] = useMutation(savePatient, {
    onSuccess: () => {
      queryCache.removeQueries("allPatientsData")
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await savePatientMutation(formData)
    } catch (e) {
      console.error(e)
    }
  }

  if (isLoading) return "Loading..."

  return (
    <div>
      <h1>{isNew ? "Creation of a patient" : "Edit of a patient"}</h1>
      <div>
        <label>First Name</label>
        <input
          value={formData.firstName || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              firstName: e.target.value
            })
          }
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          value={formData.lastName || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              lastName: e.target.value
            })
          }
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        {isNew ? "Create User" : "Update User"}
      </button>
    </div>
  )
}

export default Edit
