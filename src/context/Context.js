import { createContext, useState } from "react";
import data from "../Data/data";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [products, setProducts] = useState(data.productItems);
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id);
        console.log(productExist);
        if (productExist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...productExist,
                              quantity: productExist.quantity + 1,
                          }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    const handleRemoveToCart = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id);
        if (productExist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...productExist,
                              quantity: productExist.quantity - 1,
                          }
                        : item
                )
            );
        }
    };
    return (
        <DataContext.Provider
            value={{
                products,
                setProducts,
                cartItems,
                setCartItems,
                handleAddToCart,
                handleRemoveToCart
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
export default DataProvider;
