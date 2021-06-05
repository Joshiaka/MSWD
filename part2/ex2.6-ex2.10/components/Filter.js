import React from "react";

const Filter = ({ searchName, setSearchName }) => {
    return (
        <div>
            Search for name:
            <input
                value={searchName}
                onChange={(event) => setSearchName(event.target.value)}
            />
        </div>
    );
};

export default Filter;
