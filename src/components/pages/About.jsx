import React from "react";

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import AboutCont from "../includes/AboutCont";

function About() {
  return (
    <>
      <Header type="sub"/>
      <Contents>
        <AboutCont />
      </Contents>
    </>
  );
}
export default About;
