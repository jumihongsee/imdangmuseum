import Link from "next/link";
import "./subheader.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainMenu } from "@/app/config/contentsConfig";

export default function SubHeader({ data, path }) {
  // console.log(data);
  // console.log(path);
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const pathname = usePathname();
  const menuHandler = (prev) => {
    setMenuActive((prev) => !prev);
  };
  const subMenuHandler = (prev) => {
    setSubMenuActive((prev) => !prev);
  };

  useEffect(() => {
    setMenuActive(false);
    setSubMenuActive(false);
  }, [pathname]);

  return (
    <div className="cont-head">
      <h2 className="content-tit">{data.banner.label}</h2>
      <div className="pg_location">
        <ol>
          <li>
            <a href="/" className="home">
              홈
            </a>
          </li>
          <li>
            <div className="sub-menu-drop">
              <div className="drop-down">
                <div className="drop-down-title">
                  <a
                    href="#none"
                    title={`${menuActive ? "현재 선택됨" : ""}`}
                    onClick={menuHandler}
                    className={`${menuActive ? "active" : ""}`}
                  >
                    {data.banner.title}
                  </a>
                </div>
                <ul className={`drop-sub ${menuActive ? "active" : ""}`}>
                  {mainMenu.map((group, index) => {
                    const isActive = group.menu.some(
                      (item) => item.href === path
                    );

                    return (
                      <li key={index}>
                        <Link
                          href={group.menu[0].href}
                          title={isActive ? "현재 선택됨" : ""}
                          className={isActive ? "active" : ""}
                        >
                          {group.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="sub-menu-drop">
              <div className="drop-down">
                <div className="drop-down-title">
                  <a
                    href="#none"
                    title=""
                    onClick={subMenuHandler}
                    className={`${subMenuActive ? "active" : ""}`}
                  >
                    {data.banner.label}
                  </a>
                </div>
                <ul className={`drop-sub ${subMenuActive ? "active" : ""}`}>
                  {data.menu.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        title=""
                        className={path === item.href ? "active" : ""}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
