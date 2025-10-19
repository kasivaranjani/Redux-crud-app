import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PostList from "./components/PostList";
import Posts from "./components/Posts";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="posts" element={<Posts />}>
            <Route path="postlist" element={<PostList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import { Link } from "react-router-dom";
