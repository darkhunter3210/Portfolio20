import "./topbar.scss";
import { GitHub, Mail,LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MC
          </a>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a href="https://github.com/darkhunter3210">Darkhunter3210</a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto: matthewcheung3003@gmail.com">matthewcheung3003@gmail.com</a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="https://www.linkedin.com/in/tsz-chung-matthew-cheung-bb50bb195/">Matty</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
