import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductListing from "./ProductListing";
import ProductDetail from "./ProductDetails";
import "./App.css";
import HomePage from "./HomePage";
import Breadcrumbs from "./Breadcrumbs";

const App = () => {

  return (
    <Router>
      <div className="app">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;