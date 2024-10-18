/* React */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Css */
import 'bootstrap/scss/bootstrap.scss';

/* Layouts */
import Layout from './layouts/Layout';

/* Pages */
import Home from './pages/home/index';
import AboutUs from './pages/about-us/index';
import Shop from './pages/shop/index';
import ContactUs from './pages/contact-us/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
);