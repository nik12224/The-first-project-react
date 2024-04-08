import React from "react";
import About from "../blocks/about/about";
import StarsList from "../blocks/stars-list/stars-list";

function MainPage({ stars }) {
  return (
    <React.Fragment>
      <About />
      <StarsList stars={stars} />
    </React.Fragment>
  );
}

export default MainPage;
