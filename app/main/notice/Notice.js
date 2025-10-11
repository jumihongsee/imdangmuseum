"use client";
import "./notice.scss";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Notice() {
  const [data, setData] = useState();
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  useEffect(() => {
    fetch("/data/notice.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1200) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlide = 4; //슬라이드 총 계
  const slidepage = totalSlide / slidesToShow;

  const settings = {
    arrows: false,
    infinite: true,
    dots: false,
    autoplay: false,
    speed: 300,
    slidesToShow,
    slidesToScroll: slidesToShow,
    beforeChange: (current, next) => setCurrent(next),
  };

  return (
    <section id="exhibition-notice">
      <div className="notice-cont">
        <div className="main-board">
          <div className="notice">
            <div className="list-head">
              <h2>공지사항</h2>
              <a
                href={"/contents/board"}
                className="btn-more"
                title="공지사항 더보기"
              >
                더보기
              </a>
            </div>
            <div className="list-cont">
              <ul>
                {data?.map((item, index) =>
                  index < 3 ? (
                    <li key={index}>
                      <a href={`/contents/board/${item.id}`}>
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
            <Slider ref={sliderRef} {...settings}>
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
                  alt="2025년 생생 국가유산 사업 도전! 압독문화탐방대"
                />
              </div>
              <div>
                <img src="/img/main/notice-4.jpg" alt="임당 고고 아카데미" />
              </div>
            </Slider>

            <div className="slider-control">
              <div className="slider-pagination">
                <span>
                  0
                  {slidesToShow > 1
                    ? Math.ceil((current + 1) / slidesToShow) // 두 장씩 보여줄 때
                    : current + 1}
                </span>
                / <span>{slidesToShow > 1 ? "02" : "04"}</span>
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
