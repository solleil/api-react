
import React, { useState, useEffect } from 'react';

const Carrossel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: '/assets/images/geral/mdl1.png',
    
    },
   
    {
      image: '/assets/images/geral/mdl3.png',
     
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sobre">
      <div className="s0">
        <div id="meuCarrossel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {slides.map((_, index) => (
              <li
                key={index}
                data-target="#meuCarrossel"
                data-slide-to={index}
                className={index === activeIndex ? 'active' : ''}
              ></li>
            ))}
          </ol>

          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              >
                <img  className='slide-img' src={slide.image} alt={`Slide ${index + 1}`} />
                <div className="carousel-caption">
                  <h3>{slide.title}</h3>
                  <p>
                    <span className="blinking">{slide.text}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a className="carousel-control-prev" href="#meuCarrossel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#meuCarrossel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Próximo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
