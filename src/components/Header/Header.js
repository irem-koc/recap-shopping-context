import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Context";
import "./Header.css";
const Header = () => {
    const {cartItems} = useContext(DataContext)
    return (
        <div className="header">
            <div>
                <ul>
                    <li className="header-logo">
                        <Link to="/">Electronics Shop</Link>
                    </li>
                </ul>
            </div>
            <div className="header-logo-list">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart">
                            <span>{cartItems.length}</span>
                            <i className="fa fa-shopping-cart"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
