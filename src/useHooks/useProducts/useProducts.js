import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://vast-plateau-80261.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};
export default useProducts;
