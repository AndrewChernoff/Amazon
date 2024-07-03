import { CartType } from "@/common/types/cart";
import Advert from "@/components/advert/advert";
import CheckoutProduct from "@/components/checkoutProduct/checkoutProduct";
import SubTotal from "@/components/subTotal/subTotal";
import { useAppSelector } from "@/store/hooks/hooks";
import { selectCartItems, selectCartItemsCount } from "@/store/reducers/cartReducer";
import { CheckoutBody, CheckoutContainer, CheckoutTitle } from "@/styles/checkoutstyles";
import { Main } from "@/styles/sharedstyles";
import Container from "@mui/material/Container";


export default function Checkout() {
  const basket = useAppSelector(selectCartItems);
  const basketCount = useAppSelector(selectCartItemsCount);

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