"use client";
import { useState } from "react";
import "./exhibition.scss";

export default function Exhibition() {
  const [activeTab, setActiveTab] = useState(0);
  const tabHeadr = ["현재전시", "예정전시"];
  const tabCont = [
    {
      status: "current",
      type: "empty",
      title: "현재 진행중인 전시가 없습니다.",
    },
    {
      status: "upcoming",
      type: "empty",
      title: "예정된 전시가 없습니다.",
    },
  ];

  return (
    <section id="exhibition-cont">
      <div className="section-cont">
        <div className="inr">
          <div className="section-header">
            <h2 className="section-title">특별전시</h2>
            <div className="tabs-header">
              <ul>
                {tabHeadr.map((item, index) => (
                  <li
                    key={index}
                    className={activeTab === index ? "active" : ""}
                    onClick={() => setActiveTab(index)}
                  >
                    <a href="#none">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tab-conts">
            <div className="tab_item active">
              {tabCont[activeTab].type === "empty" ? (
                <div className="empty-alert"></div>
              ) : null}
              <p>{tabCont[activeTab].title}</p>
            </div>
          </div>
        </div>
        <span className="bg">
          <span className="bg-txt">IMDANG RELICS EXHIBITION</span>
        </span>
      </div>
    </section>
  );
}
