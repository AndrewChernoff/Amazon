import React from "react";
import { AmazonButton, InCartButton } from "../../styles/sharedstyles";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { addToCart, selectCartItems } from "@/store/reducers/cartReducer";

type PropsType = {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
};

const AddToBasketButton = ({ id, title, image, price, rating }: PropsType) => {
  const dispatch = useAppDispatch();

  const isInCart = useAppSelector(selectCartItems).find((el) => el.id === id);

  const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      addToCart({
        id,
        title,
        image,
        price,
        rating,
        quantity: 0,
      })
    );
  };

  return (
    <>
      {isInCart ? (
        <InCartButton disabled={true}>Already in the Basket</InCartButton>
      ) : (
        <AmazonButton onClick={(e) => addToBasket(e)}>
          {"Add To Basket"}
        </AmazonButton>
      )}
    </>
  );
};

export default AddToBasketButton;
