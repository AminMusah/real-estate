import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Property from "../components/Property";
import products from "../../data";

function Properties() {
  return (
    <div>
      <Header />
      <section className="property" id="property">
        <div className="container">
          <h1 className="section-subtitle">Properties</h1>

          <h2 className="h2 section-title">Property Listings</h2>

          <ul className="property-list has-scrollbar">
            {products.map((item) => {
              return (
                <Property
                id={item.id}
                  image={item.image}
                  title={item.name}
                  price={item.price}
                />
              );
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Properties;
