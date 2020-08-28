import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Look at these MOUTH-WATERING menus!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="images/sandwich.jpg"
              text="The jalapeno will drench you in sweat"
              label="Sandwich"
            />
            <CardItem
              src="images/drinks.jpg"
              text="Unique refreshment to lighten up your lunch"
              label="Drinks"
            />
            <CardItem
              src="images/steak.jpg"
              text="A perfect romantic dinner with your loved one"
              label="Steak"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/burger.jpg"
              text="It will make you drool by its flavor"
              label="Burger"
            />
            <CardItem
              src="images/salad.jpg"
              text="Wanna try our specialties? It got 5 stars from the Chef Jono"
              label="Vegetables"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
