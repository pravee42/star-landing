import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { onValue } from "firebase/database";
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

const Checkout = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const steps = ["Cart", "Address", "Check Out"];
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

  const saveAddress = (data) => {
    setOrderData({
      ...orderData,
      address: data.address,
      streetname: data.streetname,
      contact: data.contact,
      pincode: data.pincode,
      city: data.city,
      name: data.name
    });
    setStep(2);
    console.log(orderData, data);
  };

  return (
    <div className="p-[20px] flex flex-col items-start gap-[10px] sm:gap-4">
      <Stepper className="w-full sm:w-1/2 sm:mb-[-30px]" activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel onClick={(_) => setStep(index)} {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {step === 0 ? (
        <div className="w-full">
          <Step1 cartItems={cart} setStep={setStep} dispatch={dispatch} />
        </div>
      ) : step === 1 ? (
        <Step2 save={saveAddress} />
      ) : null}
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

const Step2 = ({ save }) => {
  const [address, setAddress] = useState();
  const userAddress = JSON.parse(localStorage.getItem("user")).uid;

  useEffect(() => {
    onValue(ref(db, `users/${userAddress}/address`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setAddress(data);
      }
    });
  }, []);

  return (
    <div className="flex flex-row gap-[10px] items-center justify-between sm:p-[50px]">
      <div className="flex  flex-col items-start gap-[10px]">
        {address?.map((data, idx) => (
          <div
            key={idx}
            className="flex rounded bg-white p-4 drop-shadow-xl flex-row items-start justify-between"
          >
            <div className="flex flex-col gap-[10px] items-start  justify-between w-[200px] sm:w-[300px]">
              <p className="m-0 font-semibold leading-6 text-sm font-sans">
                {data.name}
              </p>
              <p className="m-0 leading-6 text-sm font-sans font-normal text-gray-500 text-left">
                {data.address}, {data.streetname}, {data.city}
              </p>
              <p className="m-0 leading-6 text-sm font-sans texy-gray-600">
                {data.contact}
              </p>
            </div>
            <button
              onClick={() => save(data)}
              className="btn btn-outline-primary"
            >
              Deliver to this address
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
