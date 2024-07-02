import { useRouter } from "next/router";
import { Container, Main } from "../../styles/sharedstyles";
import Advert from "@/components/advert/advert";
import { useProduct } from "@/common/hooks/useProduct";
import ProductDetails from "@/components/productDetails";

export default function ProductInfo() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useProduct(id as string);

  if (loading) return <p>Loading</p>
  if (error) return <p>error</p>

  const { product } = data;

  return (
    <Container>
      <Main>
        <Advert />
        <ProductDetails product={product} />
      </Main>
    </Container>
  );
}