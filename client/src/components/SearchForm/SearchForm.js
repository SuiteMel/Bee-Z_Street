import React from "react";
import "./SearchForm.css";
import {Row, Input} from "react-materialize";

const SearchForm = props => (
  <form id="searchForm" className="row" onSubmit={props.onSubmit}>
    <div className="input-field search-wrapper col s12">
      <input id="autocomplete-input" className="autocomplete col s9" placeholder="Search" {...props} />
      <div className="col s3">
        <a className="btn"><i className="material-icons" onClick={props.onClick}>search</i></a>
      </div>
    </div>

    <Row>
      <Input s={12} type="select" label="Select Soil Type" defaultValue="" value={props.value}>
        <option value="" >Choose your soil</option>
        <option value="clay">Clay</option>
        <option value="loam">Loam</option>
        <option value="sand">sand</option>
      </Input>
    </Row>

  </form>
);

export default SearchForm;