import "./viewInfo.scss";

export default function ViewInfo() {
  return (
    <div id="view-wrapper">
      <div className="view-top">
        <h4>관람시간</h4>
        <p className="view-time">09:00~18:00</p>
        <p className="view-ment">
          관람종료시간 1시간 전까지만 입장할 수 있습니다. 현장상황에 따라 입장이
          조기 마감될 수 있습니다.
        </p>
      </div>
      <div className="view-info">
        <ul>
          <li className="view-list time">
            <h5>관람시간</h5>
            <p className="view-info-desc">
              <strong>09:00 ~ 18:00</strong>
            </p>
            <p className="view-info-ment">
              관람종료시간 1시간 전까지만 입장할 수 있습니다.
              <br />
              현장상황에 따라 입장이 조기 마감될 수 있습니다.
            </p>
          </li>
          <li className="view-list holiday">
            <h5>휴관일</h5>
            <p className="view-info-desc">매주 월요일, 1월1일, 설날·추석당일</p>
            <p className="view-info-ment">그 밖에 시설의 운영상 필요한 경우</p>
          </li>
          <li className="view-list price">
            <h5>관람요금</h5>
            <p className="view-info-desc">
              <strong>무료</strong>
            </p>
          </li>
        </ul>
      </div>
      <div className="view-note">
        <div className="note-cont">
          <h5>전시관 관람 시 유의사항</h5>
          <ul>
            <li>
              <span className="icon_img">
                <img src="/img/contents/icon_warning_1.png" alt="" />
              </span>
              조용한 분위기를 지켜 질서있게 관람해 주십시오.
            </li>
            <li>
              <span className="icon_img">
                <img src="/img/contents/icon_warning_2.png" alt="" />
              </span>
              전시실 내에서 음주 또는 음료, 과자등 음식물을 드실 수 없습니다.
            </li>
            <li>
              <span className="icon_img">
                <img src="/img/contents/icon_warning_3.png" alt="" />
              </span>
              관리자의 허가 없이 플래시등 조명이나 삼각대등을 사용하여 사진을
              찍을 수 없습니다.
            </li>
            <li>
              <span className="icon_img">
                <img src="/img/contents/icon_warning_4.png" alt="" />
              </span>
              허가되지 않은 전시품은 만질 수 없습니다.
            </li>
            <li>
              <span className="icon_img">
                <img src="/img/contents/icon_warning_5.png" alt="" />
              </span>
              박물관 내로 반려동물을 데리고 들어올 수 없습니다.
            </li>
            <li>
              <span className="icon_img">
                <img src="/img/contents/icon_warning_6.png" alt="" />
              </span>
              휴대폰은 전원을 끄거나 진동으로 전환해 주십시오.
            </li>
            <li>
              <span className="icon_img">
                <img src="/img/contents/icon_warning_7.png" alt="" />
              </span>
              관람자가 전시품 및 전시관 시설물을 파괴하거나 훼손하였을 때에는
              이에 상응하는 손해 배상을 하셔야 합니다.
            </li>
          </ul>
        </div>
      </div>
      <div className="view-guide-detail">
        <ul>
          <li>
            <h5>어린이 체험실</h5>
            <ul className="list-chk">
              <li>
                어린이 체험실은 <strong>예약제</strong>로 실시됩니다.
              </li>
              <li>
                어린이 체험실은 9~12시, 13~17시 동안 운영되며, 12~13시,
                17~18시는 정리시간입니다.
              </li>
            </ul>
            <dl className="list-dot">
              <dt>체험시간</dt>
              <dd>09:00~17:00</dd>
              <dt>예약인원</dt>
              <dd>25명~30명 정도</dd>
              <dt>휴관일</dt>
              <dd>매주 월요일, 1월 1일, 설·추석 당일</dd>
              <dt>문의</dt>
              <dd>053-804-7338</dd>
            </dl>
          </li>
          <li>
            <h5>단체관람예약</h5>
            <dl className="list-dot">
              <dt>관람시간</dt>
              <dd>09:00~18:00 (입장은 17:00까지 가능합니다.)</dd>
              <dt>휴관일</dt>
              <dd>매주 월요일, 1월 1일, 설·추석 당일</dd>
              <dt>문의</dt>
              <dd>053-804-7337</dd>
            </dl>
          </li>
          <li>
            <h5>대관예약</h5>
            <h6>대관안내</h6>
            <p>
              대관은 대관예정일 10일전까지 별지 제1호 서식에 따른
              대관허가신청서를 직접제출 또는 팩스/이메일로 제출하여야 합니다.
            </p>
            <div className="download-btns">
              <a
                title="대관허가신청서와 개인정보동의서 hwp파일 다운로드"
                href="/download/대관허가신청서.hwp"
              >
                대관허가 신청서 &amp; 개인정보 동의서
              </a>
              <a
                title="대관허가변경신청서 hwp파일 다운로드"
                href="/download/대관허가변경신청서.hwp"
              >
                대관허가변경 신청서
              </a>
              <a
                title="대관허가취소 신청서 hwp파일 다운로드"
                href="/download/대관허가취소신청서.hwp"
              >
                대관허가취소 신청서
              </a>
            </div>
            <div className="rent-inquiry">
              <dl>
                <dt>대관허가</dt>
                <dd>Fax : 053-802-8864</dd>
                <dt>신청서 제출</dt>
                <dd>Email : ena1643@korea.kr</dd>
              </dl>
            </div>
            <h6>대관절차</h6>
            <div className="rent-step">
              <ol>
                <li className="step-1">
                  <span className="step-num">01</span>
                  <span className="icon"></span>
                  <p>사용허가 신청서</p>
                </li>
                <li className="step-2">
                  <span className="step-num">02</span>
                  <span className="icon"></span>
                  <p>내용검토 허가결정</p>
                </li>
                <li className="step-3">
                  <span className="step-num">03</span>
                  <span className="icon"></span>
                  <p>대관료 부과</p>
                </li>
                <li className="step-4">
                  <span className="step-num">04</span>
                  <span className="icon"></span>
                  <p>사용료 수납</p>
                </li>
                <li className="step-5">
                  <span className="step-num">05</span>
                  <span className="icon"></span>
                  <p>대관 허가서 교부</p>
                </li>
              </ol>
              <p className="view-info-ment">
                사용시간 :09:00~18:00 (임당유적전시관 운영 및 관리에 관한 조례
                제5조의 운영시간 내로 함을 원칙으로 함)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
