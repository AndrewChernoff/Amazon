import { Title } from "../../styles/sharedstyles";
import { Info, ProductContainer } from "./styled";
import Price from "../price/price";
import Rating from "../rating/rating";
import AddToBasketButton from "../addToBasketButton/addToBasketButton";
import Link from "next/link";

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
      <Link href={`/product/${id}`}>
        <img src={image} alt={title} />
        <Info>
          <Title>{title}</Title>
          <Price itemPrice={price} />
         {/*  <Rating ratingNumber={rating} /> */}
        </Info>
      </Link>

      <AddToBasketButton
        id={id}
        title={title}
        price={price}
        rating={rating}
        image={image}
      />
    </ProductContainer>
  );
};

export default Product;
