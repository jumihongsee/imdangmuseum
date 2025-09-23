"use client";

import "./childExperience.scss";
import { useEffect, useState } from "react";

export default function ChildExperience() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/data/childExperience.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <div id="child-experience">
      <div className="map-cont">
        <div className="pin-box">
          {data?.map((item, index) => (
            <span className={`map-pin pin-${index + 1}`} key={index}>
              <a
                className="target"
                title={`${item.title} 로 내용으로 이동`}
                href={`#exp-cont-${index + 1}`}
              >
                <strong>{index + 1}</strong>
              </a>
            </span>
          ))}
          <span className="img-map">
            <img
              src="/img/contents/child_exp_map.jpg"
              alt="어린이체험실 전시도 : 입구로 들어가면 좌측에 1번 영유아 놀이방이 위치해 있고 입구 정면쪽에 2번 비밀을 찾아라! 신성한 음식이 위치해 있으며 2번 오른쪽에 3번 무덤 속 숨겨진 음식들이 위치해 있고 3번 오른쪽에 4번 모래속 유물을 찾아라!가 위치해 있으며 4번 오른쪽에는 5번 고분고분 탐험대가 위치해 있습니다."
            ></img>
          </span>
        </div>
        <div className="guide-box">
          <div className="left-info">
            <dl>
              <dt>
                <img src="/img/contents/icon_clock_k.png" alt="" /> 이용시간
              </dt>
              <dd>09:00~18:00</dd>
            </dl>
          </div>
          <div className="right-schedule">
            <h4>회차안내</h4>
            <ul>
              <li>
                <strong>1회차</strong>09:00~09:50
              </li>
              <li>
                <strong>2회차</strong>10:00~10:50
              </li>
              <li>
                <strong>3회차</strong>11:00~11:50
              </li>
              <li>
                <strong>4회차</strong>13:00~13:50
              </li>
              <li>
                <strong>5회차</strong>14:00~14:50
              </li>
              <li>
                <strong>6회차</strong>15:00~15:50
              </li>
              <li>
                <strong>7회차</strong>16:00~16:50
              </li>
            </ul>
            <div className="btn-reserv">
              <a href="https://booking.naver.com/booking/6/bizes/1421512">
                어린이 박물관 예약하기
              </a>
            </div>
          </div>
        </div>
        <div className="detail-cont">
          <ol>
            {data?.map((item, index) => (
              <li id={`exp-cont-${index + 1}`} key={index}>
                <div className="detail-info">
                  <h4>
                    <span className="exp-num">{index + 1}</span>
                    {item.title}
                  </h4>
                  <p>{item.script}</p>
                </div>
                <div className="detail-img">
                  <img
                    src={`/img/contents/child_slide_img_0${index + 1}.png`}
                    alt={`${item.title} 사진`}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
