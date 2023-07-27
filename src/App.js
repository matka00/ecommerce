import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
