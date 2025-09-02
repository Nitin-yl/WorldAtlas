import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleRegionName = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="section-searchFilter container">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search country..."
        value={search}
        onChange={handleInputChange}
      />

      {/* Sort Buttons */}
      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>
      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>

      {/* Filter Dropdown */}
      <div className="!border-white" >
        <select
          className="select-section"
          value={filter}
          onChange={handleRegionName}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
