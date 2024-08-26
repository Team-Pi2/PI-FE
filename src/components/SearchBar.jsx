import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.css';
import searchIcon from '../assets/searchIcon.png'; // 이미지 파일을 임포트

function SearchBar({ onSearch }) {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => setKeyword(e.target.value);
    console.log(keyword);

    const getFilteredBook = () => {
        // 검색 결과를 처리하는 함수
        if (keyword.trim() !== '') {
            onSearch(keyword); // 부모 컴포넌트로 키워드 전달
        }
    };

    const onKeyUp = (e) => {
        if (e.key === 'Enter') {
            getFilteredBook();
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3em" }}>
            <div className="SearchBar">
                <input
                    className="SearchInput"
                    type="text"
                    value={keyword}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                />
                <button
                    className="SearchButton"
                    type="button"
                    onClick={getFilteredBook}
                    style={{ backgroundImage: `url(${searchIcon})` }}
                />
            </div>
        </div>
    );
};

export default SearchBar;