import React from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import Cursor from './components/Cursor';
import './App.scss';

const App = () => (
  <div className='app'>
    <Navbar />
    <Cursor />

    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
