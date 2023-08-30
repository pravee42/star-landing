import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { v4 as uuid } from "@lukeed/uuid";
import { useSelector, useDispatch } from "react-redux";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { selectCart, changeQty, clearCart } from "./../../features/userSlice";
import { ref, set } from "firebase/database";
import { db } from "./../../firebase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import phone from "../../assests/phone.png";

const Checkout = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const steps = ['Cart', 'Address', 'Check Out'];
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [orderData, setOrderData] = useState({
    id: uuid(),
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    pincode: "",
    status: "pending",
    created_at: new Date(),
    total_price: total,
    product_count: count
  });

  useEffect(() => {
    setTotal(0);
    setCount(0);
    cart.forEach((D) => {
      setTotal((s) => s + D.total);
      setCount((s) => s + D.quantity);
    });
  }, [cart]);

  const saveData = () => {
    let newCart = [];
    cart.map((d) => {
      newCart.push({
        id: d.id,
        name: d.name,
        quantity: d.quantity,
        total: d.total,
        price: d.price
      });
    });
    const newOrder = {
      ...orderData,
      products: newCart,
      total_price: total,
      product_count: count
    };
    set(ref(db, `orders/${orderData.id}/`), newOrder).then((res) => {
      toast.success("Order created");
      dispatch(clearCart(""));
      navigate("/");
    });
  };

  return (
    <div className="p-[20px] flex flex-col items-start gap-[10px] sm:gap-4">
      <Stepper className="w-full sm:w-1/2 sm:mb-[-30px]" activeStep={step}>
       {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {step === 0 ? <div className="w-full">
        <Step1 cartItems={cart} setStep={setStep} dispatch={dispatch} />
      </div> : null}
    </div>
  );
};

export default Checkout;

const Step1 = ({ cartItems, dispatch, setStep }) => {
  const subTotal = cartItems.reduce((total, item) => total + item.total, 0);
  const total = cartItems.length > 0 ? subTotal + 40 : subTotal;

  return (
    <div className={`flex flex-col p-[1px]`}>
      <div className="py-8 px-2 sm:px-6 lg:px-8 flex gap-4 items-start  justify-evenly flex-col sm:flex-row gap-[10px] ">
        <div className="flex flex-col items-start rounded shadow overflow-hidden w-full sm:w-[90%]">
          <div className="overflow-x-auto w-full">
            {cartItems.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                  <tr>
                    <th className={`${style.CartTable}`}>Product</th>
                    <th className={`${style.CartTable}`}>Price</th>
                    <th className={`${style.CartTable}`}>Quantity</th>
                    <th className={`${style.CartTable}`}>Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td
                        className={`py-2 sm:px-4 md:px-6 lg:px-8 whitespace-nowrap ${style.cartBodyCell}`}
                      >
                        <div className="flex flex-col justify-start items-start gap-[10px] sm:flex-row items-center">
                          <div className="flex-shrink-0 h-18 w-18 rounded bg-transparent shadow-sm p-2">
                            <img
                              className="h-16 w-16 "
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                          <div className="sm:ml-4">
                            <div className="text-sm font-medium  text-gray-900">
                              {item.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        className={`py-2 sm:px-4 md:px-6 lg:px-8 whitespace-nowrap ${style.cartBodyCell}`}
                      >
                        ${item.price}
                      </td>
                      <td
                        className={`py-2 sm:px-4 md:px-6 lg:px-8 whitespace-nowrap ${style.cartBodyCell}`}
                      >
                        <div className="flex p-2 gap-[5px] items-center">
                          <button
                            onClick={() =>
                              dispatch(
                                changeQty({
                                  operation: "-",
                                  productId: item.id
                                })
                              )
                            }
                            className="btn btn-outline-dark"
                          >
                            -
                          </button>
                          <span className="h6 text-dark">{item.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch(
                                changeQty({
                                  operation: "+",
                                  productId: item.id
                                })
                              )
                            }
                            className="btn btn-outline-primary"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-2 sm:px-4 md:px-6 lg:px-8 whitespace-nowrap text-right">
                        ${item.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div
                className={`flex flex-col items-center p-[50px] justify-center w-full`}
              >
                <img src="https://minimals.cc/assets/icons/empty/ic_cart.svg" />
                <p className={style.emptyTitle}>Cart is Empty!</p>
                <p className={style.emptyTitle2}>
                  Look like you have no items in your shopping cart.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={`${style.orderSummary} w-full sm:w-[300px]`}>
          <div className={style.title}>Order Summary</div>
          <div className={style.orderData}>
            <div className={`flex justify-between py-2`}>
              <p className={style.subtitle}>Sub Total: </p>
              <p className={style.title}>₹ {subTotal}</p>
            </div>
            {cartItems.length > 0 && (
              <div className={`flex justify-between py-2`}>
                <p className={style.subtitle}>Shipping: </p>
                <p className={style.title}>₹ 40</p>
              </div>
            )}
            <div className={`flex justify-between py-2`}>
              <p className={style.subtitle}>Total: </p>
              <p className={style.title}>₹ {total}</p>
            </div>
            <button
              onClick={(_) => setStep(1)}
              className="btn btn-dark w-full mt-4"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Step2 = ({dispatch, setStep}) => {

}