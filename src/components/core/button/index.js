import React from "react";

const Button = ({ text, variant, className }) => {
  return (
    <button
      className={`border border-primary flex items-center justify-center px-6 py-2 rounded-md ${
        variant === "primary"
          ? "text-primary hover:bg-primary hover:text-white"
          : "bg-primary text-white  hover:bg-white hover:text-primary"
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
