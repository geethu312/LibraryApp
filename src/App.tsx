import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import imagePath from "../src/Images/Logo.png";
import DisplaySearch from "./pages/DisplaySearch/DisplaySearch";
import ContactUs from "./pages/ContactUs/ContactUs";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Signup/SignUp";
import NotFoundPage from "./pages/NoRoutesFound/NoRoutesFound";
import AddBook from "./components/AddBooks/AddBooks";
import { AppContextProvider } from "./common/AppContext";
import { AppData } from "./common/AppData";
import EditBooks from "./components/EditBooks/EditBooks";

function App() {
  let items = ["Home", "Books", "Contact Us"];
  const [books, setBooks] = useState(AppData.books);
  return (
    <>
      <AppContextProvider value={{ books, setBooks }}>
        <div>
          <NavBar
            brandName="THE BOOK SHOP"
            imageSrcPath={imagePath}
            navItems={items}
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<DisplaySearch />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBooks />} />
        </Routes>
      </AppContextProvider>
    </>
  );
}

export default App;
