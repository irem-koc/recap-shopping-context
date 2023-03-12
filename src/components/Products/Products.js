import React, { useContext } from "react";
import { DataContext } from "../../context/Context";
import "./Products.css";
const Products = () => {
    const { products, handleAddToCart } = useContext(DataContext);
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="card">
                    <div className="card-image-section">
                        <img className="card-image" src={product.image} alt={product.name} />
                    </div>
                    <div className="card-name">{product.name}</div>
                    <div className="card-price">{product.price}₺</div>
                    <div className="card-button-section">
                        <button onClick={() =>handleAddToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
