"use client";
import { useState } from "react";
import "./footer.scss";

export default function Footer() {
  const [isActive, setIsActive] = useState(false);

  const familyHandleToggle = (prev) => {
    setIsActive((prev) => !prev);
  };

  return (
    <footer id="footer">
      <div className="inr">
        <div className="footer-cont">
          <div className="footer-left">
            <strong>
              <img src="/img/main/footer_logo.png" alt="임당유적전시관" />
            </strong>
            <address>
              <span>주소 : 경북 경산시 청운2로 29</span>
              <span>전화 : 053-804-7337</span>
              <span>팩스 : 053-802-8864</span>
            </address>
            <p className="copy">
              Copyright©2024 All rights reserved by 임당유적전시관.
            </p>
          </div>
          <div className="footer-right">
            <nav className="footer-menu">
              <ul>
                <li>
                  <a href="">전시관 소개</a>
                </li>
                <li>
                  <a href="">이용약관</a>
                </li>
                <li className="policy">
                  <a href="">개인정보처리방침</a>
                </li>
              </ul>
            </nav>
            <div className="family-site">
              <div className="drop-down">
                <div className={`drop-title ${isActive ? "active" : ""}`}>
                  <a
                    href="#none"
                    title="펼치기"
                    aria-expanded={isActive}
                    onClick={familyHandleToggle}
                  >
                    관련사이트 바로가기 열기
                  </a>
                </div>
                <ul className={`drop-sub ${isActive ? "active" : ""}`}>
                  <li>
                    <a
                      href="https://www.gbgs.go.kr/open_content/ko/index.do"
                      target="_blank"
                      title="새창으로 이동"
                    >
                      <span>경산시청</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://museum.gbgs.go.kr/main.do"
                      target="_blank"
                      title="새창으로 이동"
                    >
                      <span>경산시립박물관</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gbgs.go.kr/open_content/tour/index.do"
                      target="_blank"
                      title="새창으로 이동"
                    >
                      <span>경산시문화관광</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.museum.go.kr/site/main/home"
                      target="_blank"
                      title="새창으로 이동"
                    >
                      <span>국립중앙박물관</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.museum.go.kr/site/main/home"
                      target="_blank"
                      title="새창으로 이동"
                    >
                      <span>국가유산청</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.museum.go.kr/site/main/home"
                      target="_blank"
                      title="새창으로 이동"
                    >
                      <span>규장각한국학연구원</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://museum.or.kr/2014/"
                      target="_blank"
                      title="새창으로 이동"
                    >
                      <span>사단법인한국박물관협회</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wamark-img">
              <div className="footer-wamark">
                <a
                  href="http://www.wa.or.kr/board/list.asp?BoardID=0006"
                  target="_blank"
                  title="새창"
                >
                  <strong>
                    <img
                      src="/img/main/footer_waimg.png"
                      alt="(사)한국장애인단체총연합회 한국웹접근성인증평가원 웹 접근성 우수사이트 인증마크(WA인증마크)"
                    />
                  </strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
