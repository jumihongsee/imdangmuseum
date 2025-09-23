import "./subBanner.scss";

export default function SubBanner({ data }) {
  // console.log(data);
  return (
    <div id="sub-visual">
      <div className="visual-cont">
        <div className="visual-cont-wrap">
          <div className="visual-tit">
            <h1 className="sub-pg-tit">{data.title}</h1>
          </div>
          <span className="visual-img">
            <img src={`/img/contents/${data.img}`} alt="" role="presentation" />
          </span>
        </div>
      </div>
    </div>
  );
}
