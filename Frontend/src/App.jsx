import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";  // Add this import
import BookDetail from "./components/BookDetail";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/book/:id" element={<BookDetail />} />
          <Route 
            path="/art" 
            element={authUser ? <Cart /> : <Navigate to="/signup" />}  // Add this route
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;