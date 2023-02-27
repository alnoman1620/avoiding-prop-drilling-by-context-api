import React from 'react';
import Father from '../../Father/Father';
import Aunt from '../Aunt/Aunt';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const{house, ornaments} = props
    return (
        <div>
            <h1>Grand Father</h1>
            <h5>House: {house}</h5>
           <div style={{display:'flex'}}>
           <Father house={house} ornaments={ornaments}></Father>
            <Uncle house={house}></Uncle>
            <Aunt house={house}></Aunt>
           </div>

        </div>
    );
};

export default GrandFather;