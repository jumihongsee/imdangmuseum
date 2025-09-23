import "./relicDonation.scss";
export default function RelicDonation() {
  return (
    <div className="donation-content">
      <div className="do-wrapper">
        <div className="do-cont">
          <h4>유물 기증안내</h4>
          <div className="do-list">
            <ul>
              <li>
                임당유적전시관은 소중하게 간직해 오신 유물을 기증하신 분들의
                깊은 뜻을 기리기 위해 박물관 전시실 내
                <strong>『기증자 벽(壁) 』</strong>을 마련하고, 기증문화 운동을
                널리 알리기 위해 노력해 왔습니다.
              </li>
              <li>
                기증문화재의 보존 관리를 위하여 기증문화재를 조사·등록하고
                유물의 상태를 고려하여 보존처리 등 기증문화재의 전시와 연구에
                관심을 기울여온 임당유적전시관은 앞으로도 기증 문화유산의 안전한
                보존 관리에 최선을 다할 것이며, 이를 학술연구와 전시자료로
                활용하여 박물관을 찾는 관람객들이 공유할 수 있도록
                노력하겠습니다.
              </li>
              <li>
                유물 기증은 개인이 문화재를 관리함에 따라 발생할 수 있는 도난,
                훼손 등으로부터 문화재를 보호하고, 전시를 통해 문화재의 가치를
                더욱 빛나게 하는 소중한 일입니다.
              </li>
              <li>
                임당유적전시관은 단 한 점의 유물 기증도 소중하게 생각하고
                있으며, 비워있는 기증자 벽을 채워줄 소장자 여러분의 기증을 항상
                기다리고 있습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="do-cont">
          <h4>유물 기증방법</h4>
          <div className="do-list">
            <ul>
              <li>
                기증하시려는 문화재를 가지고 직접 박물관에 방문하시거나, 전화로
                기증의사를 밝히시면 됩니다.
              </li>
              <li>
                임당유적전시관에서는 심의위원회에서 기증대상유물의 가치를
                평가하고 심의하여 문화재 수증여부를 결정하게 됩니다.
              </li>
              <li>
                기증이 결정된 후에는 『기증신청서』를 제출해주시면, 전시관에서
                유물을 기증받은 후 기증자께 <strong>『기증증서』</strong>를
                발급해 드립니다.
              </li>
            </ul>
            <div className="do-process">
              <h5>유물 기증절차</h5>
              <ol>
                <li>
                  <span className="icon">
                    <img src="/img/contents/icon_don_process_1.png" alt="" />
                  </span>
                  <p>기증신청서 제출</p>
                </li>
                <li>
                  <span className="icon">
                    <img src="/img/contents/icon_don_process_2.png" alt="" />
                  </span>
                  <p>유물수집 자체평가회 구성</p>
                </li>
                <li>
                  <span className="icon">
                    <img src="/img/contents/icon_don_process_3.png" alt="" />
                  </span>
                  <p>기증유물 심의</p>
                </li>
                <li>
                  <span className="icon">
                    <img src="/img/contents/icon_don_process_4.png" alt="" />
                  </span>
                  <p>기증증서 증정</p>
                </li>
              </ol>
            </div>
            <div className="down-btns">
              <a
                href="/download/유물기증등신청서.hwp"
                title="유물기증신청서 hwp파일 다운로드"
              >
                기증신청서 다운로드
              </a>
            </div>
          </div>
        </div>
        <div className="do-cont">
          <h4>기증문의</h4>
          <div className="do-list">
            <p className="alert-ment">
              문화재 기증에 대하여 문의하실 사항이 있으신 분은 아래의 연락처로
              연락주시기 바랍니다.
            </p>
            <ul>
              <li>주소 : 경북 경산시 임당동 632 임당유적전시관</li>
              <li>대표전화 : 053-804-7334,7344 팩 스 : 053-802-8864</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
