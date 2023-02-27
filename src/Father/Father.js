import React from 'react';
import Brother from '../Components/Brother/Brother';
import MySelf from '../Components/MySelf/MySelf';
import Sister from '../Components/Sister/Sister';

const Father = (props) => {
    const {house,ornaments} = props
    return (
        <div>
            <h2>Father</h2>
            <p>House: {house}</p>
            <div style={{display:'flex'}}>
                
                <MySelf house={house} ornaments={ornaments}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;