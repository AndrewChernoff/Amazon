import WithAuth from "@/common/hoc/withAuth";
import { CartType } from "@/common/types/cart";
import Advert from "@/components/advert/advert";
import CheckoutProduct from "@/components/checkoutProduct/checkoutProduct";
import SubTotal from "@/components/subTotal/subTotal";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { removeAll, selectCartItems, selectCartItemsCount } from "@/store/reducers/cartReducer";
import { CheckoutBody, CheckoutContainer, CheckoutTitle } from "@/styles/checkoutstyles";
import { AmazonButton, Main } from "@/styles/sharedstyles";
import Container from "@mui/material/Container";


function Checkout() {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(selectCartItems);
  const basketCount = useAppSelector(selectCartItemsCount);

  const removeAllProducts = () => {
    dispatch(removeAll())
  }

  return (
    <Container>
      <Main>
        <Advert />
        <CheckoutBody>
          <CheckoutContainer>
            {basket.length === 0 ? (
              <div>
                <h2>Your Shopping Basket is empty</h2>
              </div>
            ) : (
              <div>
                <CheckoutTitle>
                  Your Shopping Basket - {basketCount}{" "}
                  {basketCount > 1 ? "items" : "item"} in basket
                </CheckoutTitle>
                <AmazonButton onClick={removeAllProducts}>Remove products</AmazonButton>
                {basket.map((item: CartType, index: number) => (
                  <CheckoutProduct
                    key={index}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
              </div>
            )}
          </CheckoutContainer>
          {basket?.length > 0 && <SubTotal />}
        </CheckoutBody>
      </Main>
    </Container>
  );
}

export default WithAuth(Checkout)