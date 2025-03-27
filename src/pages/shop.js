import "../styles/shop.css"
import React, { useState } from "react";
import Navbar from "../components/NavBar";

const products = [
  { name: "Eco Bag", price: 10, image: "/Images/shop_images/eco-bag.jpeg" },
  { name: "Recycled Bottle", price: 8, image: "/Images/shop_images/recycled-bottle.jpeg" },
  { name: "Bamboo Straw", price: 5, image: "/Images/shop_images/bamboo-straw.jpg" },
  { name: "Recycled Paper Notebook", price: 12, image: "/Images/shop_images/notebook.jpeg" },
  { name: "Upcycled Glass Bottle Vase", price: 15, image: "/Images/shop_images/UpcycledBottleVaseSquare1.jpg" },
  { name: "Recycled Plastic Phone Case", price: 10, image: "/Images/shop_images/plastic-phone-case.jpg" },
];

const Product = ({ product, addToCart }) => (
  <div className="product">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

const CartSidebar = ({ cart, removeFromCart, closeCart }) => (
  <div id="cart-sidebar" className="cart-sidebar">
    <h2>Your Cart</h2>
    <ul>
      {cart.map((item, index) => (
        <li key={index}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </li>
      ))}
    </ul>
    <p>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</p>
    <button id="checkout-btn">Checkout</button>
    <button onClick={closeCart}>Close</button>
  </div>
);

const ShopPage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const toggleCart = () => setShowCart(!showCart);


  return (
    <div className="maindiv">
            <Navbar />
      <div className="hero">
        <div className="overlay1"></div>
        <div className="hero-content">
          <h1>Eco-Friendly Products for Sustainable Living</h1>
          <p>Shop at Greencan. All products are eco-friendly.</p>
          <div className="hero-buttons">
            <button className="primary-button">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="maindiv2">
        <p className="p90">
          Welcome to <span>GreenCan Shop</span>, your go-to destination for
          <span> eco-friendly, recycled, and upcycled </span> products that help you live sustainably.
        </p>
        <hr />
        <button id="cart-btn" onClick={toggleCart}>Cart ({cart.length})</button>

        <div className="shop-container">
          <p className="p240">Shop</p>
          <div className="shop-container">
            {products.map((product, index) => (
              <Product key={index} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>

      {showCart && <CartSidebar cart={cart} removeFromCart={removeFromCart} closeCart={toggleCart} />}
    </div>
  );
};

export default ShopPage;
