"use client";
import Link from "next/link";
import "./board.scss";
import { useEffect, useState } from "react";

export default function Board() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/data/notice.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //   console.log(data);

  return (
    <div className="board-list-wrapper">
      {data?.map((item, index) => (
        <div className="list-row" key={index}>
          <Link href={`/contents/board/${item.id}`}>
            <span className="list-type noti">{item.category}</span>
            <div className="list-cont">
              <strong className="list-tit">{item.title}</strong>
              <p className="list-desc">{item.contents}</p>
            </div>
            <div className="list-foot">
              <span className="list-writer">{item.host}</span>
              <time className="list-date">{item.date}</time>
              <span className="hit">{item.view}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
