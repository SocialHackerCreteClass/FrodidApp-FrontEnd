import PropTypes from "prop-types"

export const UserType = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  birthDate: PropTypes.number,
  createdDate: PropTypes.number,
  afm: PropTypes.number,
  amka: PropTypes.number,
  role: PropTypes.oneOf(["admin", "professional"]),
  profession: PropTypes.oneOf([
    "Nurse",
    "Social Worker",
    "Psychologist",
    "Family Helper",
    "Physiotherapist",
    "Doctor"
  ]),
  image: PropTypes.string
})

export const PatientType = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  birthDate: PropTypes.string,
  telephone: PropTypes.number,
  mobile: PropTypes.number,
  amka: PropTypes.number,
  afm: PropTypes.number,
  comments: PropTypes.string,
  gender: PropTypes.oneOf(["male", "female", "other"]),
  address: PropTypes.shape({
    street: PropTypes.string,
    streetNumber: PropTypes.string,
    region: PropTypes.string,
    zipCode: PropTypes.string,
    country: PropTypes.string,
    state: PropTypes.string
  })
})

export const VisitType = PropTypes.shape({
  id: PropTypes.number,
  date: PropTypes.string,
  comment: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  user: UserType,
  patient: PatientType
})
