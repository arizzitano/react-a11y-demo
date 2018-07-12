import React from 'react';

const Carousel = () => (
  <div id="carousel">
    <div>
      <div className="slide">
        <a href="somepage.html?ref=Slide%201">
          <img src="slide1.jpg" />
          <div className="description">
            AU student wins engineering award for talking robot sign language interpreter.
          </div>
        </a>
      </div>
      <div className="slide">
        <a href="somepage.html?ref=Slide%202">
          <img src="slide2.jpg" />
          <div className="description">
            AU installs universally designed maps at multiple locations on campus.
          </div>
        </a>
      </div>
      <div className="slide">
        <a href="somepage.html?ref=Slide%203">
          <img src="slide3.jpg" />
          <div className="description">
            Group of AU students successfully advocates for Braille on beer cans.
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default Carousel;
