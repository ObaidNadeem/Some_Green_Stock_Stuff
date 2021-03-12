import React, { useEffect, useRef, useState } from 'react'
import './ScrollTrigger.css'
import { gsap, TweenMax, TimelineLite, Power3 } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
// import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'







export const ScrollTriggered = () => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);
    // gsap.registerPlugin(MorphSVGPlugin);

    // setState
    const [state, setstate] = useState(false)

    // refereces

    const frame = useRef(null)
    const deviceWidth = useRef(null)
    useEffect(() => {



        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.device-frame',
                markers: true,
                start: 'bottom 60%',
                end: 'bottom 20%',
                // pin: true,
                scrub: 1

            }
        })

        tl1.to('.device-frame', { css: { width: `${frame.current.offsetWidth + 400}px`, height: `${frame.current.offsetHeight + 50}px` }, duration: 2 })

        // // ScrollTrigger.create({
        // //     trigger: '.devices-main-frame',
        // //     start: "200 100%",
        // //     end: "bottom 0%",
        // //     pin: true,
        // //     markers: true
        // // })
        gsap.to('.svg-container', {
            duration: 2,
            scrollTrigger: {
                trigger: '.svg-container',
                start: "300 60%",
                end: "bottom 0%",
                markers: true,
                // toggleActions: "play pause resume pause",
                // scrub: true,
                toggleClass: "change",
                // duration
                // pin: true,
                // pinSpacing: true,
                // pinSpacing: false

            }
            // toggleClass: '.change'
        })

    
        // ********************* PERFECT WORKING ANIMATION ***********************************//
        // gsap.to('.device-frame', {
        //     css: { width: `${frame.current.offsetWidth + 400}px`, height: `${frame.current.offsetHeight + 50}px`},
        //     duration: 2,
        //     scrollTrigger: {
        //         trigger: '.devices-main-frame',
        //         start: "300 60%",
        //         end: "bottom 0%",
        //         markers: true,
        //         toggleActions: "play pause resume pause",
        //         scrub: true,
        //         // toggleClass: "circled",
        //         pin: true,
        //         // pinSpacing: true,
        //         pinSpacing: false

        //     }
        // })

         gsap.to('.svg-main', {
            duration: 2,
            scrollTrigger: {
                trigger: '.svg-main',
                start: "400 80%",
                end: "bottom 0%",
                markers: true,
                // toggleActions: "play pause resume pause",
                // scrub: true,
                // toggleClass: "change",
                // duration
                pin: true,
                // pinSpacing: true,
                pinSpacing: false

            }
            // toggleClass: '.change'
        })


        gsap.to('.menu', {
            css: { display: state ? "none" : "block" },
            scrollTrigger: {
                onUpdate: () => deviceWidth.current.offsetWidth > 250 ? setstate(true) : setstate(false),
                toggleClass: deviceWidth.current.offsetWidth > 250 ? "hide" : ""
                // onUpdate: () => console.log(state)
            }
        })
        console.log(state);
        // console.log(frame.current.offsetWidth)
        // console.log(deviceWidth.current.offsetWidth)
    }, [])

    // useEffect(() => {
    //     // gsap.to('.square', {
    //     //     x: '700',
    //     //     duration: 3,
    //     //     scrollTrigger: {
    //     //         trigger: ".square",
    //     //         start: "top 60%",
    //     //         end: "bottom 20%",
    //     //         markers: true,
    //     //         toggleActions: "play pause resume pause",
    //     //         scrub: true,
    //     //         toggleClass: "circled",
    //     //         pin: true,
    //     //         pinSpacing: false


    //     //     }
    //     // });
    //     let st = ScrollTrigger.create({
    //         start: "top 30%",
    //         end: "bottom 10%%",
    //         trigger: ".square",
    //         toggleClass: {targets:".square",className:"circled"},
    //         // pin: ".square",
    //         scrub: true,
    //         // pinSpacing: false,
    //         markers: true

    //     })
    //     // // ScrollTrigger.create({
    //     // //     start: "top 50%",
    //     // //     end: "bottom 50%",
    //     // //     trigger: ".square",
    //     // //     toggleClass: "oval",
    //     // //     pin: ".square",
    //     // //     // top: 500,
    //     // //     pinSpacing: false,

    //     // //     pinType: 'fixed',
    //     // //     markers: true

    //     // })
    //     ScrollTrigger.create({
    //         start: "top 50%",
    //         end: "bottom 0%",
    //         trigger: ".square-container",
    //         // toggleClass: "oval",
    //         pin: ".square-container",
    //         // top: 500,
    //         pinSpacing: false,

    //         // pinType: 'fixed',
    //         markers: true

    //     })

    // }, [])





    return (
        <div className="scroll-main">

            <div className="pink">

            </div>
            <div className="salmon">
                {/* <div className="square-container"> */}
                {/* <div className="square"></div> */}
                {/* </div>
             */}

                <div className="devices-main-frame">
                    <div ref={frame} className="device-frame">
                        <div ref={deviceWidth} className="mobile-devices">
                            <div className="menu">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="content">
                                <div className="main-heading"></div>
                                <div className="sub-heading"></div>
                                <div className="header"></div>
                                <div className="cards">

                                    <div className="card1-main">
                                        <div className="card1"></div>
                                        <div className="text1">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>

                                    <div className="card2-main">
                                        <div className="card2"></div>
                                        <div className="text1">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>

                                    <div className="card3-main">
                                        <div className="card3"></div>
                                        <div className="text1">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>

                                    <div className="card3-main">
                                        <div className="card3"></div>
                                        <div className="text1">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div></div> */}
                            </div>
                        </div>
                        <div className="switch">

                        </div>
                    </div>
                </div>
                <div className="svg-main"> 
                    {/* sgv */}
                    <div className="svg-container">

                    </div>
                </div>
            </div>





        </div>
    )
}











































// phy : 64
// pst: 80
// stats: 75
// English: 76
// Isl: 86
// cal: 71
