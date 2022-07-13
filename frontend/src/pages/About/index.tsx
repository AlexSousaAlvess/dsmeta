import React from "react";
import CardInformation from "../../components/CardInformation";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import SalesCard from "../../components/SalesCard";

function About() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <CardInformation/>
          </div>
        </section>
      </main>
    </>
  )
}

export default About;