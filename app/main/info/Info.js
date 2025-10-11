"use client";
import "./info.scss";

export default function FooterInfo() {
  return (
    <section id="main-footer">
      <div className="inr">
        <div className="exhibition-foot-info">
          <ul>
            <li>
              <h3 className="info_1">관람시간</h3>
              <p>
                09:00 ~ 18:00 <em>* (입장시간 17:00 까지)</em>
              </p>
            </li>
            <li>
              <h3 className="info_2">관람료</h3>
              <p>무료</p>
            </li>
            <li>
              <h3 className="info_3">휴관일</h3>
              <p>매주 월요일, 1월1일 , 설·추석 당일</p>
            </li>
          </ul>
        </div>
        <div className="exhibition-foot-btns">
          <a href="/contents/viewInfo" className="btn-guide">
            관람안내
          </a>
          <a
            href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=2075396019&urlLevel=3&urlX=895640&urlY=654481"
            className="btn-location"
          >
            오시는 길
          </a>
        </div>
      </div>
    </section>
  );
}
