import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import lock from "./lock.png";
import unlock from "./unlock.png";
import edit from "./edit.png";
import deleted from "./delete.png";
import "./Card.css";
import {
  Row,
  Col,
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function BooksCard() {
  return (
    <CardGroup>
      <Row className="mainRow m-5">
        <Col className="column mb-5">
          <Card className="card">
            <img src={lock} alt="Your Image" className="card-image" />{" "}
            <CardImg
              className="image"
              alt="Card image cap"
              src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509858637.jpg"
              top
            />
            <CardBody>
              <CardTitle tag="h5">This is Going to Hurt</CardTitle>
              <CardSubtitle className="text-muted" tag="h6">
                Adam Kay
              </CardSubtitle>
              <CardText>
                <label className="book-price-text poppins_bold">
                  {" "}
                  Price : $ 7.6
                </label>
                <span role="img" aria-label="star">
                  ⭐ 4.5{" "}
                </span>
              </CardText>
              <div className="pb-2">
                <img src={edit} alt="Your Image" className="ed" />{" "}
                <span> Edit </span>
                <span className="px-3"> |</span>
                <img src={deleted} alt="Your Image" className="de" />{" "}
                <span> Delete </span>
              </div>
              <div>
                <Button className="gradient-button">View Description</Button>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col className="column mb-5">
          <Card className="card">
            <img src={unlock} alt="Your Image" className="card-image" />{" "}
            <CardImg
              className="image"
              alt="Card image cap"
              src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8452/9781845298258.jpg"
              top
            />
            <CardBody className="border-wrapper">
              <CardTitle tag="h5">Thinking, Fast and Slow</CardTitle>
              <CardSubtitle className="text-muted" tag="h6">
                Daniel Kahneman
              </CardSubtitle>
              <CardText>
                <label className="book-price-text poppins_bold">
                  {" "}
                  Price : $ 7.6
                </label>
                <span role="img" aria-label="star">
                  ⭐ 4.5{" "}
                </span>
              </CardText>
              <div className="pb-2">
                <img src={edit} alt="Your Image" className="ed" />{" "}
                <span> Edit </span>
                <span className="px-3"> |</span>
                <img src={deleted} alt="Your Image" className="de" />{" "}
                <span> Delete </span>
              </div>
              <div>
                <Button className="gradient-button">View Description</Button>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col className="column mb-5">
          <Card className="card">
            <img src={lock} alt="Your Image" className="card-image" />{" "}
            <CardImg
              className="image"
              alt="Card image cap"
              src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509858637.jpg"
              top
            />
            <CardBody className="border-wrapper">
              <CardTitle tag="h5">This is Going to Hurt</CardTitle>
              <CardSubtitle className="text-muted" tag="h6">
                Adam Kay
              </CardSubtitle>
              <CardText>
                <label className="book-price-text poppins_bold">
                  {" "}
                  Price : $ 7.6
                </label>
                <span role="img" aria-label="star">
                  ⭐ 4.5{" "}
                </span>
              </CardText>
              <div className="pb-2">
                <img src={edit} alt="Your Image" className="ed" />{" "}
                <span> Edit </span>
                <span className="px-3"> |</span>
                <img src={deleted} alt="Your Image" className="de" />{" "}
                <span> Delete </span>
              </div>
              <div>
                <Button className="gradient-button">View Description</Button>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col className="column mb-5">
          <Card className="card">
            <img src={unlock} alt="Your Image" className="card-image" />{" "}
            <CardImg
              className="image"
              alt="Card image cap"
              src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8452/9781845298258.jpg"
              top
            />
            <CardBody className="border-wrapper">
              <CardTitle tag="h5">Thinking, Fast and Slow</CardTitle>
              <CardSubtitle className="text-muted" tag="h6">
                Daniel Kahneman
              </CardSubtitle>
              <CardText>
                <label className="book-price-text poppins_bold">
                  {" "}
                  Price : $ 7.6
                </label>
                <span role="img" aria-label="star">
                  ⭐ 4.5{" "}
                </span>
              </CardText>
              <div className="pb-2">
                <img src={edit} alt="Your Image" className="ed" />{" "}
                <span> Edit </span>
                <span className="px-3"> |</span>
                <img src={deleted} alt="Your Image" className="de" />{" "}
                <span> Delete </span>
              </div>
              <div>
                <Button className="gradient-button">View Description</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </CardGroup>
  );
}
export default BooksCard;
