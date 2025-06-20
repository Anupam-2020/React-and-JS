import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext({
    products: [],
    currency: '',
    delivery_fee: null,
    search: '',
    setSearch: () => {},
    showSearch: Boolean, 
    setShowSearch: () => {},
    cartItems: {},
    setCartItems: () => {},
    addToCart: () => {},
    getCartItems: () => {}
});

const ShopContextProvider = ({children}) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        if(!size) {
            toast.error('Please select a size before adding to cart');
            return;
        }

        let cartData = {...cartItems};
        if(cartData[itemId]) {
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        } else {
                cartData[itemId] = {};
                cartData[itemId][size] = 1;
            }
        setCartItems(cartData);
    }


    const getCartItems = () => {
        let totalCount = 0;
        for(const items in cartItems) {
            for(const item in cartItems[items]) {
                try {
                    if(cartItems[items][item]) {
                        totalCount += cartItems[items][item];
                    }   
                } catch (e) {
                    console.error(`Error processing item ${items} with size ${item}:`, e);
                }
            }
        }
        return totalCount;
    }
    

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch, 
        setShowSearch,
        cartItems,
        setCartItems,
        addToCart,
        getCartItems
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;