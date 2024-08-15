import React from "react";
import { Link } from 'react-router-dom';
import "./WishList.css";

const WishList = ({ wishlist, onRemoveItem }) => {
  const isEmpty = wishlist.length === 0;
  const totalItems = wishlist.length; // Calculate total number of items

  const EmptyCart = () => (
    <>
      <div className="alert">
        You have no items in your WishList, start adding some!
      </div>
      <Link to="/" className="button go-back">
        Go Back
      </Link>
    </>
  );

  const handleRemoveItem = (id) => {
    onRemoveItem(id);
  };

  const FilledWishList = () => (
    <div className="wishlist-items">
      {wishlist.map((item) => (
        <div key={item.id} className="wishlist-item">
          <div className="left_wishlist">
            <model-viewer 
              src={item.modelSrc}
              ios-src={item.iOSSrc}
              alt={item.name}
              camera-controls
              ar
              auto-rotate
              style={{ width: '150px', height: '150px' }}
            >
              {item.annotations.map((annotation, index) => (
                <button
                  key={index}
                  slot={annotation.slot}
                  data-position={annotation.position}
                  data-normal={annotation.normal}
                  data-orbit={annotation.orbit}
                  data-target={annotation.target}
                  className="annotation-button"
                  // onClick={() => console.log(annotation.title)}
                >
                </button>
              ))}
            </model-viewer>
            <div className="wishlist_btn">
              <button className="cart_btn1">Add to Cart</button>
              <button className="cart_btn2" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
          <div className="right_wishlist">
            <h3>{item.name}</h3>
            <h4>Category: {item.category}</h4>
            <h4>Color: {item.color}</h4>
            {item.price ? (
              <>
                <p className="mrp">M.R.P. : <del>₹{item.price.mrp}</del></p>
                <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{item.price.cost}.00</span></p>
                <p>You save : <span style={{ color: "#B12704" }}> ₹{item.price.mrp - item.price.cost} ({item.price.discount}) </span></p>
              </>
            ) : (
              <p className="no-price">Price information is not available</p>
            )}
          </div>
        </div>
      ))}
      <div className="wishlist-actions">
        <Link to="/" className="button go-back">
          Go Back
        </Link>
        <button className="payment-btn">Proceed to Payment</button>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h3 className="wishlist-title">Your WishList ({totalItems} items)</h3>
      <div className="wishlist-grid">
        <div className="wishlist-items-container">
          <div className="wishlist-paper">
            <h5 className="wishlist-heading">Added Items</h5>
            <hr className="divider" />
            {isEmpty ? <EmptyCart /> : <FilledWishList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
