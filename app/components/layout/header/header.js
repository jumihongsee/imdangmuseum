"use client";

import "./header.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu } from "antd";

export default function Header({ isFixed }) {
  const [mainOpen, mainSetOpen] = useState(false);
  const [moOpen, moSetOpen] = useState(false);
  const [moSubOpen, moSetSubOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const router = useRouter();
  const items = [
    {
      key: "sub-main-menu-1",
      label: "전시관 소개",
      children: [
        { key: "/contents/greeting", label: "인사말" },
        { key: "/contents/organization", label: "조직" },
        { key: "/contents/history", label: "연혁" },
      ],
    },
    {
      key: "sub-main-menu-2",
      label: "이용안내",
      children: [
        { key: "/contents/viewInfo", label: "관람안내" },
        { key: "/contents/facilitiesInfo", label: "시설안내" },
      ],
    },
    {
      key: "sub-main-menu-3",
      label: "전시",
      children: [
        { key: "/contents/permanentExhibit", label: "상설전시" },
        { key: "/contents/childExperience", label: "어린이 체험실" },
      ],
    },
    {
      key: "sub-main-menu-4",
      label: "정보마당",
      children: [
        { key: "/contents/collection", label: "소장품" },
        { key: "/contents/relicDonation", label: "유물기증" },
        { key: "/contents/scholarship", label: "학술자료" },
      ],
    },
    {
      key: "sub-main-menu-5",
      label: "소식/참여",
      children: [
        { key: "/contents/board", label: "공지사항" },
        { key: "/contents/qna", label: "자주하는 질문" },
      ],
    },
  ];

  const moHandleToggle = (prev) => {
    moSetOpen((prev) => !prev);
  };

  const moSubHandleToggle = (prev) => {
    moSetSubOpen((prev) => !prev);
  };

  // console.log(isFixed);

  return (
    <header id="header" className={`header ${isFixed ? "fixed" : ""}`}>
      <div className="logo">
        <a href="/" title="임당유적전시관 메인으로">
          임당유적전시관
        </a>
      </div>
      <nav
        className="gnb"
        onMouseEnter={() => mainSetOpen(true)}
        onMouseLeave={() => mainSetOpen(false)}
        onFocus={(e) => {
          mainSetOpen(true);
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            mainSetOpen(false);
          }
        }}
      >
        <div className="gnb-menu">
          <ul>
            <li>
              <a
                href=""
                aria-haspopup="true"
                aria-expanded={mainOpen ? "true" : "false"}
              >
                <span>전시관 소개</span>
              </a>
              <div className={`gnb-sub ${mainOpen ? "active" : ""}`}>
                <ul>
                  <li>
                    <Link href="/contents/greeting">인사말</Link>
                  </li>
                  <li>
                    <Link href="/contents/organization">조직</Link>
                  </li>
                  <li>
                    <Link href="/contents/history">연혁</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href=""
                aria-haspopup="true"
                aria-expanded={mainOpen ? "true" : "false"}
              >
                <span>이용안내</span>
              </a>
              <div className={`gnb-sub ${mainOpen ? "active" : ""}`}>
                <ul>
                  <li>
                    <Link href="/contents/viewInfo">관람안내</Link>
                  </li>
                  <li>
                    <Link href="/contents/facilitiesInfo">시설안내</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href=""
                aria-haspopup="true"
                aria-expanded={mainOpen ? "true" : "false"}
              >
                <span>전시</span>
              </a>
              <div className={`gnb-sub ${mainOpen ? "active" : ""}`}>
                <ul>
                  <li>
                    <Link href="/contents/permanentExhibit">상설전시</Link>
                  </li>
                  <li>
                    <Link href="/contents/childExperience">어린이 체험실</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href=""
                aria-haspopup="true"
                aria-expanded={mainOpen ? "true" : "false"}
              >
                <span>정보마당</span>
              </a>
              <div className={`gnb-sub ${mainOpen ? "active" : ""}`}>
                <ul>
                  <li>
                    <Link href="/contents/collection">소장품</Link>
                  </li>
                  <li>
                    <Link href="/contents/relicDonation">유물기증</Link>
                  </li>
                  <li>
                    <Link href="/contents/scholarship">학술자료</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href=""
                aria-haspopup="true"
                aria-expanded={mainOpen ? "true" : "false"}
              >
                <span>소식/참여</span>
              </a>
              <div className={`gnb-sub ${mainOpen ? "active" : ""}`}>
                <ul>
                  <li>
                    <Link href="/contents/board">공지사항</Link>
                  </li>
                  <li>
                    <Link href="/contents/qna">자주하는 질문</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={`gnb-back ${mainOpen ? "active" : ""}`}></div>
      </nav>
      <div className="top-util">
        <ul>
          <li className="util-menu-1">
            <a
              href="https://www.grandculture.net/gyeongsan"
              target="_blank"
              title="새창으로 이동 디지털경산문화대전"
            >
              디지털경산문화대전
            </a>
          </li>
          <li className="util-menu-2">
            <a href="/imdangmuseum/main/contents/location">오시는 길</a>
          </li>
        </ul>
      </div>
      <button
        className={`nav-toggle ${moOpen ? "active" : ""}`}
        title="전체메뉴 열기"
        onClick={moHandleToggle}
      >
        <div className="icon-menu">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </button>
      <div className={`menu-mo ${moOpen ? "active" : ""}`}>
        <div className="menu-mo-header">
          <div className="mo-logo">
            <a href="/" title="임당유적전시관 메인으로">
              임당유적전시관
            </a>
          </div>
          <div className="top-util">
            <ul>
              <li className="util-menu-1">
                <a
                  href="https://www.grandculture.net/gyeongsan"
                  target="_blank"
                  title="새창으로 이동 디지털경산문화대전"
                >
                  디지털경산문화대전
                </a>
              </li>
              <li className="util-menu-2">
                <a href="/imdangmuseum/main/contents/location">오시는 길</a>
              </li>
            </ul>
          </div>
        </div>
        <Menu
          mode="inline"
          items={items}
          openKeys={openKeys}
          onOpenChange={(keys) => setOpenKeys(keys)}
          onClick={({ key }) => {
            router.push(key); // 페이지 이동
            moSetOpen(false);
            setOpenKeys([]); // 모달 닫기 서브
          }}
        />
      </div>
      <div className={`menu-mo-back ${moOpen ? "active" : ""}`}></div>
    </header>
  );
}
