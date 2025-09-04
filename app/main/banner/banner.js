"use client";
import "./banner.scss";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";

export default function Banner() {
  const carouselRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState([]);

  // console.log(current)

  const sliderTotal = data.length;

  const next = () => {
    carouselRef.current?.next();
  };

  const prev = () => {
    carouselRef.current?.prev();
  };

  useEffect(() => {
    fetch("/data/banner.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div id="banner">
      <div className="scroll">
        <div className="scroll-bar"></div>
        <span>SCROLL DOWN</span>
      </div>
      <div className="visual-cont-wrap">
        <div className="visual-tit">
          <h1>임당유적전시관</h1>
          <h1>방문을 진심으로 환영합니다.</h1>
          <p>
            2천년 전 경산을 중심으로 한 압독국 사람들의 삶과 죽음을 한 곳에서 볼
            수 있는
          </p>
          <p>국내 유일의 복합유적 전시관, 임당유적전시관입니다.</p>
        </div>

        <div className="visual-control">
          <button className="slick-arrow slick-prev" onClick={prev}>
            <img src="/img/main/visual-prev.png" alt="이전 슬라이드" />
          </button>
          <div className="visual-pagination">
            <img
              src="/img/main/visual-roll.png"
              alt="IMDANG RELICS EXHIBITION HALL"
            />
            <div className="page-numburing">
              <span>
                <strong>{current + 1}</strong>
              </span>
              <span>/</span>
              <span>3</span>
            </div>
          </div>
          <button className="slick-arrow slick-next" onClick={next}>
            <img src="/img/main/visual-next.png" alt="다음 슬라이드" />
          </button>
        </div>
      </div>
      <Carousel
        arrows
        infinite={true}
        ref={carouselRef}
        dots={false}
        autoplay={false}
        initialSlide={0}
        beforeChange={(current, next) => setCurrent(next)}
      >
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img className="banner-image" src={item.src} alt={item.alt} />
            </div>
          );
        })}
      </Carousel>
      <div className="exhibition-info">
        <div className="inr">
          <dl>
            <dt className="info_1">이용시간</dt>
            <dd>09:00~18:00</dd>
            <dt className="info_2">관람문의</dt>
            <dd>053.804.7337</dd>
            <dt className="info_3">휴관일</dt>
            <dd>매주 월요일. 1월1일, 설·추석 당일</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
