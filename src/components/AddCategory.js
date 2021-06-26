import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [addCategory, setaddCategory] = useState(" ");
  const HandleValue = (e) => {
    setaddCategory(e.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (addCategory.trim().length > 2) {
      setCategories((cats) => [addCategory,...cats]);
      setaddCategory('');
    }
  };
  return (
    <form onSubmit={HandleSubmit}>
      <input type="text" value={addCategory} onChange={HandleValue} />
    </form>
  );
};

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired,
}
