import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      price
      images {
        id
        url
        fileName
        width
        height
      }
    }
  }
`;

export { GET_PRODUCTS };
