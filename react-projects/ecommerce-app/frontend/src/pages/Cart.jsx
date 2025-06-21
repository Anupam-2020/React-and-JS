import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { cartItems, currency, updatedCartItems, navigate } = useContext(ShopContext);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartItems.map((product) => {
          const sizeKeys = Object.keys(product.sizes);
          return sizeKeys.map((sizeLabel) => {
            const sizeCount = product.sizes[sizeLabel];
            return (
              <div
                key={`${product._id}-${sizeLabel}`}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <Link
                    to={`/product/${product._id}`}
                    className="text-gray-700 hover:text-orange-500 transition-colors ease-in-out"
                  >
                    <img
                      src={product.image[0]}
                      alt=""
                      className="w-16 sm:w-20"
                    />
                  </Link>
                  <div>
                    <p className="text-xs sm:text-lg">{product.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {product.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                        {sizeLabel}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Controlled input */}
                <input
                  type="number"
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  min={1}
                  value={sizeCount}
                  onChange={(e) =>
                    updatedCartItems(
                      product._id,
                      sizeLabel,
                      parseInt(e.target.value)
                    )
                  }
                />

                <img
                  onClick={() => updatedCartItems(product._id, sizeLabel, 0)} // passing 0 means delete
                  src={assets.bin_icon}
                  alt="delete"
                  className="w-4 sm:w-5 cursor-pointer"
                />
              </div>
            );
          });
        })}
      </div>
      {cartItems.length !== 0 && (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button onClick={() => navigate('/place-order')} className="bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer">PROCEED TO CHECKOUT</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
