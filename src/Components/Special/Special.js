import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = (props) => {
    const {ornaments} = props;
    const abc =useContext(RingContext);
    console.log(abc)
    return (
        
        <div>
            <h2>Special</h2><br></br>
            <small>{ornaments}{abc}</small>
        </div>
    );
};

export default Special;