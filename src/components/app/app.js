import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import gallery from "../../mocks/gallery";
import { GlobalStyle } from "./styles";
// import starList from "../../mocks/starList.js";



export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <PageWrapper slides={gallery} />
    </React.Fragment>
  );
}

