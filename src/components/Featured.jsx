import React from 'react'
import Property from './Property'
import products from '../../data';
export default function Featured() {
  return (
    <div>
        
      <section className="property" id="property">
        <div className="container">

          <p className="section-subtitle">Properties</p>

          <h2 className="h2 section-title">Featured Listings</h2>

          <ul className="property-list has-scrollbar">

          {products.slice(0,3).map((item) => {
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
    </div>
  )
}
