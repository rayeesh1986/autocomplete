import React from "react";
const Search = ({ onChange, searchdata, onKeyUp }) => {
  return (
    <form>
      <div className="form-group">
        <label>Search Panel</label>
        <input
          type="text"
          name="searchdata"
          value={searchdata}
          placeholder="Search Here"
          onChange={onChange}
          onKeyUp={onKeyUp}
          autoComplete="off"
          className="form-control"
        />
      </div>
      {/*  <button type="submit" className="btn btn-primary">
        Submit
      </button> */}
    </form>
  );
};

export default Search;
