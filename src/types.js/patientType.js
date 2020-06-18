import React from 'react';
import PropTypes from 'prop-types';

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