import Style from "./styles/SearchBar.module.scss";
function SearchBar() {
  return (
      <div className={Style.search_bar}>
        <input type="text" placeholder="Search for free photos" />
      </div>
  );
}
export default SearchBar;
