import React from "react";

const Button = ({ text, isBtnClick, manageClick }) => {
  return (
    <div>
      <button
        className={isBtnClick ? "btn-click" : "btn-reset"}
        onClick={manageClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
