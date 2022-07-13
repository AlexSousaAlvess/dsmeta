import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import SalesCard from "../../components/SalesCard";

function Dashboard() {
  return (
    <>
      <Header />
      <Nav/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default Dashboard;