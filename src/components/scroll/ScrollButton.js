import React, { useState } from 'react';
import './style.css'

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className='btns'>
        <i className="fas fa-arrow-circle-up" onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }}></i>
    </div>
  );
}

export default ScrollButton;