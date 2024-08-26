import React, { useState, useRef, useEffect } from 'react';
import './DropdownToggle.css';

const DropdownToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('검색 옵션');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown-toggle" ref={dropdownRef}>
            <button className="dropdown-button" onClick={toggleDropdown}>
                {selectedOption}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li onClick={() => handleOptionClick('리뷰 좋은순')}>리뷰 좋은순</li>
                    <li onClick={() => handleOptionClick('리뷰 많은순')}>리뷰 많은순</li>
                    <li onClick={() => handleOptionClick('낮은 가격순')}>낮은 가격순</li>
                    <li onClick={() => handleOptionClick('높은 가격순')}>높은 가격순</li>
                </ul>
            )}
        </div>
    );
};

export default DropdownToggle;