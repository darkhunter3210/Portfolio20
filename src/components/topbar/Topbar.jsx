import "./topbar.scss"
import {Person,Mail} from '@material-ui/icons';

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <a href="tel:6463311072">646-331-1072</a>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <a href="mailto: matthewcheung3003@gmail.com">matthewcheung3003@gmail.com</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}> 
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
