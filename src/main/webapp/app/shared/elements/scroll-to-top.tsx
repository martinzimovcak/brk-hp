import React, {Component, ComponentClass, HTMLAttributes, useEffect, useState} from 'react';
import {animateScroll} from 'react-scroll';

interface IScrollToTopProps extends HTMLAttributes<HTMLButtonElement>{
  offset?: number
}

const ScrollToTop = (props: IScrollToTopProps) => {
  const [offset] = useState(props.offset || 1000);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > offset) {
        setShow(true)
      } else {
        setShow(false)
      }
    })

    return () => {}
  }, [])


  return (
    <>
      {show && (
        <button className={`scroltop ${props.className}`} type="button"
                onClick={() => animateScroll.scrollToTop()}
                style={{display: "block"}}>
          <i className="fa fa-arrow-up"/>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
