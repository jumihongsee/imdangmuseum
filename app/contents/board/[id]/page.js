"use client";

import { useEffect, useState } from "react";
import "./boardDetail.scss";
import { useParams, useRouter } from "next/navigation";

export default function boardDeatail() {
  const path = useParams();
  const [data, setData] = useState();
  const router = useRouter();

  // console.log(path.id);

  useEffect(() => {
    fetch("/data/notice.json")
      .then((res) => res.json())
      .then((data) => {
        const detailData = data.find((item) => String(item.id) === path.id);
        setData(detailData);
      });
  }, []);

  //   console.log(data);

  return (
    <div className="board-detail-wrapper">
      <div className="board-head">
        <span className="list-type noti"> {data?.category}</span>
        <h4>{data?.title}</h4>
        <div className="board-info">
          <span className="board-writer">{data?.host}</span>
          <time className="board-date">{data?.date}</time>
          <span className="board-hit">{data?.view}</span>
        </div>
      </div>
      <div className="board-cont">
        <p>{data?.contents}</p>
      </div>
      <div className="board-file">
        <h5>첨부파일</h5>
        <div className="file-wrapper">
          {data?.files.map((item, index) => (
            <span className={`link ${index >= 1 ? "mt-10" : ""}`} key={index}>
              <a href={item.src} title="파일다운로드">
                {item.alt + ".jpg"}
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="btn-wrapper">
        <button
          onClick={() => {
            router.push(`/contents/board`);
          }}
          aria-label={`공지사항 목록 페이지로 이동`}
        >
          목록
        </button>
      </div>
    </div>
  );
}
