import React from 'react';
import Special from '../Special/Special';

const MySelf = (props) => {
    const {house,ornaments} = props
    return (
        <div>
            <h2>My Self</h2>
            <small>House:{house}</small>
            <Special ornaments={ornaments}> </Special>
        </div>
    );
};

export default MySelf;