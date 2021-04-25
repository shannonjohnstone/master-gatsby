import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../components/PizzaList';

export default function PizzaPage(props) {
  const { data } = props;

  return (
    <section>
      <h1>This is the Pizza Menu page</h1>
      <ul>
        <PizzaList pizzas={data.pizzas.nodes} />
      </ul>
    </section>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        name
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
