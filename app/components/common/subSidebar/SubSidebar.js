import Link from "next/link";
import "./subsidebar.scss";

export default function SubSidebar({ data, path }) {
  // console.log(data);
  return (
    <aside id="sub-side-menu">
      <h2>{data.banner.title}</h2>
      <ul>
        {data.menu.map((item, index) => (
          <li key={index}>
            <Link
              href={`${item.href}`}
              className={`${item.href === path ? "active" : ""}`}
            >
              {item.title}
              <span className="view">바로가기</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="sub-side-info">
        <h3>
          <strong>관람</strong>시간
        </h3>
        <p className="side-time">
          <strong>09:00~18:00</strong>
          <em>(입장마감 : 17:00)</em>
        </p>
        <h4>휴관일</h4>
        <p className="side-holiday">1월1일. 설·추석 당일, 매주 월요일</p>
      </div>
    </aside>
  );
}
