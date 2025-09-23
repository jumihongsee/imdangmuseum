"use client";

import "./subList.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SubList({ category }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`/data/${category}.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="sublist-wrapper">
      <ul className="sublist-cont">
        {data?.map((item, index) => (
          <li key={index}>
            <Link href={`/contents/${category}/${item.id}`}>
              <span className="list-img-wrap">
                <img
                  src={`/img/contents/${item.img}`}
                  alt={`${item.title} 의 사진`}
                />
              </span>
              <span className="info-wrap">
                <strong className="list-subject">{item.title}</strong>
                <span className="list-title">
                  <dl>
                    <dt>
                      {category === "collection" ? "소장품번호" : "발행년도"}
                    </dt>
                    <dd>
                      {category === "collection" ? "" : item.publication_year}
                    </dd>
                  </dl>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
