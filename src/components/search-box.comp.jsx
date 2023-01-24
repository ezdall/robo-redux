import React from 'react';

export default function SearchBox({ searchField, onSearchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest"
        type="search"
        name="search"
        placeholder="type to search"
        onChange={onSearchChange}
        value={searchField}
      />
    </div>
  );
}
