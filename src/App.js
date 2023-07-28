import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/ui/Layout";
import ProductDetails from "./components/products/ProductDetails";
import { useEffect, useState } from "react";
import { client } from "./library/client";

function App() {
  const [products, setProducts] = useState(null);
  const [bannerProduct, setBannerProduct] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
          name,
          slug,
          price,
          details,
          "image": image[]{
            "url": asset->url,
          },
          hexCode,
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "banner"]{
          buttonText,
          product,
          description,
          smallText,
          midText,
          largeText1,
          largeText2,
          discount,
          saleTime,
          image,
          hexCode,
        }`
      )
      .then((data) => setBannerProduct(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home products={products} bannerProduct={bannerProduct} />
              }
            />
            <Route path="/products/:slug" element={<ProductDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
