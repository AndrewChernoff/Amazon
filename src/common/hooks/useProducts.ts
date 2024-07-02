import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../../lib/graphql/query";


export const useProducts = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    return { loading, error, data }

}
