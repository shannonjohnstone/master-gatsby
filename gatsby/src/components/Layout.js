import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
