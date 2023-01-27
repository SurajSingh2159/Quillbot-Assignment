import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TaskTable from '../TaskTable';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='carousel-wrapper'>
    <div >
        <span>
          <h1>Save time and write with confidence</h1>
        </span>
        <a href="https://quillbot.com/upgrade">
          <button type="button" className="button">
            Upgrade to Quillbot Premium
          </button>
        </a>
      </div>
    <Carousel >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Increase your productivity</h3>
        <p>Paraphrase more text at once to finish writing faster.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Access all modes</h3>
        <p>Get maximum control over how you paraphrase.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Scan for plagiarism</h3>
        <p>
        Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg"
        alt="Fourth slide"
      />

      <Carousel.Caption>
        <h3>Compare all mode outputs at once</h3>
        <p>
        Paraphrase in and compare outputs from all seven modes.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <TaskTable/>
  </div>
  )
}

export default CarouselComponent
