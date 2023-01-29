import React from "react";
import NavBar from "../../components/Navigation/NavBar";
import LeftPane from "../../components/LeftPane/LeftPane";
import PostPane from "../../components/PostPane/PostPane";
import RightPane from "../../components/RightPane/RightPane";
import './Home.css'

function Home() {
  return (
    <div>
      <div className="navBarContainer">
        <NavBar />
      </div>

      <div className="bottomContainer">
        <LeftPane />
        <PostPane />
        <RightPane />
      </div>
    </div>
  );
}

export default Home;
