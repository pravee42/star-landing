import React, { useState } from "react";
import style from "./index.module.css";
import watch from "../../assests/pngwing3.png";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, changeQty } from "./../../features/userSlice";

const Checkout = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  return (
    <div
      className={`d-flex flex-row gap-2 align-items-center justify-content-between p-3 flex-wrap`}
    >
      <div className={`d-flex flex-column gap-2 align-items-start`}>
        <h4 className={`${style.text}`}>Checkout Details</h4>
        <div className={`${style.formContainer}`}>
          {step === 1 ? (
            <div className={`d-flex flex-column`}>
              {" "}
              <div className={`${style.form}`}>
                <label className={`${style.formLable}`}>Name</label>
                <input
                  className={`${style.formInput}`}
                  placeholder="Enter your name"
                />
              </div>
              <div className={`${style.form}`}>
                <label className={`${style.formLable}`}>Email</label>
                <input
                  className={`${style.formInput}`}
                  placeholder="Enter your Email"
                />
              </div>
              <div className={`${style.form}`}>
                <label className={`${style.formLable}`}>Phone number</label>
                <input
                  className={`${style.formInput}`}
                  placeholder="Enter your Phone number"
                />{" "}
              </div>{" "}
              <div className={`d-flex flex-column align-items-end w-100`}>
                <button
                  style={{ float: "right", width: "fit-content" }}
                  className={`btn btn-primary`}
                  onClick={(_) => setStep(2)}
                >
                  Next {">"}
                </button>
              </div>
            </div>
          ) : step === 2 ? (
            <>
              <div className={`${style.form}`}>
                <label className={`${style.formLable}`}>
                  House no , street name
                </label>
                <input
                  className={`${style.formInput}`}
                  placeholder="Enter House no , street name"
                />
              </div>

              <div className={`${style.form}`}>
                <label className={`${style.formLable}`}>City</label>
                <input
                  className={`${style.formInput}`}
                  placeholder="Enter Your City"
                />
              </div>

              <div className={`${style.form}`}>
                <label className={`${style.formLable}`}>Pincode</label>
                <input
                  className={`${style.formInput}`}
                  placeholder="Enter Your Pincode"
                  type="number"
                />
              </div>
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
                  onClick={(_) => setStep(2)}
                >
                  Confrim Purchase
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div
        className={`${style.cartContainer} d-flex flex-column   p-2 shadow-xl`}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={`${style.title}`}>Order summary</div>
        </div>

        <div className="container mt-5">
          <table
            className={`table table-bordered rounded table-stripped table-hover`}
          >
            <thead className="table-dark">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((data) => {
                return (
                  <tr>
                    <td>
                      <div
                        className={`d-flex align-items-center ${style.productContainer}`}
                      >
                        <div
                          className={`d-flex gap-4 align-items-center justify-content-evenly`}
                        >
                          <img
                            src={data.image}
                            style={{ textAlign: "left" }}
                            className={`rounded shadow-sm img-fluid ${style.img}`}
                            alt="Product"
                          />
                          <p
                            className="h6 text-dark mb-0 ms-3"
                            style={{ maxWidth: "600px" }}
                          >
                            {data.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>{data.quantity}</td>
                    <td>💲{data.price}</td>
                    <td>💲{data.total}</td>
                    <td>
                      <div className="d-flex gap-3">
                        <button
                          onClick={() =>
                            dispatch(
                              changeQty({ operation: "+", productId: data.id })
                            )
                          }
                          className="btn btn-success"
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            dispatch(
                              changeQty({ operation: "-", productId: data.id })
                            );
                          }}
                          className="btn btn-danger"
                        >
                          -
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* {cart.map((data) => (
          <div className={`${style.productContainer}`}>
            <div className={`${style.product}`}>
              <img src={watch} className={`${style.img}`} />
              <p className="h6 text-dark" style={{ width: 600 }}>
                {data.name}
              </p>
              <h4>Qty: {data.quantity}</h4>
              <h4>Rs {data.price} </h4>
            </div>
          </div>
        ))} */}

        <div className={`${style.line}`}></div>

        <div className={`${style.totaldetails}`}>
          <div className={`${style.totaldetailsContainer}`}>
            <h4 className={`${style.totaltext}`}>Item total :</h4>
            <h4 className={`${style.totaltext}`}>Rs 8999</h4>
          </div>

          <div className={`${style.totaldetailsContainer}`}>
            <h4 className={`${style.totaltext}`}>Taxes and charges :</h4>
            <h4 className={`${style.totaltext}`}>Rs 8999</h4>
          </div>

          <div className={`${style.totaldetailsContainer}`}>
            <h4 className={`${style.totaltext}`}>Delivery charge :</h4>
            <h4 className={`${style.totaltext}`}>Rs 8999</h4>
          </div>
        </div>

        <div className={`${style.line}`}></div>
        <div className={`${style.finalAmount}`}>
          <h4 className={`${style.totaltext}`}>Total amount:</h4>
          <h4 className={`${style.totaltext}`}>Rs 999</h4>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
