import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CardGroup,
  Row,
  Col,
} from "reactstrap";
import "./PublicLibrary.css";
import { useQuery } from "react-query";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import BooksCard from "../Card/Card";
import "../App.css";
import ViewDescription from "../ViewDescription/ViewDescription";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import { Alert, Spinner } from "react-bootstrap";

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
        <img src={item.src} alt={item.altText} className="images" />
        <CarouselCaption captionText={item.caption} />
      </CarouselItem>
    );
  });
  const dispatch = useDispatch();
  const { descriptionModal, cdata, menu, search } = useSelector((state) => ({
    descriptionModal: state.appReducer.descriptionModal,
    cdata: state.appReducer.cdata,
    menu: state.appReducer.menu,
    search: state.appReducer.search,
  }));

  useEffect(() => {
    dispatch({ type: "TYPE", payload: "public" });
  }, []);
  const { isLoading, data, isError } = useQuery("myData", () =>
    fetch(`http://localhost:8000/crud/books/public/read/${menu}`).then((res) =>
      res.json()
    )
  );

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={5000}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      {isLoading && (
        <div className="p-5 d-flex align-items-center justify-content-center">
          <Spinner animation="border" />
        </div>
      )}

      {isError && (
        <div
          className="p-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert
            style={{
              width: "220px",
              height: "50px",
              background: "linear-gradient(to right, #36b8f0, #e95897)",
              color: "white",
            }}
          >
            <p>
              <b>Error:</b> An error occurred
            </p>
          </Alert>
        </div>
      )}
      <div className="dashboard">
        {data && data.length === 0 && (
          <p>Currently No Books in Public Library</p>
        )}
        <CardGroup>
          <Row className="mainRow">
            {data &&
              menu !== "Search" &&
              data.map((key, index) => (
                <BooksCard
                  className="column mb-5"
                  key={index}
                  item={key}
                  data={data}
                />
              ))}
            {menu === "Search" &&
              search &&
              search.map((key, index) => (
                <BooksCard
                  className="column mb-5"
                  key={index}
                  item={key}
                  data={search}
                />
              ))}
            {descriptionModal && <ViewDescription data={cdata} />}
          </Row>
        </CardGroup>
      </div>
    </div>
  );
};

export default PublicLibrary;