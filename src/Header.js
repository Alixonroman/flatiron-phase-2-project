//header component
import React from "react";
import Search from "./search";

function Header({ filterData }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          𓅓 The Ave
        </span>
      </h1>
      <Search filterData={filterData} />
    </header>
  );
}
export default Header;
