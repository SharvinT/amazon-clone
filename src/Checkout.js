import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.amazon.in/images/G/31/img18/Fresh/header_1500x200._CB1198675309_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Yor Shopping Basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket </h2>
            {/* ist out all the checkout products */}
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
