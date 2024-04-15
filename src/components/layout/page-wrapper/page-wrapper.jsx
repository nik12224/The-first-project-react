import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <MainPage {...prop} />
      </Main>
      <Footer />
    </React.Fragment>
  );
}

export default PageWrapper;
