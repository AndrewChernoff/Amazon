import React from "react";
import { AmazonButton } from "../../styles/sharedstyles";
import { useAppDispatch } from "@/store/hooks/hooks";
import { addToCart } from "@/store/reducers/cartReducer";

type PropsType = {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const AddToBasketButton = ({
  id,
  title,
  image,
  price,
  rating,
}: PropsType) => {
  const dispatch = useAppDispatch();
  const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      addToCart({
        id,
        title,
        image,
        price,
        rating,
      })
    );
  };

  return (
    <AmazonButton onClick={(e) => addToBasket(e)}>Add To Basket</AmazonButton>
  );
};

export default AddToBasketButton;