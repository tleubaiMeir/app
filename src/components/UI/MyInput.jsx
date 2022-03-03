import React from 'react';
import '../../styles/MyInput.css'

const MyInput = ({id,type,value,onChange}
    ) => {
    return (
        <input id={id} type={type} value={value} onChange={e => onChange(e.target.value)} />
    );
};

export default MyInput;