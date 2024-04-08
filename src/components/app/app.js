import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";
import starList from "../../mocks/starList";


export default function App() {
  return <PageWrapper stars={starList} />;
}

