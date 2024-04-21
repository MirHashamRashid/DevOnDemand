import { ErrorMessage } from "formik";
import React from "react";

const Dropdown = ({
  title,
  name,
  placeholder,
  options = [],
  setFieldValue,
  onChange
 }) => {
  return (
    <div className="tw-mb-4" >
      <label className="tw-block tw-font-medium tw-text-sm tw-text-gray-700">{title}</label>
      <div className="tw-w-full">
        <select
          onChange={(e) =>
            onChange ? onChange(e) :
            e.target.value === "placeholder-option"
              ? setFieldValue(name, "")
              : setFieldValue(name, e.target.value)
          }
          className="tw-p-2 tw-border tw-border-gray-300 focus:tw-border-indigo-300 focus:tw-ring 
          focus:tw-ring-indigo-200 focus:tw-ring-opacity-50 tw-text-gray-700 tw-rounded-md tw-shadow-sm tw-block 
          tw-w-full"
          aria-label="Default select example"
          
          defaultValue={"placeholder-option"}
          
        >
          <option value={"placeholder-option"}>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
       
      </div>
      <ErrorMessage
        name={name}
        component="span"
        className="tw-text-red-500 tw-text-xs tw-italic"
      />
    </div>
  );
};

export default Dropdown;
