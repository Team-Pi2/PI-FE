// FilterButtons.js
import React from 'react';
import './FilterButtons.css';

const FilterButtons = ({ filters, selectedFilter, setSelectedFilter }) => {
    const handleFilterClick = (filter) => {
        if (selectedFilter === filter) {
            setSelectedFilter(''); 
        } else {
            setSelectedFilter(filter); 
        }
    };

    return (
        <div className="filter-buttons">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
                    onClick={() => handleFilterClick(filter)}
                >
                    {selectedFilter === filter && <span className="checkmark">✔</span>}
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;