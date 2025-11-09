import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

store.subscribe(() => {
  try {
    // CART persistence
    const cart = store.getState().cart;
    localStorage.setItem("cart", JSON.stringify(cart));

    // AUTH persistence
    const auth = store.getState().auth;
    if (auth.isAuthenticated) {
      localStorage.setItem("jwtToken", auth.jwtToken);
      localStorage.setItem("user", JSON.stringify(auth.user));
    } else {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("user");
    }
  } catch (error) {
    console.error("Failed to save data to localStorage:", error);
  }
});

export default store;
