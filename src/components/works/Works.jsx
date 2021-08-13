import "./work.scss"
import {useState} from "react";

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "./asset/mobile.png",
            title: "Web Design",
            desc:"To infinity anddd your bitch ass mom's house",
            img: "https://static.wikia.nocookie.net/disney/images/2/22/Profile_-_Woody.jpeg/revision/latest?cb=20200711052417"
        },
        {
            id: "2",
            icon: "./asset/globe.png",
            title: "Mobile Applications",
            desc:"Woody shut your cow boy ass up",
            img: "https://static.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg/revision/latest?cb=20190623020017"
        },
        {
            id:"3",
            icon: "./asset/gaming.png",
            title: "Gaming",
            desc: "your mom is a hoe",
            img: "https://static01.nyt.com/images/2019/04/20/us/20readers-jesus3/21readers-jesus3-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        }
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=""/>
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="asset/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
            <img src="asset/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")}/>
        </div>
    );
}
