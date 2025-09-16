import React from "react";

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContactCont from "../includes/ContactCont";

function Contact() {
  return (
    <>
      <Header type="sub"/>
      <Contents>
        <ContactCont />
      </Contents>
    </>
  );
}
export default Contact;
