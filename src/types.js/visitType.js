import React from 'react';
import PropTypes from 'prop-types';
import { UserType } from './userType';
import { PatientType} from './patientType';

export const VisitType = PropTypes.shape({
    // id: PropTypes.number,
    date: PropTypes.number.isRequired,
    comment: PropTypes.string,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    userID: UserType.id.PropTypes.number,
    patientID: PatientType.id.PropTypes.number
})