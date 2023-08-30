import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { v4 as uuid } from "@lukeed/uuid";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { selectCart, changeQty, clearCart } from "./../../features/userSlice";
import { ref, set } from "firebase/database";
import { db } from "./../../firebase";

const Checkout = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
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
    <div
      className={`d-flex flex-row gap-2 align-items-center justify-content-between p-3 flex-wrap`}
    >
      <div className={`d-flex flex-column gap-2 align-items-start`}>
        <h4 className={`${style.text}`}>Checkout Details</h4>
        <div className={`${style.formContainer}`}>
          {step === 1 ? (
            <div className={`d-flex gap-4 flex-column`}>
              {" "}
              <input
                onChange={(e) => {
                  setOrderData({ ...orderData, name: e.target.value });
                }}
                className={`form-control`}
                placeholder="Enter your name"
              />
              <input
                onChange={(e) => {
                  setOrderData({ ...orderData, email: e.target.value });
                }}
                className={`form-control`}
                placeholder="Enter your Email"
              />
              <input
                onChange={(e) => {
                  setOrderData({ ...orderData, contact: e.target.value });
                }}
                className={`form-control`}
                placeholder="Enter your Phone number"
              />{" "}
              <div className={`d-flex flex-column align-items-end w-100`}>
                <button
                  style={{ float: "right", width: "fit-content" }}
                  className={`btn btn-primary`}
                  onClick={(_) => {
                    if (
                      (orderData.name === "") | (orderData.contact === "") ||
                      orderData.email === ""
                    ) {
                      alert("Please Fill all the fields");
                    } else {
                      setStep(2);
                    }
                  }}
                >
                  Next {">"}
                </button>
              </div>
            </div>
          ) : step === 2 ? (
            <div className={`d-flex flex-column gap-4`}>
              <textarea
                placeholder="Address"
                onChange={(e) =>
                  setOrderData({ ...orderData, address: e.target.value })
                }
                className="form-control"
                cols="30"
                rows="2"
              ></textarea>
              <input
                onChange={(e) => {
                  setOrderData({ ...orderData, pincode: e.target.value });
                }}
                defaultValue={orderData.pincode}
                className={`form-control`}
                placeholder="Enter your Pincode"
              />{" "}
              <div
                className={`d-flex flex-row flex-wrap px-4 gap-3 justify-content-between align-items-center w-100`}
              >
                <button
                  style={{ float: "right", width: "fit-content" }}
                  className={`btn btn-primary`}
                  onClick={(_) => setStep(1)}
                >
                  {"<"} Back
                </button>
                <button
                  style={{ float: "right", width: "fit-content" }}
                  className={`btn btn-success`}
                  onClick={(_) => saveData()}
                >
                  Confrim Purchase
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className={`${style.cartContainer} `}
      >
      
      </div>
    </div>
  );
};

export default Checkout;
