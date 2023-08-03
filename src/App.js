import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/pages/Home";
import Layout from "./components/ui/Layout";
import ProductDetails from "./components/products/ProductDetails";
import { StateContext } from "./context/StateContext";
import Products from "./components/pages/Products";
import Bunnies from "./components/pages/Bunnies";
import Doggies from "./components/pages/Doggies";
import Froggies from "./components/pages/Froggies";
import Others from "./components/pages/Others";

function App() {
  return (
    <>
      <BrowserRouter>
        <StateContext>
          <Layout>
            <Toaster />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/bunnies/" element={<Bunnies />} />
              <Route
                path="/products/bunnies/:slug"
                element={<ProductDetails />}
              />
              <Route path="/products/doggies" element={<Doggies />} />
              <Route
                path="/products/doggies/:slug"
                element={<ProductDetails />}
              />
              <Route path="/products/froggies" element={<Froggies />} />
              <Route
                path="/products/froggies/:slug"
                element={<ProductDetails />}
              />
              <Route path="/products/others" element={<Others />} />
              <Route
                path="/products/others/:slug"
                element={<ProductDetails />}
              />
            </Routes>
          </Layout>
        </StateContext>
      </BrowserRouter>
    </>
  );
}

export default App;
