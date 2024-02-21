import React from "react";

const Commonbutton = ({ _function, _content, _class, _disabled }) => {
  return (
    <button disabled={_disabled} onClick={_function} className={_class}>
      {_content}
    </button>
  );
};

export default Commonbutton;