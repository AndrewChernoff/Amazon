import React from "react";
import { Title } from "../../styles/sharedstyles";
import AddToBasketButton from "../AddToBasketButton";
import { Info, ProductContainer } from "./styled";
import Price from "../price/price";
import Rating from "../rating/rating";

interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Product = ({ id, title, image, price, rating }: ProductProps) => {
  return (
    <ProductContainer>
      <img src={image} alt={title} />
      <Info>
        <Title>{title}</Title>
        <Price itemPrice={price}/>
        <Rating ratingNumber={rating}/>
      </Info>
    </ProductContainer>
  );
};

export default Product;