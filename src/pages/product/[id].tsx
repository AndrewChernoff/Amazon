import { useRouter } from "next/router";
import { Container, Main } from "../../styles/sharedstyles";
import Advert from "@/components/advert/advert";
import { useProduct } from "@/common/hooks/useProduct";
import ProductDetails from "@/components/productDetails";
import { Loading } from "@/components/loader";
import { ShowError } from "@/components/showError/showError";

export default function ProductInfo() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useProduct(id as string);

  if (loading) return <Loading/>


  const { product } = data

  return (
    <Container>
      <ShowError errorStatus={!!error}/>

      <Main>
        <Advert />
        <ProductDetails product={product} />
      </Main>
    </Container>
  );
}