"use client";
import "./SubLayoutWrapper.scss";
import SubBanner from "../components/common/subBanner/SubBanner";
import SubSidebar from "../components/common/subSidebar/SubSidebar";
import SubHeader from "../components/common/subHeader/SubHeader";
import { usePathname } from "next/navigation";
import { contentsConfig } from "../config/contentsConfig";
import Inquiry from "../components/common/inquiry/Inquiry";

export default function SubLayoutWrapper({ children }) {
  const pathName = usePathname();
  let basePath = pathName;
  if (pathName.startsWith("/contents/collection/")) {
    basePath = "/contents/collection";
  } else if (pathName.startsWith("/contents/scholarship/")) {
    basePath = "/contents/scholarship";
  } else if (pathName.startsWith("/contents/board")) {
    basePath = "/contents/board";
  }

  const contentsData = contentsConfig[basePath] || null;

  return (
    <>
      <SubBanner data={contentsData.banner} />
      <div className="cont-wrapper">
        <div className="inr">
          <SubSidebar data={contentsData} path={basePath} />
          <div className="sub-contents">
            <SubHeader data={contentsData} path={basePath} />
            {children}
            <Inquiry />
          </div>
        </div>
      </div>
    </>
  );
}
