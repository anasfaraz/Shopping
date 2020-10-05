import React from "react";
import "./Homepage.css";
import CarouselComp from "../main/CarouselComp";
import TrendingItems from "./TrendingItems";
function HomePage() {
  return (
    <div>
      {/*  Carousel  */}
      <div className="carousel">
        <CarouselComp />
      </div>
      <div className="treanding__items">
        <TrendingItems />
      </div>
      {/* preview*/}
    </div>
  );
}

export default HomePage;
