import { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
    //console.log("Submit hecho");
  };

  AddCategory.propTypes = {
    setCategories: PropTypes.any.isRequired,
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit"></button>
    </form>
  );
};

export default AddCategory;
