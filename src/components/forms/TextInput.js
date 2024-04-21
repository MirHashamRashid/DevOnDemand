import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";

const TextInput = ({ title, name, type = "text", placeholder, onChange }) => {
  const {handleChange, values } = useFormikContext()
  return (
    <div className="tw-mb-4">
      <label
        htmlFor={`${title}`}
        className="tw-block tw-mb-1 tw-font-medium tw-text-sm tw-text-gray-700"
      >
        {title}
      </label>
      <input
        id={`${title}`}
        name={name}
        type={type}
        value={values[name]}
        className="tw-p-2 tw-border tw-w-full tw-border-gray-300 focus:tw-border-indigo-300 focus:tw-ring 
                   focus:tw-ring-indigo-200 focus:tw-ring-opacity-50 tw-rounded-md tw-shadow-sm tw-block 
                   tw-w-full"
        placeholder={placeholder}
        onChange={onChange ? onChange : handleChange(name)}  
      
      />
      <ErrorMessage
        name={name}
        component="span"
        className="tw-text-red-500 tw-text-xs tw-italic"
      />
    </div>
  );
};

export default TextInput;
