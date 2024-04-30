import React from "react";
import CafeGallery from "../blocks/cafe-gallery/cafe-gallery";
import Buy from "../blocks/buy/buy";

function BuyPage({ slides }) {
  return (
    <React.Fragment>
      <CafeGallery slides={slides} />
      <Buy />
    </React.Fragment>
  );
}

export default BuyPage;