import React from 'react';

const TextField = props => {
    const { value, label, id, name, handleChange } = props;

    return (
        <div className="text-field">
            <label htmlFor={id}>{label}</label><br/>
            <input 
                type="text"
                value={value}
                name={name}
                id={id}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextField;