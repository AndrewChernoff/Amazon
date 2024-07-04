import Image from "next/image";
import { AmazonButton, CountButton, InCartBlock, Title } from "../../styles/sharedstyles";
import { Container, Info, TitleContainer } from "./styled";
import Price from "../price/price";
import { useAppDispatch } from "@/store/hooks/hooks";
import { decrease, increase, removeFromCart } from "@/store/reducers/cartReducer";

type IPropsType = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

const CheckoutProduct = ({ id, title, image, price, quantity }: IPropsType) => {
  const dispatch = useAppDispatch();

  const removeFromBasket = () => {
    dispatch(removeFromCart({ id }));
  };

  const increaseHandler = () => dispatch(increase({id}))
  const decreaseHandler = () => dispatch(decrease({id}))

  return (
    <Container>
      <Image src={image} alt={title} width={180} height={180} />

      <Info>
        <TitleContainer>
          <Title>{title}</Title>
          <Price itemPrice={price} />
        </TitleContainer>

        <InCartBlock>
          <div>
          <CountButton onClick={decreaseHandler} disabled={quantity === 1}>-</CountButton>
          <p>{quantity}</p>
          <CountButton onClick={increaseHandler}>+</CountButton>
          </div>
          <AmazonButton onClick={() => removeFromBasket()}>
          Remove from basket
        </AmazonButton>
        </InCartBlock>

      </Info>
    </Container>
  );
};

export default CheckoutProduct
