import React from "react";

const Input = ({ data, setData, type, min, max }) => {
  return (
    <>
      <input
        type={type}
        value={data}
        onChange={(e) => setData(e.target.value)}
        onBlur={(e) => setData(e.target.value)}
        min={min}
        max={max}
      />
    </>
  );
};

export default Input;