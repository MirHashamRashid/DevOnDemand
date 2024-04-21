import { ErrorMessage, Field } from "formik";
import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
export default ({ title, name, type = "text", placeholder }) => {
   return (
     <div>
       <label htmlFor={name}>{title}</label>
       <Field
         name={name}
        >
         {({ form, field }) => {
           const { setFieldValue } = form;
           const { value } = field;
           return (
             
             <DateView
               id={name}
               selected={value}
               onChange={(val) => setFieldValue(name, val)}
               placeholderText={placeholder}
               className="text-black border-gray-300 self-center items-center justify-center focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 mb-1 w-full"
               isClearable
             />
           );
         }}
       </Field>
       <ErrorMessage
         name={name}
         component="span"
         className="text-red-500 text-xs italic"
       />
     </div>
   );
};


 