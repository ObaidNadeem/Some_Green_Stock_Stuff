import React,  { useRef, useEffect, useState } from 'react'
import { TweenMax, Power3 } from 'gsap';
import './Circles.css' 
// import { Tween } from 'gsap/gsap-core';

export const Circles = () => {

    const [grow, setGrow] = useState(true)

    
    const circle = useRef(null)
    const circleRed = useRef(null)
    const circleYellow = useRef(null)
    const container = useRef(null)
    
    const handleGrow = () => {
        TweenMax.to(circleRed.current, .8, { height: 150, width: 150 })  
        setGrow(false)
    } 

    const handleShrink = () => {
        TweenMax.to(circleRed.current, .8, { height: 75, width: 75 })  
        setGrow(true)
    }

    useEffect(() => {
        TweenMax.to(container.current,0,{css: {visibility: 'visible'}})
        // TweenMax.staggerFrom()
    
        TweenMax.staggerFrom([circle.current, circleRed.current, circleYellow.current], .8 , { opacity: 0 , x : 100, ease: Power3.easeOut } , .2)
        

        // handleGrow()
        
    }, [])

    return (
        <div ref={container} className="circle-container">
            <div ref={circle} className="circle"></div>        
            <div onClick={()=> grow ? handleGrow() : handleShrink()} ref={circleRed} className="red circle"></div>        
            <div ref={circleYellow} className="circle yellow"></div>        
        </div>
    )
}
