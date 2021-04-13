import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  background: red;
`;

export default function Navigation() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizza/">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters/">Slice masters</Link>
        </li>
        <li>
          <Link to="/orders/">Orders</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
