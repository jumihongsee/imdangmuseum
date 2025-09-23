"use client";
import "./history.scss";
import { Fragment, useEffect, useState } from "react";

export default function History() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/data/history.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div id="history">
      <div className="cont-visual">
        <p>
          2007~현재까지의 <br />
          임당유적전시관의 발자취입니다.
        </p>
      </div>

      <div className="history-wrap">
        <div className="history-cont">
          <ul>
            {data?.map((item, index) => (
              <li key={index}>
                <h4 className="year-tit">{item.year}</h4>
                <dl>
                  {item.cont.map((c, i) => (
                    <Fragment key={i}>
                      <dt key={`dt-${i}`}>{c.date}</dt>
                      {c.desc.map((d, j) => (
                        <dd key={`dd-${i}-${j}`}>{d}</dd>
                      ))}
                    </Fragment>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
