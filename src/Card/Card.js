import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./Card.css";
import { Row, Col, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

function BooksCard() {

    return (
        <CardGroup>
            <Row className='mainRow'>
                <Col md="2">
                </Col>

                <Col md="3">
                    <Card>
                        <CardImg className='image'
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle>
                                <Button className='private'>
                                    Private
                                </Button>
                            </CardTitle>

                            <CardTitle tag="h5">
                                Book Name
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Author Name
                            </CardSubtitle>
                            <CardText>
                                <label class="mr-2 book-price-text poppins_bold"> Price :</label>
                                <label class="book-price-text poppins_bold"> 250.00 RS</label>
                            </CardText>

                            <CardText>
                                <span role="img" aria-label="star">⭐</span>
                                <label class="poppins_light ml-2 book_rating"> 4.6</label>
                            </CardText>

                            <Button className='gradient-button'>
                                View Description
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="3">
                    <Card>
                        <CardImg className='image'
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Book Name
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Author Name
                            </CardSubtitle>
                            <CardText>
                                <label class="mr-2 book-price-text poppins_bold"> Price :</label>
                                <label class="book-price-text poppins_bold"> 250.00 RS</label>
                            </CardText>

                            <CardText>
                                <span role="img" aria-label="star">⭐</span>
                                <label class="poppins_light ml-2 book_rating"> 4.6</label>
                            </CardText>

                            <Button>
                                View Description
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="3">
                    <Card>
                        <CardImg className='image'
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Book Name
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Author Name
                            </CardSubtitle>
                            <CardText>
                                <label class="mr-2 book-price-text poppins_bold"> Price :</label>
                                <label class="book-price-text poppins_bold"> 250.00 RS</label>
                            </CardText>

                            <CardText>
                                <span role="img" aria-label="star">⭐</span>
                                <label class="poppins_light ml-2 book_rating"> 4.6</label>
                            </CardText>

                            <Button>
                                View Description
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </CardGroup>
    );
}
export default BooksCard;