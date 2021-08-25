import "./intro.scss"
import {init} from 'ityped'
import { useEffect,useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() =>{
        init(textRef.current,{
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings:["Software","Front-End","Back-End","Full-Stack"]
        })

    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="asset/selfie2.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Matthew Cheung a</h1>
                    <h3> <span ref={textRef}></span> Developer</h3>
                    <h3>and a gamer and an anime lover.</h3>
                </div>
                <a href="#portfolio">
                    <img src="asset/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
