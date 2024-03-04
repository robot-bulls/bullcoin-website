import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import About from "./IndexSections/About";
import Tokenomics from "./IndexSections/Tokenomics";
import Roadmap from "./IndexSections/Roadmap";
import Accordion from "./IndexSections/Accordion";



export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">

        <PageHeader />
        <div className="main">
          <Basics />
          <About></About>
          <Tokenomics></Tokenomics>
          <Roadmap></Roadmap>
          <Accordion></Accordion>
        </div>
        <Footer />
      </div>
    </>
  );
}
