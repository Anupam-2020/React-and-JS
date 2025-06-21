import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
    getCartItems: () => {},
    updatedCartItems: () => {},
    getTotalAmount: () => {},
    navigate: () => {}
});

const ShopContextProvider = ({children}) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if(!size) {
            toast.error('Please select a size before adding to cart');
            return;
        }

        // let cartData = {...cartItems};
        // if(cartData[itemId]) {
        //     if(cartData[itemId][size]) {
        //         cartData[itemId][size] += 1;
        //     }
        //     else {
        //         cartData[itemId][size] = 1;
        //     }
        // } else {
        //         cartData[itemId] = {};
        //         cartData[itemId][size] = 1;
        //     }
        // setCartItems(cartData);

        let cartData = [...cartItems];
        const itemIndex = cartItems.findIndex(item => item._id === itemId);
        if(itemIndex !== -1) {
            if(cartData[itemIndex].sizes[size]) {
                cartData[itemIndex].sizes[size] += 1;
            } else {
                cartData[itemIndex].sizes[size] = 1;
            }
        } else {
            const product = products.find(product => product._id === itemId);
            if(product) {
                cartData.push({...product, sizes: {[size]: 1}});
            }
        }
        setCartItems(cartData);
    }


    const getCartItems = () => {
        // let totalCount = 0;
        // for(const items in cartItems) {
        //     for(const item in cartItems[items]) {
        //         try {
        //             if(cartItems[items][item]) {
        //                 totalCount += cartItems[items][item];
        //             }   
        //         } catch (e) {
        //             console.error(`Error processing item ${items} with size ${item}:`, e);
        //         }
        //     }
        // }
        // return totalCount;
        const totalCount = cartItems.reduce((total, item) => {
            const sizes = Object.values(item.sizes);
            
            const itemTotal = sizes.reduce((sum, sizeCount) => sum + sizeCount, 0);
            return total + itemTotal;
        } , 0);
        return totalCount;
    }


    const getTotalAmount = () => {
        let totalPrice = cartItems.reduce((total, item) => {
            const sizes = Object.values(item.sizes);
            const prices = sizes.reduce((acc, size) => item.price * size + acc, 0)
            return prices + total;
        }, 0)
        return totalPrice;
    }


    const updatedCartItems = (id, size, quantity) => {
        const updatedCart = cartItems.map(item => {
            if (item._id === id) {
                const updatedSizes = { ...item.sizes };

                if (quantity === 0) {
                    delete updatedSizes[size];
                } else {
                    updatedSizes[size] = quantity;
                }

                // If no sizes left, this item will be removed later
                if (Object.keys(updatedSizes).length === 0) return null;

                return { ...item, sizes: updatedSizes };
            }
            return item;
            });
        // Remove nulls (products with no sizes left)
        const filteredCart = updatedCart.filter(item => item !== null);
        setCartItems(filteredCart);
    };

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
        getCartItems,
        updatedCartItems,
        getTotalAmount,
        navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;