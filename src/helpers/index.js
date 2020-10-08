import React from "react";

export const renderFormInput = (field) => {
  return (
    <>
      <label className={`${field.className}__form-label`}>
        {field.label}
        <input
          type={field.type}
          {...field.input}
          className={`${field.className}__form-input`}
          autoComplete="off"
        />
      </label>
      {field.meta.touched ? (
        <p className={`${field.className}__error`}>{field.meta.error}</p>
      ) : null}
    </>
  );
};

export const handleVisibility = (visibility) => {
  if (visibility === "HIDE") {
    return { transform: "translateY(100vh)", visibility: "hidden" };
  } else {
    return { transform: "translateY(0)" };
  }
};
