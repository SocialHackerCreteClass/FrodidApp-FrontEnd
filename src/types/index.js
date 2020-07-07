import PropTypes from "prop-types"

export const UserType = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  birthDate: PropTypes.number.isRequired,
  createdDate: PropTypes.number.isRequired,
  afm: PropTypes.number.isRequired,
  amka: PropTypes.number.isRequired,
  role: PropTypes.oneOf(["admin", "professional"]).isRequired,
  profession: PropTypes.oneOf([
    "Nurse",
    "Social Worker",
    "Psychologist",
    "Family Helper",
    "Physiotherapist",
    "Doctor"
  ]).isRequired,
  image: PropTypes.string
})

export const PatientType = PropTypes.shape({
  id: PropTypes.number,
  firsName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  birthDate: PropTypes.number.isRequired,
  telephone: PropTypes.number,
  mobile: PropTypes.number,
  amka: PropTypes.number.isRequired,
  afm: PropTypes.number.isRequired,
  comments: PropTypes.string,
  gender: PropTypes.oneOf(["male", "female", "other"]),
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    streetNumber: PropTypes.string,
    region: PropTypes.string.isRequired,
    zipCode: PropTypes.string,
    country: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  })
})

export const VisitType = PropTypes.shape({
  id: PropTypes.number,
  date: PropTypes.number.isRequired,
  comment: PropTypes.string,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  user: UserType,
  patient: PatientType
})
