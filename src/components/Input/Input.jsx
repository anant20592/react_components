import React from 'react';

const Input = ({ label, type, inputClasses, labelClasses, ...props }) => {
  const [value, setValue] = React.useState('');
  const handleChange = (e) => { 
    setValue(e.target.value); 
    if (props.onChange) props.onChange(e);
  };
  return (
    <div className="flex flex-col">
      {label && <label className={`mb-2 ${labelClasses}`} htmlFor={label}>{label}</label>}
      <input 
        className={`p-2 border rounded ${inputClasses}`} 
        value={value} 
        type={type}
        name={label}
        onChange={handleChange}
        {...props} 
      />
    </div>
  );
};

export default Input;