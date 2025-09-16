import React from "react";

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ArtistsCont from "../includes/ArtistsCont";

function Artists() {
  return (
    <>
      <Header type="sub"/>
      <Contents>
        <ArtistsCont />
      </Contents>
    </>
  );
}
export default Artists;
