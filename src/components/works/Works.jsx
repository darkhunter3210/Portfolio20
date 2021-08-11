import "./work.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="asset/mobile.png" alt=""/>
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius distinctio iste rem, incidunt placeat.</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://www.anime-planet.com/images/characters/145805.jpg?t=1562445151" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <img src="asset/arrow.png" className="arrow Left" alt=""/>
            <img src="asset/arrow.png" className="arrow Right" alt=""/>
        </div>
    );
}
