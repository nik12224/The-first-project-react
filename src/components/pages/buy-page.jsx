import React from "react";
import CafeGallery from "../blocks/cafe-gallery/cafe-gallery";

function BuyPage({ slides }) {
  return (
    <React.Fragment>
      <CafeGallery slides={slides} />
    </React.Fragment>
  );
}

export default BuyPage;