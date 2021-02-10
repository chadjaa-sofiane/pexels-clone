import Style from "./styles/Header.module.scss";
import Search from "./Search";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
export default function Header() {
  return (
    <nav className={Style.Head}>
      <div className={Style.logo_bar}>
        <img width="50" src="/logo.svg" alt="pexels_logo" />
        <span>Pexels</span>
      </div>
      <Search />
      <div className={Style.sub_bar}>
        <NotificationsOutlinedIcon />
      </div>
    </nav>
  );
}
