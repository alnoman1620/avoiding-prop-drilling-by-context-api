import React from 'react';

const Sister = (props) => {
    const {house} = props
    return (
        <div>
            <h2>Sister</h2>
            <small>House:{house}</small>
        </div>
    );
};

export default Sister;