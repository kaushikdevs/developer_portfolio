import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TweenLite from "gsap";
import "./anim.css";
import App from "../../App";

const Cursor = () => {
  const ball: any = useRef();
  const ball_loader: any = useRef();
  let moveTween: any = useRef(),
    stateTween: any = useRef();

  useEffect(() => {
    console.log("add");
    addEventListeners();
    moveTween.current = gsap.to(ball.current, { duration: 0.4, paused: true });
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", handleMouseEvent);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", handleMouseEvent);
  };

  const handleMouseEvent = (t: any) => {
    var a = window.pageYOffset || document.documentElement.scrollTop;

    moveTween.current.vars.x = t.pageX - 30;
    moveTween.current.vars.y = t.pageY - 30 - a;

    moveTween.current.invalidate().restart();
  };

  const handleMouseEnter = () => {
    stateTween.current && stateTween.current.kill();
    stateTween.current = gsap
      .timeline()
      .to(ball.current, {
        duration: 0.3,
        borderWidth: "2px",
        scale: 1,
        borderColor: "#999999",
        backgroundColor: "#999999",
        opacity: ".3",
      })
      .to(
        ball_loader.current,
        {
          duration: 0.2,
          borderWidth: "2px",
          top: 2,
          left: 2,
        },
        0
      );
  };

  const handleMouseLeave = () => {
    stateTween.current && stateTween.current.kill();
    stateTween.current = gsap
      .timeline()
      .to(ball.current, {
        duration: 0.2,
        borderWidth: "4px",
        scale: 0.5,
        opacity: "1",
        borderColor: "#999999",
        backgroundColor: "transparent",
      })
      .to(
        ball_loader.current,
        {
          duration: 0.2,
          borderWidth: "4px",
          top: 0,
          left: 0,
        },
        0
      );
  };

  return (
    <>
      <App
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <div className="animated-cursor">
        <div className="cd-cover-layer"></div>
        <div id="magic-cursor">
          <div id="ball" ref={ball}>
            <div id="ball-drag"></div>
            <div id="ball-loader" ref={ball_loader}></div>
          </div>
        </div>
        <div id="clone-image"></div>
        <div id="rotate-device"></div>
      </div>
    </>
  );
};

export default Cursor;
