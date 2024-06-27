import React, { useEffect, useState } from 'react';
import './App.css';
import imgone from './images/img1.jpg'
import imgtwo from './images/img2.jpg'
import imgthree from './images/img3.jpg'
import imgfour from './images/img4.jpg'

const Header = () => (
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/">Contacts</a>
      <a href="/">Info</a>
    </nav>
  </header>
);

const SliderItem = ({ src, author, title, topic, description }) => (
  <div className="item">
    <img src={src} alt={title} />
    <div className="content">
      <div className="author">{author}</div>
      <div className="title">{title}</div>
      <div className="topic">{topic}</div>
      <div className="des">{description}</div>
      <div className="buttons">
        <button>SEE MORE</button>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  </div>
);

const ThumbnailItem = ({ src, title, description }) => (
  <div className="item">
    <img src={src} alt={title} />
    <div className="content">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  </div>
);

const ArrowButtons = ({ onPrevClick, onNextClick }) => (
  <div className="arrows">
    <button id="prev" onClick={onPrevClick}>&lt;</button>
    <button id="next" onClick={onNextClick}>&gt;</button>
  </div>
);

const Carousel = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  const sliderItems = [
    {
      src: imgone,
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    },
    {
      src: imgtwo,
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    },
    {
      src: imgthree,
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    },
    {
      src: imgfour,
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    },
    // Add other slider items here
  ];

  const nextSlide = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    resetAutoNext();
  };

  const prevSlide = () => {
    setSliderIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
    resetAutoNext();
  };

  const resetAutoNext = () => {
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => nextSlide(), 7000);
    setTimeoutId(id);
  };

  useEffect(() => {
    resetAutoNext();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        {sliderItems.map((item, index) => (
          <SliderItem
            key={index}
            src={item.src}
            author={item.author}
            title={item.title}
            topic={item.topic}
            description={item.description}
            isVisible={index === sliderIndex}
          />
        ))}
      </div>
      <div className="thumbnail">
        {sliderItems.map((item, index) => (
          <ThumbnailItem
            key={index}
            src={item.src}
            title={item.title}
            description={item.description}
            isSelected={index === sliderIndex}
          />
        ))}
      </div>
      <ArrowButtons onPrevClick={prevSlide} onNextClick={nextSlide} />
      <div className="time"></div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
