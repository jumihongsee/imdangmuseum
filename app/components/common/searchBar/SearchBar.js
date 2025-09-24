"use client";

import "./searchBar.scss";
import { useEffect, useState } from "react";

export default function SeartchBar() {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("전체");
  const [selectedVal, setSelectedVal] = useState("all");

  const handleSelect = (value, title) => {
    setSelectedVal(value);
    setSelectedTitle(title);
  };

  return (
    <div className="search-bar">
      <form action="" id="search" name="search" method="get">
        <fieldset>
          <legend>게시물 검색</legend>
          <div className="brd-search">
            <div className="select-wrap">
              <select
                // name=""
                // id=""
                value={selectedVal}
                onChange={(e) => setSelectedVal(e.target.value)}
              >
                <option value="">전체</option>
                <option value="collectionnm">전시명칭</option>
                <option value="content">내용</option>
              </select>
              <div className="visual-select">
                <div className="left-select-box">
                  <a
                    href="#"
                    className="select-title"
                    title="검색구분 선택 열기"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectOpen((prev) => !prev);
                    }}
                  >
                    <span>{selectedTitle}</span>
                    <div className="arrow"></div>
                  </a>

                  <ul className={selectOpen ? "active" : ""}>
                    <li className="option">
                      <a
                        href="#"
                        className={`${selectedVal === "all" ? "selected" : ""}`}
                        title="선택됨"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("all", "전체");
                          setSelectOpen(false);
                        }}
                      >
                        전체
                      </a>
                    </li>
                    <li className="option">
                      <a
                        href="#"
                        className={`${selectedVal === "collectionnm" ? "selected" : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("collectionnm", "전시명칭");
                          setSelectOpen(false);
                        }}
                      >
                        전시명칭
                      </a>
                    </li>
                    <li className="option">
                      <a
                        href="#"
                        className={`${selectedVal === "content" ? "selected" : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("content", "내용");
                          setSelectOpen(false);
                        }}
                      >
                        내용
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="input-search">
                  <input
                    // id=""
                    // name=""
                    className="board-input"
                    title="검색어를 입력하세요"
                    placeholder="검색어를 입력하세요"
                    type="text"
                  ></input>
                  <button type="submit">검색</button>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
