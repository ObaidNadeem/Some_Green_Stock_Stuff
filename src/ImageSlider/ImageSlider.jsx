import React, { useRef, useEffect, useState } from 'react';
import { TweenLite, TweenMax, TimelineLite, Power2 } from 'gsap';
import './ImageSlider.css';
import image from './pictures/1.jpeg'
import image2 from './pictures/2.jpeg'
import image3 from './pictures/3.jpeg'
import CSSRulePlugin from 'gsap/CSSRulePlugin';


const Data = [
    {
        name: "Alex",
        company: "Tech",
        image: `${require("./pictures/image.jpg")}`,
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    },
    {
        name: "Harmain",
        company: "Food",
        testimonial: "Inventore labore sapiente dolorem reprehenderit eligendi expedita recusandae quas repellendus.",
        image: { image2 }
    },
    {
        name: "Ali",
        company: "Travel",
        testimonial: " dolorum explicabo laudantium quidem libero magni, accusantium neque esse facilis deserunt ipsa.",
        image: { image3 }
    }
]

export const ImageSlider = () => {
    let ImageList = useRef(null);
    let TestimonialList = useRef(null);

    const [state, setstate] = useState({
        active1: true,
        active2: false,
        active3: false,
        stop: false
    })

    useEffect(() => {

        TweenLite.to(TestimonialList.current.children[0], 0, {
            opacity: 1
        })
        console.log("Image List---->", ImageList.current)
        console.log("Image List---->", ImageList.current)

    }, [])

    const slideLeft = (index, duration, multipiled = 1) => {
        TweenLite.to(ImageList.children[index], duration, {
            x: -200 * multipiled,
            ease: Power2.easeOut

        })
    }

    const slideRight = (index, duration, multipiled = 1) => {
        TweenLite.to(ImageList.children[index], duration, {
            x: 200 * multipiled,
            ease: Power2.easeOut

        })
    }

    const fadeOut = (index,duration,delayed = 0) => {
        TweenLite.to(TestimonialList.current.children[index],duration, {
            opacity: 0,
            delay: delayed
        })
    }

    const fadeIn = (index,duration,delayed) => {
        TweenLite.to(TestimonialList.current.children[index],duration, {
            opacity: 1,
            delay: delayed
        })
    }

    const scale = (index,duration,scaled) => {
        TweenLite.from(ImageList.children[index],duration,{
            scale: scaled,
            ease: Power2.ease
        
        })
    }

    const nextSlide = () => {

        if (ImageList.children[0].classList.contains("active")) {
            
            setstate({ active1: false, active2: true })

           
            slideLeft(0, 1);
            slideLeft(1, 1);
            slideLeft(2, 1);
            
            scale(1,1,1.2)
            
            fadeOut(0,1)
            fadeIn(1,1)


        }
        else if (ImageList.children[1].classList.contains("active")) {
            setstate({ active2: false, active3: true })

            slideLeft(1, 1, 2)
            slideLeft(2, 1, 2)
            slideLeft(0, 1, 2)

            scale(2,1,1.2)

            fadeOut(1,1)
            fadeIn(2,1)


        }
        else if (ImageList.children[2].classList.contains("active")) {
            setstate({active3:true, stop: true })

            // slideLeft(0,1,0)
        }

    }



    const prevSlide = () => {
        if (ImageList.children[2].classList.contains("active")) {
            
            setstate({active3: false, active2: true})
            slideRight(2,1,-1)
            slideRight(1,1,-1)
            slideRight(0,1,-1)

            scale(1,1,1.2)

            fadeOut(2,1)
            fadeIn(1,1)

        }

        else if(ImageList.children[1].classList.contains("active")) {
            setstate({active2: false, active1: true})
            
            
            slideRight(2,1,0)
            slideRight(1,1,0)
            slideRight(0,1,0)

            scale(0,1,1.2)
        
            fadeOut(1,1)
            fadeIn(0,1)
        
        }
    }

   

    return (

        <div className="testimonial-container">

            <div onClick={prevSlide} className="arrow left">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style={{ "enable-background": "new 0 0 330 330" }} xmlSpace="preserve">
                    <path id="XMLID_29_" d="M100.606,100.606L150,51.212V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V51.212l49.394,49.394
	C232.322,103.535,236.161,105,240,105c3.839,0,7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213l-75-75
	c-5.857-5.858-15.355-5.858-21.213,0l-75,75c-5.858,5.857-5.858,15.355,0,21.213C85.251,106.463,94.749,106.463,100.606,100.606z" />
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>

            </div>

            <div ref={el => { ImageList = el }} className="t-images">
                <span className={state.active1 == true ? "active" : ""} >
                    <img src={image} />
                </span>
                <span className={state.active2 == true ? "active" : ""}>
                    <img src={image2} />
                </span>
                <span className={state.active3 == true ? "active" : ""}>
                    <img src={image3} />
                </span>
            </div>


            {/* Testimonail list */}

            <div ref={TestimonialList} className="t-text">
                <span className={state.active1 == true ? "active" : ""}>
                    <h4>{Data[0].testimonial}</h4>
                    <p>{Data[0].name}</p>
                    <p>{Data[0].company}</p>
                </span>
                <span className={state.active2 == true ? "active" : ""}>
                    <h4>{Data[1].testimonial}</h4>
                    <p>{Data[1].name}</p>
                    <p>{Data[1].company}</p>
                </span>
                <span className={state.active3 == true ? "active" : ""}>
                    <h4>{Data[2].testimonial}</h4>
                    <p>{Data[2].name}</p>
                    <p>{Data[2].company}</p>
                </span>

            </div>


            <div onClick={nextSlide} className="arrow right">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style={{ "enable-background": "new 0 0 330 330" }} xmlSpace="preserve">
                    <path id="XMLID_29_" d="M100.606,100.606L150,51.212V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V51.212l49.394,49.394
	C232.322,103.535,236.161,105,240,105c3.839,0,7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213l-75-75
	c-5.857-5.858-15.355-5.858-21.213,0l-75,75c-5.858,5.857-5.858,15.355,0,21.213C85.251,106.463,94.749,106.463,100.606,100.606z" />
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>

            </div>
        </div>
    )
}
