import React from 'react'
import Property from './Property'
export default function Featured() {
  return (
    <div>
        
      <section class="property" id="property">
        <div class="container">

          <p class="section-subtitle">Properties</p>

          <h2 class="h2 section-title">Featured Listings</h2>

          <ul class="property-list has-scrollbar">

           <Property image={"/images/serenti33.jpg"} title={"Comfortable Apartments"} price={"$3,200"}/>
           <Property image={"/images/property-1.jpg"}  title={"Morden Apartments"} price={"$4,900"}/>
           <Property image={"/images/photo-1600684388091-627109f3cd60.avif"} title={"New Apartment Nice View"} price={"$14,200"}/>
            </ul>

        </div>
    </section>
    </div>
  )
}
