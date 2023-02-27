import React from 'react';

const Aunt = (props) => {
    const {house} = props
    return (
        <div>
             <h2>Aunt</h2>
             <small>House:{house}</small>
        </div>
    );
};

export default Aunt;