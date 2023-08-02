import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/pages/Home";
import Layout from "./components/ui/Layout";
import ProductDetails from "./components/products/ProductDetails";
import { useEffect, useState } from "react";
import { client } from "./library/client";
import { StateContext } from "./context/StateContext";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products"]{
          name,
          slug,
          species,
          price,
          description,
          details,
          materials,
          size,
          treatment,
          "image": image[]{
            "url": asset->url,
          },
          hexCode,
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <BrowserRouter>
        <StateContext>
          <Layout>
            <Toaster />
            <Routes>
              <Route path="/" exact element={<Home products={products} />} />
              <Route path="/products/:slug" element={<ProductDetails />} />
            </Routes>
          </Layout>
        </StateContext>
      </BrowserRouter>
    </>
  );
}

export default App;
