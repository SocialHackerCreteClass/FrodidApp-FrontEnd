import React from 'react';
import PropTypes from 'prop-types';

export const VisitType = PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.number.isRequired,
    comment: PropTypes.string,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired
})