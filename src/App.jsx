import { useState } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import "./App.css";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
