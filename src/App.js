import logo from './logo.svg';
import './App.css';
import { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import { Circles } from './cirlesAnimation/Circles'
import { ImageReveal } from './ImageReveal/ImageReveal'
import { ImageSlider } from './ImageSlider/ImageSlider'
// import { ImageSlider } from './ImageSlider/ImageSlider'
import { Test } from './Tests/Test'
import { ScrollTriggered } from './scrollTrigger/ScrollTrigger'
import { Anim } from './HowItWorksAnimation/Anim'

function App() {

  // let logoItem = useRef(null);

  // useEffect(() => {
  //   console.log(logoItem);
  //   TweenMax.to(
  //     logoItem.current,
  //     .60,
  //     {
  //       opacity: 1,
  //       y: -20,
  //       ease: Power3.easeOut
  //     }
    
  //   )
  // }, [])

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} ref={logoItem} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Circles /> */}

      {/* <ImageReveal /> */}

      {/* <ImageSlider /> */}

      {/* <Test /> */}

      {/* < ScrollTriggered /> */}


      <Anim />



    </div>
  );
}

export default App;
