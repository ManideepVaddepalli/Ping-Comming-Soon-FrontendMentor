import React from "react";
import Toplogo from "./Toplogo";
import Emailsection from "./Emailsection";
import Centerpic from "./Centerpic";
import Bottomcontent from "./Bottomcontent";

export default function App() {
  return (
    <>
      <div className="total-content">
        <Toplogo />
        <Emailsection />
        <Centerpic />
      </div>
      <Bottomcontent />
    </>
  );
}
