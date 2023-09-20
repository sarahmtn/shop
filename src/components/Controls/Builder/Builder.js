import React from "react";
import "./Builder.css";

const Builder = (props) => {
  return (
    <div className="builder">
      <button onClick={props.remove}>حذف</button>
      <button onClick={props.add}>اضافه</button>
      <div className="mahsolat">{props.title}</div>
    </div>
  );
};
export default Builder;
