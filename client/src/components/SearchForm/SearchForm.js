import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <form id="searchForm row">
    <div className="input-field search-wrapper">
      <input id="autocomplete-input" className="autocomplete col s9" placeholder="Search" {...props} />
      <div className="col s3">
        <a className="btn"><i className="material-icons" onClick={props.onClick}>search</i></a>
      </div>
    </div>



  </form>
);

export default SearchForm;