"use client";
import "./subListDetail.scss";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SubListDetail({ category }) {
  const path = useParams();
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    fetch(`/data/${category}.json`)
      .then((res) => res.json())
      .then((data) => {
        const detailData = data.find((item) => String(item.id) === path.id);
        setData(detailData);
      });
  }, []);

  // console.log(data);
  return (
    <div id="sublist-detail-cont">
      <div className="left-img-wrap">
        <img src={`/img/contents/${data?.img}`} alt="" />
      </div>
      <div className="right-info-wrap">
        <div className="list-cont-head">
          <p className="view-subject">{data?.title}</p>
          <div className="view-list-box">
            {category === "collection" ? (
              <dl>
                <dt>다른명칭</dt>
                <dd>{data?.alias}</dd>
                <dt>전시명칭</dt>
                <dd>{data?.ex_title}</dd>
                <dt>시대</dt>
                <dd>{data?.period}</dd>
                <dt>출토지</dt>
                <dd>{data?.provenance}</dd>
                <dt>재질</dt>
                <dd>{data?.material}</dd>
                <dt>분류</dt>
                <dd>{data?.classification}</dd>
                <dt>소장품번호</dt>
                <dd></dd>
              </dl>
            ) : (
              <dl>
                <dt>저자</dt>
                <dd>{data?.authors}</dd>
                <dt>발행기관</dt>
                <dd>{data?.publisher}</dd>
                <dt>발행년도</dt>
                <dd>{data?.publication_year}</dd>
                <dt>도서종류</dt>
                <dd>{data?.series}</dd>
                <dt>페이지수</dt>
                <dd>{data?.pages}</dd>
                <dt>도서금액</dt>
                <dd>{data?.price}</dd>
              </dl>
            )}
          </div>
        </div>
        <div className="list-cont-body">
          <h6>{category === "collection" ? "소장품" : "학술자료"} 설명</h6>
          {category === "collection" ? (
            <ul>
              <li>{data?.collection_number}</li>
              {data?.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              <li>
                크기 : 높이 {data?.size.height}cm, 몸통지름 {data?.size.width}
                cm
              </li>
            </ul>
          ) : (
            <ul className="scholarship-list">
              {data?.contents.map((item, index) => (
                <li key={index}>
                  <p>{item?.presentation_info}</p>
                  <ul>
                    {item?.chapters?.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={() => {
            router.push(`/contents/${category}`);
          }}
          aria-label={`${category} 목록 페이지로 이동`}
        >
          목록으로
        </button>
      </div>
    </div>
  );
}
