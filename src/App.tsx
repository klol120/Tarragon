/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Products from './pages/Products';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
