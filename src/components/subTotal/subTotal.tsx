import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { removeAll, selectCartItemsCount, selectCartTotal } from "@/store/reducers/cartReducer";
import { Container, Delivery, TotalContainer } from "./styled";
import Price from "../price/price";
import { AmazonButton } from "@/styles/sharedstyles";

const SubTotal = () => {
  const dispatch = useAppDispatch();
  const subTotal = useAppSelector(selectCartTotal);
  const quantity = useAppSelector(selectCartItemsCount);

  const payHandler = () => {
    alert(`Payment proceeded successfully!`)
    dispatch(removeAll())
  }

  return (
    <Container>
      <Delivery>
        Your order qualifies for FREE Delivery in the UK. Delivery Details
        Select this option at checkout.
      </Delivery>
      <TotalContainer>
        <p>Total</p>
        <p>({quantity} items):</p>
        <Price itemPrice={subTotal} />
      </TotalContainer>
      <div>
        <input type="checkbox" />
        This order contains a gift
      </div>
      <AmazonButton onClick={payHandler}>Proceed to Checkout</AmazonButton>
    </Container>
  );
};

export default SubTotal;