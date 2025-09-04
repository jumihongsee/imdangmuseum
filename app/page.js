import Footer from "./components/layout/footer/footer";
import Banner from "./main/banner/banner";
import Exhibition from "./main/exhibition/exhibition";
import FooterInfo from "./main/info/info";
import Notice from "./main/notice/notice";

export default function Home() {
  return (
    <>
      <Banner />
      <Exhibition />
      <Notice />
      <FooterInfo />
      <Footer />
    </>
  );
}
