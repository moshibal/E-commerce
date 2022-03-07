import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const CardItem = ({
  _id,
  name,
  image,

  rating,
  numReviews,
  price,
}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img variant="top" src={image} />
      </Link>

      <Card.Body>
        <Card.Title>
          <Link to={`/product/${_id}`}>
            <strong>{name}</strong>
          </Link>
        </Card.Title>
        <Card.Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
