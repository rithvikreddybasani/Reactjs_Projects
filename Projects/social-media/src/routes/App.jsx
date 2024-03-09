import { useState } from "react";
import "./App.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import CardItems from "../Components/CardItems";
import Forms from "../Components/Forms";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [sectionSelected, setsectionSelected] = useState("Home");

  return (
    <PostListProvider>
      <div className="container-class">
        <Sidebar
          realValue={sectionSelected}
          setsectionSelected={setsectionSelected}
        ></Sidebar>
        <center className="content-class">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </center>
      </div>
    </PostListProvider>
  );
}

export default App;
