import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import CardItems from "./Components/CardItems";
import Forms from "./Components/Forms";
import PostListProvider from "./store/post-list-store";

function App() {
  const [sectionSelected, setsectionSelected] = useState();

  return (
    <PostListProvider>
      <div className="container-class">
        <Sidebar
          realValue={sectionSelected}
          setsectionSelected={setsectionSelected}
        ></Sidebar>
        <center className="content-class">
          <Header></Header>
          {sectionSelected === "Createpost" ? (
            <Forms></Forms>
          ) : (
            <CardItems></CardItems>
          )}
          <Footer></Footer>
        </center>
      </div>
    </PostListProvider>
  );
}

export default App;
