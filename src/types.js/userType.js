import React from 'react';
import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    birthDate: PropTypes.number.isRequired,
    createdDate: PropTypes.number.isRequired,
    afm: PropTypes.number.isRequired,
    amka: PropTypes.number.isRequired,
    role: PropTypes.oneOf(["admin", "professional"]).isRequired,
    profession: PropTypes.oneOf(["Nurse", "Social Worker", "Psychologist", "Family Helper", "Physiotherapist", "Doctor"]).isRequired,
    image: PropTypes.string
})

   
