import Hero from "../../components/hero";
import React from "react";
import RootLayout from "../../layout";

const Home = () => {
  return (
    <RootLayout page={"/"}>
      <Hero />
      <p>About Me</p>
    </RootLayout>
  );
};

export default Home;
