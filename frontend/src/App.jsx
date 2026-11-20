import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import PoemDetail from "./pages/PoemDetails";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import Poetry from "./pages/Poetry";
import AuthorDetail from "./pages/AuthorDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ReaderRegister from "./pages/ReaderRegister";
import AuthorRegister from "./pages/AuthorRegister";
import Login from "./pages/Login";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/books" element={<Books />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/poetry/:id" element={<PoemDetail />} />
          <Route path="/authors/:id" element={<AuthorDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register/reader" element={<ReaderRegister />} />
          <Route path="/register/author" element={<AuthorRegister />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;