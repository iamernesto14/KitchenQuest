import React from "react";

function Button({ name, className }) {
  return (
    <button
      className={`p-2 w-full rounded text-main-100 ${className}`}
    >
      {name}
    </button>
  );
}

export default Button;
