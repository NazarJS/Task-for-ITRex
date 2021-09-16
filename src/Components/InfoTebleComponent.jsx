import React from 'react';
import './table.css';
function InfoTableComponent(props) {

    // Component show content bellow the table
    return (
        <div className='infoTable'>
            <p>Selected profile: {props.row.firstName}</p>
            <p>Description: {props.row.description}</p>
            <p>Addres: {props.row.adress.streetAddress}</p>
            <p>City: {props.row.adress.city}</p>
            <p>state: {props.row.adress.state}</p>
            <p>index: {props.row.id}</p>
        </div>
    );
}

export default InfoTableComponent;
