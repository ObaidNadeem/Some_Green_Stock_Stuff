import React, { useEffect, useRef, useState } from 'react'
import { gsap, TweenMax, TimelineLite, Power3 } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import './Anim.css';
// import { SVGMorpheus } from 'svg-morpheus'
import bg1 from '../scrollTrigger/slug-bg-svg-01.svg'
import bg2 from './slug-bg-2.svg'
import img1 from './0001.jpg'
import img2 from './0002.jpg';
import anime from 'animejs/lib/anime.es.js';

export const Anim = () => {

    // gsap.registerPlugin(ScrollTrigger);


    // const canvasRef = useRef(null)

    // const imageRef = useRef(null)

    // useEffect(() => {

    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext("2d");
    //     // const image = imageRef.current;
    //     canvas.width = 1158;
    //     canvas.height = 770;
    //     // /static/media/slug-bg-2.fe1c77f3.svg
    //     const frameCount = 2;
    //     const currentFrame = index => (
    //         // `/static/media/${(index + 1).toString().padStart(4, '0')}.5d6e056f.jpg`
    //         // "/static/media/slug-bg-2.fe1c77f3.svg"
    //         `/static/media/slug-bg-${(index + 1).toString()}.fe1c77f3.svg`
    //     );
    //     const images = []
    //     const airpods = {
    //         frame: 0
    //     };

    //     for (let i = 1; i < frameCount; i++) {
    //         const img = new Image();
    //         img.src = currentFrame(i);
    //         // console.log(currentFrame(i))
    //         images.push(img);
    //     }
    //     // console.log(image)
    //     gsap.to(airpods, {
    //         frame: frameCount - 1,
    //         snap: "frame",
    //         scrollTrigger: {
    //             scrub: 0.5
    //         },
    //         onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
    //     });

    //     images[0].onload = render;

    //     function render() {
    //         context.clearRect(0, 0, canvas.width, canvas.height);
    //         context.drawImage(images[airpods.frame], 0, 0, 500, 300);
    //         //             context.beginPath();
    //         // context.rect(20, 20, 150, 100);
    //         // context.stroke();
    //     }

    //     console.log(images[airpods.frame])

    // }, [])



    // const anime = require('animejs');

    // anime({
    //     targets: '.morph',
    //     d: [
    //       { value: 
    //         'M207,277c0,0,72-47,96,0s-23,83,0,116s-72,97-96,68s-60-43-40-84S100,305,207,277z'
    //       },
    //       { value: 'M266,81c3,1,22-8,49,58c6.6,16.2-48.8,28-19,51S132,357,88,232s52-37,40-138S266,81,266,81z' },
    //     //   { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
    //     //   { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
    //     ],
    //     easing: 'easeOutQuad',
    //     duration: 2000,
    //     loop: true
    //   });
    // console.log(anime)

    // anime()

    return (
        <div>
            <p>running...</p>

            {/* <svg ref={imageRef} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1080 1080" enableBackground="new 0 0 1080 1080" xmlSpace="preserve">
                <g>
                    <path d="M521.3,202.8c28.4,1.1,55.8,17.1,70.9,41.2c8.7,13.8,13.9,30.5,26.7,40.6c13.2,10.4,31.3,11.2,48.1,12.7
		c32.6,2.9,66.2,10.9,91.6,31.6c25.4,20.7,40.5,56.7,29,87.4c-3.2,8.6-8.3,16.4-11.9,24.9c-14.7,34.4-4,73.5,1.7,110.4
		c3.3,21.4,4.7,43,4.4,64.7c-0.2,10.2-0.8,20.6-5.3,29.7c-10.1,20.2-35.3,27.1-57.7,30c-26.4,3.5-53,4.6-79.6,3.4
		c-20.4-0.9-41.3-3.2-61.1,2.3c-21.5,5.9-39.4,20.3-58.6,31.4c-40.5,23.5-88.9,33-135.3,26.6c-31.3-4.3-62.9-16.6-83.4-40.6
		s-27.2-61.4-9.9-87.9c13.8-21,38.6-31.2,60-44.4c21.4-13.2,42.2-34.9,38.3-59.8c-1.6-10.5-7.5-19.8-12.9-28.9
		c-16.5-27.9-29.8-57.8-39.4-88.8c-6.5-20.9-11.4-42.6-9.8-64.4c2.3-29.9,17.6-58.6,41.2-77.2S491.7,198,521.3,202.8" />
                </g>
            </svg> */}

            {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1080 1080" enableBackground="new 0 0 1080 1080" xmlSpace="preserve">
                <g id="Layer_1" display="none">
                    <g display="inline">
                        <path d="M521.3,202.8c28.4,1.1,55.8,17.1,70.9,41.2c8.7,13.8,13.9,30.5,26.7,40.6c13.2,10.4,31.3,11.2,48.1,12.7
			c32.6,2.9,66.2,10.9,91.6,31.6c25.4,20.7,40.5,56.7,29,87.4c-3.2,8.6-8.3,16.4-11.9,24.9c-14.7,34.4-4,73.5,1.7,110.4
			c3.3,21.4,4.7,43,4.4,64.7c-0.2,10.2-0.8,20.6-5.3,29.7c-10.1,20.2-35.3,27.1-57.7,30c-26.4,3.5-53,4.6-79.6,3.4
			c-20.4-0.9-41.3-3.2-61.1,2.3c-21.5,5.9-39.4,20.3-58.6,31.4c-40.5,23.5-88.9,33-135.3,26.6c-31.3-4.3-62.9-16.6-83.4-40.6
			s-27.2-61.4-9.9-87.9c13.8-21,38.6-31.2,60-44.4c21.4-13.2,42.2-34.9,38.3-59.8c-1.6-10.5-7.5-19.8-12.9-28.9
			c-16.5-27.9-29.8-57.8-39.4-88.8c-6.5-20.9-11.4-42.6-9.8-64.4c2.3-29.9,17.6-58.6,41.2-77.2S491.7,198,521.3,202.8" />
                    </g>
                </g>
            
            </svg> */}



            <svg className="svgg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enableBackground="new 0 0 500 500" xmlSpace="preserve">
                <path className="morph" d="M521.3,202.8c28.4,1.1,55.8,17.1,70.9,41.2c8.7,13.8,13.9,30.5,26.7,40.6c13.2,10.4,31.3,11.2,48.1,12.7
			c32.6,2.9,66.2,10.9,91.6,31.6c25.4,20.7,40.5,56.7,29,87.4c-3.2,8.6-8.3,16.4-11.9,24.9c-14.7,34.4-4,73.5,1.7,110.4
			c3.3,21.4,4.7,43,4.4,64.7c-0.2,10.2-0.8,20.6-5.3,29.7c-10.1,20.2-35.3,27.1-57.7,30c-26.4,3.5-53,4.6-79.6,3.4
			c-20.4-0.9-41.3-3.2-61.1,2.3c-21.5,5.9-39.4,20.3-58.6,31.4c-40.5,23.5-88.9,33-135.3,26.6c-31.3-4.3-62.9-16.6-83.4-40.6
			s-27.2-61.4-9.9-87.9c13.8-21,38.6-31.2,60-44.4c21.4-13.2,42.2-34.9,38.3-59.8c-1.6-10.5-7.5-19.8-12.9-28.9
			c-16.5-27.9-29.8-57.8-39.4-88.8c-6.5-20.9-11.4-42.6-9.8-64.4c2.3-29.9,17.6-58.6,41.2-77.2S491.7,198,521.3,202.8" fill="#000000"/>
                {/* <path d="M266,81c3,1,22-8,49,58c6.6,16.2-48.8,28-19,51S132,357,88,232s52-37,40-138S266,81,266,81z" /> */}
            </svg>

            

            {/* <img src={bg2} />
            <img src={img1} />
            {/* <img src={img2} /> */}
            {/* <canvas ref={canvasRef} id="hero-lightpass" /> */}















        </div>


    )
}
// 3db7dd28