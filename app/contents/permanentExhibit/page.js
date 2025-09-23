"use client";
import "./permanentExhibit.scss";
import { useState, useEffect } from "react";

export default function PermanentExhibit() {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/permanentExhibit.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [tab]);

  //   console.log(tab);
  //   console.log(data?.[tab]?.zone);

  return (
    <div id="parment-exhibition-cont">
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
      <div className="map-cont">
        <div className="pin-box">
          <div className="img-map">
            <img
              src={`/img/contents/${data?.[tab]?.bannerUrl}`}
              alt={data?.[tab]?.bannerAlt}
            ></img>
          </div>

          {data?.[tab]?.zone.map((item, index) => (
            <span className={`map-pin pin-${item.index}`} key={index}>
              <a
                className="target"
                title={`${item.title} : ${item.subtit}`}
                href={`#exh-cont-${item.index}`}
              >
                <strong>{item.title}</strong>
                <span className="desc">{item.subtit}</span>
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="exh-cont">
        {data?.[tab]?.zone.map((item, index) => (
          <div key={index} className="exh-box" id={`exh-cont-${item.index}`}>
            <h4>
              <strong>{item.title}</strong>
              {item.subtit}
            </h4>
            <p className="desc">{item.script}</p>
            <span className="img">
              <img
                src={`/img/contents/${item.img}`}
                alt={item.subtit + "전시사진 자료"}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
