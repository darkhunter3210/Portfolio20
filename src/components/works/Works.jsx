import "./work.scss"
import {useState} from "react";
import { IconButton } from '@material-ui/core';
import { GitHub} from "@material-ui/icons";

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "https://github.com/darkhunter3210/Crypto-Currency-Tracker",
            title: "Crypto-Tracker",
            desc:"A crypto tracker that tracks the price of different cryptocurrency prices. Using an api to grab the crypto prices and update the prices every minute.",
            img: "https://sabe.io/tutorials/getting-started-with-react/cryptocurrency-ticker-app.png"
        },
        {
            id: "2",
            icon: "https://github.com/Plates-Perfecto/CodePath-iOS-Final-Project",
            title: "Plates-Perfecto",
            desc:"A ios app, that uses an api to grab different recipes. The app has 4 different categories suggestion,breakfast,main and dessert. The suggestions change base on the time of the day, if is the morning it would suggest breakfast, afternoon lunch and night dinner.",
            img: "asset/p.jpeg"
        },
        {
            id:"3",
            icon: "https://github.com/darkhunter3210/RoastBot",
            title: "RoastBot",
            desc: "A discord bot that roast people when use commands. If someone typed a keyword in the discord server, the bot will automatically roast that person. Users can also add more key words to the bot.Users can also update the joke.",
            img: "asset/discord_roast.png"
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
                                    <IconButton href={d.icon}>
                                    <GitHub/>
                                    </IconButton>
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
