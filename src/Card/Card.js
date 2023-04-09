import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import lock from "./lock.png";
import unlock from "./unlock.png";
import edit from "./edit.png";
import deleted from "./delete.png";
import addicon from "./addicon.png";
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
import { useQuery } from "react-query";

function BooksCard() {
  //for fetching books
  const { isLoading, error, data } = useQuery("myData", () =>
    fetch("http://localhost:8000/crud/books/read").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <CardGroup>
      <Row className="mainRow">
        {data.map((item) => (
          <Col className="column mb-5" key={item.id} item={item}>
            <Card className="card mt-5">
              <img src={lock} alt="Your Image" className="card-image" />{" "}
              <CardImg
                className="image"
                alt="Card image cap"
                src={item.CoverImage} // dynamic image URL from your API response
                top
              />
              <img
                src={addicon}
                alt="Your Image"
                className="card-image1"
                title="Add to My BookShelf"
              />
              <CardBody>
                <CardTitle tag="h5">{item.BookName}</CardTitle>
                <CardSubtitle className="text-muted" tag="h6">
                  {item.Author}
                </CardSubtitle>
                <CardText>
                  <label className="book-price-text poppins_bold">
                    {" "}
                    $ {item.Price}
                  </label>
                  <span role="img" aria-label="star">
                    ⭐ {item.Rating}{" "}
                  </span>
                </CardText>
                <div className="bottom">
                  <div className="pb-2">
                  <img src={edit} alt="Your Image" className="ed" />{" "}
                  <span> Edit </span>
                  <span className="px-3"> |</span>
                  <img src={deleted} alt="Your Image" className="de" />{" "}
                  <span> Delete </span>
                  </div>
                  <div>
                    <Button className="gradient-btn">View Description</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </CardGroup>
  );
}
export default BooksCard;
