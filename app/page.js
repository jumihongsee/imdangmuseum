import Footer from "./components/layout/footer/Footer";
import Banner from "./main/banner/Banner";
import Exhibition from "./main/exhibition/Exhibition";
import FooterInfo from "./main/info/Info";
import Notice from "./main/notice/Notice";

export default function Home() {
  return (
    <>
      <Banner />
      <Exhibition />
      <Notice />
      <FooterInfo />
    </>
  );
}
