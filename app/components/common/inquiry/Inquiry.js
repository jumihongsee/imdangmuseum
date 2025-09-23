"use client";
import "./inquiry.scss";
import { useState } from "react";

export default function Inquiry() {
  const [score, setScore] = useState("5");

  return (
    <>
      <div className="inquiry">
        <div className="inquiry-num">
          <h4>문의전화</h4>
          <p>
            <em>053-804-7337</em>
          </p>
        </div>
      </div>

      <div className="survey">
        <form action="" method="post">
          <fieldset>
            <legend>만족도 조사</legend>
            <div className="survey-head">
              <h4>만족도 조사</h4>
            </div>

            <div className="survey-cont">
              <p>이 페이지에서 제공하는 정보에 대하여 만족하시나요?</p>

              <div className="form-row">
                <div className="rdio-group">
                  {/* 라디오 버튼 반복 */}
                  <div className="rdo-btn">
                    <input
                      type="radio"
                      id="stsFactionScore0"
                      name="score"
                      value="5"
                      className="rdo"
                      checked={score === "5"}
                      onChange={(e) => setScore(e.target.value)}
                    />
                    <label htmlFor="stsFactionScore0">매우만족</label>
                  </div>

                  <div className="rdo-btn">
                    <input
                      type="radio"
                      id="stsFactionScore1"
                      name="score"
                      value="4"
                      className="rdo"
                      checked={score === "4"}
                      onChange={(e) => setScore(e.target.value)}
                    />
                    <label htmlFor="stsFactionScore1">만족</label>
                  </div>

                  <div className="rdo-btn">
                    <input
                      type="radio"
                      id="stsFactionScore2"
                      name="score"
                      value="3"
                      className="rdo"
                      checked={score === "3"}
                      onChange={(e) => setScore(e.target.value)}
                    />
                    <label htmlFor="stsFactionScore2">보통</label>
                  </div>

                  <div className="rdo-btn">
                    <input
                      type="radio"
                      id="stsFactionScore3"
                      name="score"
                      value="2"
                      className="rdo"
                      checked={score === "2"}
                      onChange={(e) => setScore(e.target.value)}
                    />
                    <label htmlFor="stsFactionScore3">불만족</label>
                  </div>

                  <div className="rdo-btn">
                    <input
                      type="radio"
                      id="stsFactionScore4"
                      name="score"
                      value="1"
                      className="rdo"
                      checked={score === "1"}
                      onChange={(e) => setScore(e.target.value)}
                    />
                    <label htmlFor="stsFactionScore4">매우 불만족</label>
                  </div>
                </div>

                <div className="inp-box">
                  <input
                    type="text"
                    id="stsfactionEtc"
                    name="etc"
                    placeholder="여러분의 소중한 한마디를 부탁드립니다."
                    title="여러분의 소중한 한마디를 부탁드립니다."
                    className="inp"
                    maxLength={50}
                  />
                  <button
                    type="button"
                    id="btn-stsfaction"
                    onClick={() => console.log("선택된 점수:", score)}
                  >
                    등록
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
