"use client";
import "./qna.scss";
import { Collapse } from "antd";

export default function Qna() {
  const items = [
    {
      key: "1",
      label: "전시실 내 사진 촬영이 가능한가요?",
      children: (
        <div className="text-wrapper">
          <p>카메라 플래시나 삼각대를 사용하지 않고 사진 촬영이 가능합니다.</p>
          <p> 다만 일부 특별전시나 전시품에 따라 제한되는 경우도 있습니다.</p>
          <p>
            사진 촬영 시 관람객들에게 방해가 되지 않도록 조금만 신경 써
            주십시오.
          </p>
        </div>
      ),
    },
    {
      key: "2",
      label: "전시관 문화행사 및 교육에 참여하려면 어떻게 하면 되나요?",
      children: (
        <div className="text-wrapper">
          <p>
            문화행사 또는 교육 메뉴에서 참여를 원하는 프로그램을 확인 후
            연락주시면 되십니다.
          </p>
          <p>문의 : 053-804-7334, 7344</p>
        </div>
      ),
    },
    {
      key: "3",
      label: "상시 교육 참가시 참가비 또는 재료비는 얼마인가요?",
      children: (
        <div className="text-wrapper">
          <p>
            임당유적전시관의 경우 참가비 또는 재료비는 무료입니다 다만, 상시
            교육의 경우 참가 재료비는 프로그램별로 상이 할 수 있으니,
            학예연구실로 문의 바랍니다.
          </p>
          <p> 문의 : 053-804-7334, 7344</p>
        </div>
      ),
    },
    {
      key: "4",
      label: "어린이 체험실 단체 관람 신청/예약을 하고 싶어요",
      children: (
        <div className="text-wrapper">
          <p>
            어린이체험실 메뉴에 예약하기 버튼을 클릭하시여 예약하실 수 있습니다.
          </p>
          <p>
            휴관일을 제외하고 오전 9시부터 1시간단위로 예약가능한 경우
            예약하실수있습니다 (이용가능시간 9시 ~17시까지)
          </p>
          <p>문의 : 053-804-7338</p>
        </div>
      ),
    },
  ];
  return <Collapse defaultActiveKey={["1"]} items={items} />;
}
