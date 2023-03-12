import React, { useContext } from "react";
import { DataContext } from "../../context/Context";
import "./Cart.css";
const Cart = () => {
    const { cartItems, handleRemoveToCart, handleAddToCart } =
        useContext(DataContext);
    const total = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );
    return (
        <div className="cart">
            <div>
                <h3 className="cart-items">Cart Items</h3>
            </div>
            {cartItems.length === 0 && (
                <div className="cart-item-empty">No items are added</div>
            )}
            {cartItems.map((product) => (
                <div key={product.id} className="cart-item">
                    <div className="cart-img">
                        <img
                            className="cart-image"
                            src={product.image}
                            alt={product.name}
                        />
                        <div className="cart-name">{product.name}</div>
                    </div>
                    
                    <div className="cart-functions">
                        
                        <button
                            className="add-btn"
                            onClick={() => handleAddToCart(product)}
                        >
                            +
                        </button>
                        <button
                            className="remove-btn"
                            onClick={() => handleRemoveToCart(product)}
                        >
                            -
                        </button>
                    </div>
                    <div className="cart-total-price">
                        {product.quantity}*{product.price}₺
                    </div>
                </div>
            ))}
            {cartItems.length >= 1 && (
                <div className="total-price">Total Price: {total}₺</div>
            )}
        </div>
    );
};

export default Cart;
