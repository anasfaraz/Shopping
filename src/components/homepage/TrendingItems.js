import React from "react";
import "./TrendingItems.css";
import { Card, Button } from "react-bootstrap";
import { ChevronRight, Grade, StarHalf } from "@material-ui/icons";
import data from "../productpage/data";
function TrendingItems() {
  return (
    <div className="treanding__items">
      <div className="heading__trend">
        <p className="title__trend">Trending products</p>
      </div>
      <div>
        {
          data.products.map(products =>
          
        <div className="trend_card_items">
          <div className="card__items">
        
            <Card className="card__img">
                <img   
                   src={require("../../assets/Men.jpg")}
                  className="image__cat"
                  alt=""
                />
                <div className="item__details">       
                         
                  <span className="item__type hide">{products.category}</span> <br />
                  <span className="item__Name hide">{products.name}</span> <br />
                  <div className="price__">
                    <span className="item__price">{products.price}</span>
                    <span
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        color: "#FFD700",
                        fontSize: "8px",
                      }}
                    >
                      <Grade />
                      <Grade />
                      <Grade />
                      <StarHalf style={{ color: "FFD700" }} />
                      <Grade style={{ color: "black" }} />
                    </span>{" "}
                  </div>
                </div>
            </Card>
          
        
        </div>
      </div>)}

      <div className="more">
        <Button href="link" className="more__items">
          Shop now
          <ChevronRight />
        </Button>
      </div>
    </div>
    </div>
  );
}

export default TrendingItems;
