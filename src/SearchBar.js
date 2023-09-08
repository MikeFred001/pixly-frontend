import { useState } from "react";
import "./SearchBar.css";

/** Renders search bar
 *
 * Props:
 *  - filterList(): callback function to JobList and CompanyList
 *
 * State:
 *  - formData like { searchTerm }
 *  -- searchTerm is key and always a string
 *
 * Home -> SearchBar */

function SearchBar({ images }) {
  const [formData, setFormData] = useState({ searchTerm: "" });

  console.log("FORM DATA", formData);

  /** Handles updating search form when user types */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Handles sending search term to callback function */
  function handleSubmit(evt) {
    evt.preventDefault();

    // if no search term is provided, don't search again
    if (formData.searchTerm.length > 0) filterList(formData.searchTerm);

    setFormData({ searchTerm: "" });
  }

  return (
    <div className="SearchBar">
      <form className="SearchBar-form" onSubmit={ handleSubmit }>
        <label htmlFor="searchTerm"></label>
        <input className="SearchBar-input"
          id="searchTerm"
          name="searchTerm"
          value={ formData.searchTerm }
          onChange={ handleChange }
          placeholder="Enter search term ..."
        />
        <button className="SearchBar-btn">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;