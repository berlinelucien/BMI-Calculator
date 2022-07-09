import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ weight, height, id, date, bmi, deleteCard }) => {
    const handleDelete = () => {
        deleteCard(id);
    };

    return (
        <div className='col m6 s12'>
            
        </div>
    )
}