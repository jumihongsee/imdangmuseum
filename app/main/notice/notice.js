"use client";
import "./notice.scss";
import { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";

export default function Notice() {
  const [data, setData] = useState();
  const [current, setCurrent] = useState(0);

  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current?.next();
  };

  const prev = () => {
    carouselRef.current?.prev();
  };

  useEffect(() => {
    fetch("/data/notice.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section id="exhibition-notice">
      <div className="inr">
        <div className="main-board">
          <div className="notice">
            <div className="list-head">
              <h2>공지사항</h2>
              <a href="" className="btn-more" title="공지사항 더보기">
                더보기
              </a>
            </div>
            <div className="list-cont">
              <ul>
                {data?.map((item, index) =>
                  index < 3 ? (
                    <li key={index}>
                      <a href="">
                        <span className="list-noti">{item.category}</span>
                        <strong>{item.title}</strong>
                        <span className="list-desc">
                          <span className="list-desc-txt">{item.contents}</span>
                          <span className="btn-view">내용보기</span>
                        </span>
                        <span className="list-date">
                          <span className="list-date-txt">{item.date}</span>
                        </span>
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
          <div className="bnr">
            <Carousel
              arrows
              infinite={true}
              dots={false}
              ref={carouselRef}
              autoplay={false}
              speed={300}
              initialSlide={0}
              beforeChange={(current, next) => setCurrent(next)}
            >
              <div>
                <img src="/img/main/notice-3.jpg" alt="압독과 경산의 이음" />
              </div>
              <div>
                <img
                  src="/img/main/notice-1.jpg"
                  alt="임당 유적 코스놀이 참가자 모집"
                />
              </div>
              <div>
                <img
                  src="/img/main/notice-2.jpg"
                  alt="2025년 생생 국가유산 사업 도전! 압독문화탐방대 '기후변화 대응 프로그램' "
                />
              </div>
              <div>
                <img src="/img/main/notice-4.jpg" alt="임당 고고 아카데미" />
              </div>
            </Carousel>
            <div className="slider-control">
              <div className="slider-pagination">
                <span>0{current + 1}</span> / <span>04</span>
              </div>
              <div className="slider-arrow-wrapper">
                <button className="slider-prev" onClick={prev}>
                  <img
                    src="/img/main/notice_slide_left_arrow_icon.png"
                    alt="공지 슬라이드 이전버튼"
                  />
                </button>
                <button className="slider-next" onClick={next}>
                  <img
                    src="/img/main/notice_slide_right_arrow_icon.png"
                    alt="공지 슬라이드 다음버튼"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
