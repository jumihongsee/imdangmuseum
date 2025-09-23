import SearchBar from "@/app/components/common/searchBar/SearchBar";
import "./collection.scss";
import SubList from "@/app/components/common/subList/SubList";

export default function Collection() {
  return (
    <>
      <SearchBar />
      <SubList category="collection" />
    </>
  );
}
