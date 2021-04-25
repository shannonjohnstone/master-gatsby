import { Link } from 'gatsby';
import React from 'react';

function SinglePizza({ pizza }) {
  console.log(pizza.toppings, 'pizza.toppings');
  return (
    <li>
      <h2>
        <Link to={`/pizzas/${pizza.slug.current}`}>{pizza.name}</Link>
      </h2>
      <p>{pizza.toppings.map(({ name }) => name).join(', ')}</p>
    </li>
  );
}

export default function PizzaList({ pizzas }) {
  return (
    <ul>
      {pizzas.map((pizza) => (
        <SinglePizza pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
