import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="asset/tanjiro.jpeg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Matthew Cheung</h1>
                    <h3>Software<span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="asset/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
