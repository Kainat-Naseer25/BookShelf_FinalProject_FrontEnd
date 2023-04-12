import React, { useEffect, useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, CardGroup, Row } from 'reactstrap';
import "./PublicLibrary.css";
import { useQuery } from "react-query";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import BooksCard from '../Card/Card';
import "../App.css"
import ViewDescription from '../ViewDescription/ViewDescription';
import { useDispatch, useSelector } from 'react-redux';

const items = [
  {
    src: slide1,
    caption: '"Books are a uniquely portable Magic"',
  },
  {
    src: slide2,
    caption: '"Today a Reader, tomorrow a Leader"',
  },
  {
    src: slide3,
    caption: '"There is no Friend as Loyal as Book"',
  },
  {
    src: slide4,
    caption: '"Happiness is reading Books at Night"',
  },
];

const PublicLibrary = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
        <img src={item.src} alt={item.altText} className="images"  />
        <CarouselCaption captionText={item.caption} />
      </CarouselItem>
    );
  });
    const dispatch = useDispatch();
    const { descriptionModal, cdata } = useSelector(
        (state) => ({
          descriptionModal: state.appReducer.descriptionModal,
          cdata: state.appReducer.cdata,
        })
      );

    useEffect(() => {
        dispatch({type: "TYPE", payload: "public"});
      },[]);
    const { isLoading, error, data } = useQuery("myData", () =>
        fetch(`http://localhost:8000/crud/books/public/read`).then(
            (res) => res.json()
        )
    );
    if (isLoading) return "Loading...";

    if (error) return `An error has occurred: ${error.message}`;

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={5000}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default PublicLibrary;
