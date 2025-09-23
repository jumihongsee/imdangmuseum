import "./facilitiesInfo.scss";
export default function FacilitiesInfo() {
  return (
    <div id="fac-cont">
      <h4 className="cont-tit">외부시설안내</h4>
      <div className="fac-out-map">
        <div className="fac-top">
          <span className="loca-point point1">
            <span className="number">1</span>
          </span>
          <span className="loca-point point2">
            <span className="number">2</span>
          </span>
          <span className="loca-point point3">
            <span className="number">3</span>
          </span>
          <span className="loca-point point4">
            <span className="number">4</span>
          </span>
          <span className="loca-point point5">
            <span className="number">5</span>
          </span>
          <span className="loca-point point6">
            <span className="number">6</span>
          </span>
          <span className="loca-point point7">
            <span className="number"></span>
            <span className="loca-name">
              사적 경산 임당동과 조영동 고분군
              <br />
              Ancient Tombs in Imdang-dong and
              <br />
              Joyeong-dong, Gyeongsan
            </span>
          </span>
          <span className="img">
            <img
              src="/img/contents/fac_img_outside.jpg"
              alt="임당유적전시관 외부시설 안내 : 주차장을 기준으로 북서쪽 방향에 어울림마당, 서쪽 방향에 유물의 길, 동쪽방향에 역사의 길, 북쪽방향으로 고대 하양의 지배자와 전망대가 있고 북서쪽 방향 외곽쪽에 사적 경산 임당동과 조영동 고분군이 위치해 있습니다."
            />
          </span>
        </div>
        <div className="fac-top-cont">
          <ol>
            <li>
              <span className="number">1</span>
              <span className="fac-name">
                주차장<em>Parking</em>
              </span>
            </li>
            <li>
              <span className="number">2</span>
              <span className="fac-name">
                어울림 마당<em>Community Garden</em>
              </span>
            </li>
            <li>
              <span className="number">3</span>
              <span className="fac-name">
                유물의 길<em>The path of relics</em>
              </span>
            </li>
            <li>
              <span className="number">4</span>
              <span className="fac-name">
                역사의 길<em>The path of history</em>
              </span>
            </li>
            <li>
              <span className="number">5</span>
              <span className="fac-name">
                고대 하양의 지배자<em>Ruler of the Ancient Hayang</em>
              </span>
            </li>
            <li>
              <span className="number">6</span>
              <span className="fac-name">
                전망대<em>Observatory</em>
              </span>
            </li>
          </ol>
        </div>
      </div>
      <h4 className="cont-tit">내부시설안내</h4>
      <ol className="fac-cont-list">
        <li>
          <h5>1F</h5>
          <img
            src="/img/contents/fac_img_1f.jpg"
            alt="1F : 입구 정문 앞 안내데스크를 기준으로 11시 시계방향에 미디어아트월이 있고 미디어 아트월을 기준으로 북쪽 방향에 임당유적실이 있으며 안내데스크를 기준으로 3시 방향에 기획전시실이 있고 9시 방향에 교육실과 강당이 있습니다."
          ></img>
        </li>
        <li>
          <h5>2F</h5>
          <img
            src="/img/contents/fac_img_2f.jpg"
            alt="2F : 중앙 계단을 중심으로 12시 방향에 자연유물실 있고 10시 방향에 어린이 체험실, 하늘길 정원이 있으며 9시 방향에 수유실과 카페테리아가 있고 2시 방향에 관장실, 3시 방향에 사무실이 있습니다."
          />
        </li>
        <li>
          <h5>전망대</h5>
          <img
            src="/img/contents/fac_observatory.jpg"
            alt="전망대 : 전망대에는 압독국의 세계가 있습니다."
          />
        </li>
      </ol>
    </div>
  );
}
