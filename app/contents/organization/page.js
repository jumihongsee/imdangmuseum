"use client";

import { useEffect, useState } from "react";
import "./organization.scss";

export default function Organization() {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/organization.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [tab]);

  return (
    <div id="organization">
      <div className="orga-table">
        <h3 className="cont-tit">조직도</h3>
        <div className="orga-cont-wrap">
          <ul>
            <li className="depth1">
              <div className="depth-box">
                <div className="depth-cont">
                  <strong>관장</strong>
                  <p>053-804-7330</p>
                </div>
              </div>
            </li>
            <li className="depth2">
              <div className="depth-cont">
                <div className="depth-cont">
                  <strong>경산시립박물관</strong>
                  <p>053-804-7314</p>
                </div>
              </div>
            </li>
            <li className="depth3">
              <div className="depth-cont">
                <div className="depth-cont">
                  <strong>임당유적전시관</strong>
                  <p>053-804-7334</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="orga-work">
        <h3 className="cont-tit">주요업무</h3>
        <div className="pg-tabs">
          <nav className="tabs">
            <ul>
              {data?.map((item, index) => (
                <li className={tab === index ? "active" : ""} key={index}>
                  <a
                    href="#none"
                    title={tab === index ? `${item} 선택됨` : ""}
                    onClick={() => {
                      setTab(index);
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="orga-list-wrap">
          <div className="tab-content">
            <ul>
              {data?.[tab]?.cont?.map((item, index) => (
                <li key={index}>
                  <h4>{item.position}</h4>
                  <dl>
                    <dt>전화번호</dt>
                    <dd>{item.phone}</dd>
                    <dt>담당업무</dt>
                    <dd>{item.duty}</dd>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
