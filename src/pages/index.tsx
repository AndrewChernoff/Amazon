import { useAppDispatch } from "@/store/hooks/hooks";
import { useEffect } from "react";
import { auth } from "../../lib/firebase";
import { User } from "firebase/auth";
import { signIn } from "@/store/reducers/userReducer";
import { BackgroundImg, HomeContainer, ProductRows } from "@/styles/homestyles";
import Product from "@/components/product/product";
import { useProducts } from "@/common/hooks/useProducts";
import { ProductType } from "@/common/types/product";
import { Loading } from "@/components/loader";
import bg from '@/common/imgs/background_amazon.jpg';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user: User | null) => {
      user && dispatch(signIn(user));
    });
  }, []);

  const { loading, error, data } = useProducts();

  if (loading) return <Loading />

  if (error) return <p>Error</p>

  return (
    <HomeContainer>
      <BackgroundImg
        src={`${bg}`}
        //alt="Amazon Background"
      />
      <ProductRows>
        {data?.products.map((el: ProductType) => {
          return (
              <Product
                key={el.id}
                id={el.id}
                image={el.images[0].url}
                title={el.name}
                price={el.price}
                rating={4}
              />
          );
        })}
      </ProductRows>
    </HomeContainer>
  );
}
