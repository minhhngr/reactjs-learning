import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

    const textRef = useRef()

    /**
     * Using functionals components
     * useEffect() -> https://reactjs.org/docs/hooks-effect.html
     */

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelah: 1500,
            backSpeed: 60,
            strings: ['X', 'XX', "XXX"],
        });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, We are</h2>
                    <h1>MQ Team</h1>
                    <h3>Culi <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
