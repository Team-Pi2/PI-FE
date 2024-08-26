import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ChatSearchBar.css';
import searchIcon from '../../assets/searchIcon.png'; // 이미지 파일을 임포트

function ChatSearchBar() {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => setKeyword(e.target.value);
    const [book, setBook] = useState([]);
    console.log(keyword);

    const getFilteredBook = async () => {
        // 검색 결과를 처리하는 함수
        console.log("검색 결과");
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
                    placeholder="채팅방 주제를 입력해주세요."
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

export default ChatSearchBar;