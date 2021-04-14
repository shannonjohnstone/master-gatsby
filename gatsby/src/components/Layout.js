import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  background: white url(${stripes});
  border: 5px solid white;
  background-size: ;

  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <div>
      <Typography />
      <GlobalStyles />
      <SiteBorderStyles>
        <ContentStyles>
          <Navigation />
          {children}
        </ContentStyles>
      </SiteBorderStyles>
      <Footer />
    </div>
  );
}
