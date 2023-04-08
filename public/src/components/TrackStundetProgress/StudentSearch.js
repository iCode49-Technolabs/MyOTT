import React from "react";

export const StudentSearch = ({search,setSearch}) => {
 
    return (
      <div className="student-search">
      <p>Student Search </p>
      
      <input
          className="search-input"
          value={search}
              onChange={e => setSearch(e.target.value)}
          placeholder="Search"
          
        />
      
      
    </div>
    );
  };