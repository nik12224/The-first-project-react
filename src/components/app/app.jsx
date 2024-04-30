import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper.jsx";
import { GlobalStyle } from "./styles.js";
// import starList from "../../mocks/starList.js";
import gallery from "../../mocks/gallery.js";


export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <PageWrapper slides={gallery} />
    </React.Fragment>
  );
}

