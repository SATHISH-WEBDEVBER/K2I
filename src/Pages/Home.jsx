import React from "react";
import Herosection from "../components/Herosection.jsx";
import Whatweoffer from "../components/Whatweoffer.jsx";
import Whyk2i from "../components/Whyk2i.jsx";
import Ourteam from "../components/Ourteam.jsx";
import Recentproject from "../components/Recentproject.jsx";

const Home = () => {
  return (
    <>
      <Herosection />
      <Whatweoffer />
      <Whyk2i />
      {/* <Recentproject /> */}
      <Ourteam />
    </>
  );
};

export default Home;
