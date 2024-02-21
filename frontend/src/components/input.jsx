import React from "react";

export const CustomInput = ({
  _type,
  _placeholder,
  _function,
  _value,
  _ischeckBox,
  _class,
}) => {
  return (
    <input
      type={_type}
      value={_value}
      placeholder={_placeholder}
      onChange={_function}
      className={_class}
      checked={_ischeckBox}
    />
  );
};

export default CustomInput;