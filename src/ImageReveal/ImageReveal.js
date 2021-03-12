import React, { useRef, useEffect, useState } from 'react'
import { TweenMax, TimelineLite, Power2 } from 'gsap';
import './ImageReveal.css'
import Image from './image.jpeg'
import CSSRulePlugin from 'gsap/CSSRulePlugin';


export const ImageReveal = () => {

    const container = useRef(null)
    const image = useRef(null)
    const reveal = CSSRulePlugin.getRule(".image-container::after");

    let tl = new TimelineLite()

    useEffect(() => {

        tl.to(container.current, 0, { css: {visibility: 'visible'} }).to(reveal, 1.2 , { width: '0%', ease: Power2.easeInOut })
        .to(image.current, 1.4, { scale: 1, ease: Power2.easeInOut, delay: -0.9})
        
    }, [])

    return (
        <section className="main">
            <div ref={container} className="container">
                <>
                    <div className="image-container">
                        <img ref={image} src={Image} />
                    </div>
                </>
            </div>
        </section>
    )
}
