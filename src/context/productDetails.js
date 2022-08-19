import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { getProduct } from "../api/queries";
import { processOrder } from "../api/mutations";

const ProductDetailContext = React.createContext();

const ProductDetailProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  // const checkout = async (orderDetails) => {
  //   const payload = {
  //     id: uuidv4(),
  //     ...orderDetails
  //   };
  //   try {
  //     await API.graphql(graphqlOperation(processOrder, { input: payload }));
  //     console.log("Order is successful");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const fetchProduct = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: getProduct,
        authMode: "API_KEY"
      });
      const product = data.getProduct;
      setProduct(product);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductDetailContext.Provider value={{ product, loading }}>
      {children}
    </ProductDetailContext.Provider>
  );
};

export { ProductDetailContext, ProductDetailProvider };
