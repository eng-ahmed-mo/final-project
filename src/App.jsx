import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CartContext } from "./components/Store/CartContext";
import { WishlistContext } from "./components/WishlistContaxt/WishlistContaxt";
import { Toaster } from "react-hot-toast";


export default function App() {
  const queryClient = new QueryClient();


  const initialCart = JSON.parse(localStorage.getItem("Cart Products")) || [];
  const [cartItems, setCartItems] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("Cart Products", JSON.stringify(cartItems));
  }, [cartItems]);


  const initialWishlist = JSON.parse(localStorage.getItem("Wishlist Products")) || [];
  const [wishlist, setWishlist] = useState(initialWishlist);

  useEffect(() => {
    localStorage.setItem("Wishlist Products", JSON.stringify(wishlist));
  }, [wishlist]);


  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-left"
        toastOptions={{
          duration: 3000,
          style: { fontSize: "14px" },
        }}
      />
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <WishlistContext.Provider value={{ wishlist, setWishlist }}>
          <RouterProvider router={routes} />
        </WishlistContext.Provider>
      </CartContext.Provider>
    </QueryClientProvider>
  );
}
