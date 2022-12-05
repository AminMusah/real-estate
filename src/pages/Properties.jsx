import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Property from "../components/Property";

function Properties() {
  return (
    <div>
      <Header />
      <section class="property" id="property">
        <div class="container">
          <h1 class="section-subtitle">Properties</h1>

          <h2 class="h2 section-title">Property Listings</h2>

          <ul class="property-list has-scrollbar">
            <Property image={"/images/serenti21.jpg"} title={"Morden Apartments"} price={"$34,900"}/>
            <Property image={"/images/property-1.jpg"} title={"Comfortable Apartments"} price={"$4,700"}/>
            <Property image={"/images/property-2.jpg"} title={"New Apartment Nice View"} price={"$54,900"}/>
            <Property image={"/images/property-3.jpg"} title={"Comfortable Apartments"} price={"$94,400"}/>
            <Property image={"/images/property-4.png"}  title={"New Apartment Nice View"} price={"$36,000"}/>
            <Property image={"/images/serenti24.jpg"}  title={"Comfortable Apartments"} price={"$3,200"}/>
            <Property image={"/images/serenti27.jpg"} title={"Morden Apartments"} price={"$4,900"}/>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Properties;
