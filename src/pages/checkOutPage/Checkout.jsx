import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { v4 as uuid } from "@lukeed/uuid";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { selectCart, changeQty, clearCart } from "./../../features/userSlice";
import { ref, set } from "firebase/database";
import { db } from "./../../firebase";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import phone from '../../assests/phone.png'

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
    // <div
    //   className={`d-flex flex-row gap-2 align-items-center justify-content-between p-3 flex-wrap`}
    // >
    //   <div className={`d-flex flex-column gap-2 align-items-start`}>
    //     <h4 className={`${style.text}`}>Checkout Details</h4>
    //     <div className={`${style.formContainer}`}>
    //       {step === 1 ? (
    //         <div className={`d-flex gap-4 flex-column`}>
    //           {" "}
    //           <input
    //             onChange={(e) => {
    //               setOrderData({ ...orderData, name: e.target.value });
    //             }}
    //             className={`form-control`}
    //             placeholder="Enter your name"
    //           />
    //           <input
    //             onChange={(e) => {
    //               setOrderData({ ...orderData, email: e.target.value });
    //             }}
    //             className={`form-control`}
    //             placeholder="Enter your Email"
    //           />
    //           <input
    //             onChange={(e) => {
    //               setOrderData({ ...orderData, contact: e.target.value });
    //             }}
    //             className={`form-control`}
    //             placeholder="Enter your Phone number"
    //           />{" "}
    //           <div className={`d-flex flex-column align-items-end w-100`}>
    //             <button
    //               style={{ float: "right", width: "fit-content" }}
    //               className={`btn btn-primary`}
    //               onClick={(_) => {
    //                 if (
    //                   (orderData.name === "") | (orderData.contact === "") ||
    //                   orderData.email === ""
    //                 ) {
    //                   alert("Please Fill all the fields");
    //                 } else {
    //                   setStep(2);
    //                 }
    //               }}
    //             >
    //               Next {">"}
    //             </button>
    //           </div>
    //         </div>
    //       ) : step === 2 ? (
    //         <div className={`d-flex flex-column gap-4`}>
    //           <textarea
    //             placeholder="Address"
    //             onChange={(e) =>
    //               setOrderData({ ...orderData, address: e.target.value })
    //             }
    //             className="form-control"
    //             cols="30"
    //             rows="2"
    //           ></textarea>
    //           <input
    //             onChange={(e) => {
    //               setOrderData({ ...orderData, pincode: e.target.value });
    //             }}
    //             defaultValue={orderData.pincode}
    //             className={`form-control`}
    //             placeholder="Enter your Pincode"
    //           />{" "}
    //           <div
    //             className={`d-flex flex-row flex-wrap px-4 gap-3 justify-content-between align-items-center w-100`}
    //           >
    //             <button
    //               style={{ float: "right", width: "fit-content" }}
    //               className={`btn btn-primary`}
    //               onClick={(_) => setStep(1)}
    //             >
    //               {"<"} Back
    //             </button>
    //             <button
    //               style={{ float: "right", width: "fit-content" }}
    //               className={`btn btn-success`}
    //               onClick={(_) => saveData()}
    //             >
    //               Confrim Purchase
    //             </button>
    //           </div>
    //         </div>
    //       ) : null}
    //     </div>
    //   </div>

    //   <div
    //     className={`${style.cartContainer} d-flex flex-column p-2 shadow-xl`}
    //   >
    //     <div style={{ display: "flex", justifyContent: "center" }}>
    //       <div className={`${style.title}`}>Order summary</div>
    //     </div>

    //     <div className="container mt-5">
    //       <table
    //         className={`table table-bordered rounded table-stripped table-hover`}
    //       >
    //         <thead className="table-dark">
    //           <tr>
    //             <th>Product</th>
    //             <th>Quantity</th>
    //             <th>Price</th>
    //             <th>Total</th>
    //             <th>Actions</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {cart.map((data) => {
    //             return (
    //               <tr>
    //                 <td>
    //                   <div
    //                     className={`d-flex align-items-center ${style.productContainer}`}
    //                   >
    //                     <div
    //                       className={`d-flex gap-4 align-items-center justify-content-start w-100`}
    //                     >
    //                       <img
    //                         src={data.image}
    //                         style={{ textAlign: "left" }}
    //                         className={`rounded shadow-sm img-fluid ${style.img}`}
    //                         alt="Product"
    //                       />
    //                       <p
    //                         className="h6 text-dark mb-0 ms-3"
    //                         style={{ maxWidth: "600px", textAlign: "left" }}
    //                       >
    //                         {data.name}
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </td>
    //                 <td>{data.quantity}</td>
    //                 <td>💲{data.price}</td>
    //                 <td>💲{data.total}</td>
    //                 <td>
    //                   <div className="d-flex gap-3">
    //                     <button
    //                       onClick={() =>
    //                         dispatch(
    //                           changeQty({ operation: "+", productId: data.id })
    //                         )
    //                       }
    //                       className="btn btn-success"
    //                     >
    //                       +
    //                     </button>
    //                     <button
    //                       onClick={() => {
    //                         dispatch(
    //                           changeQty({ operation: "-", productId: data.id })
    //                         );
    //                       }}
    //                       className="btn btn-danger"
    //                     >
    //                       -
    //                     </button>
    //                   </div>
    //                 </td>
    //               </tr>
    //             );
    //           })}

    //           <tr>
    //             <th>Total</th>
    //             <th>{count}</th>
    //             <th></th>
    //             <th></th>
    //             <th>{total}</th>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>



    <div className={`${style.container}`}>
      <div  className={`${style.TotalFormcontainer}`} >
                         <h1 className={`${style.heading}`}>Checkout Details</h1>
                         <div>
                         <Box  className={`${style.Formcontainer}`}
                               component="form"
                              //  sx={{
                              //    '& > :not(style)': { m: 1, width: '25ch' },
                              //  }}
                               noValidate
                               autoComplete="off"
                                                 >                         
                              <div  className={`${style.IndINputcontainer}`}  >
                                <h6    className={`${style.inputName}`}  >Name</h6>
                                <TextField id="outlined-basic"  variant="outlined" placeholder="Enter your name"   className={`${style.inputfield}`}  />
                              </div>
                              
                              <div  className={`${style.IndINputcontainer}`}  >
                                <h6   className={`${style.inputName}`} >Email</h6>
                                <TextField id="outlined-basic"  variant="outlined" placeholder="Enter your email"   className={`${style.inputfield}`}/>
                              </div>
                              <div  className={`${style.IndINputcontainer}`} >
                                <h6  className={`${style.inputName}`} >Phone no</h6>
                                <TextField id="outlined-basic"  variant="outlined" placeholder="Enter your Phone no"  type="number"   className={`${style.inputfield}`} />
                              </div>
                              <div  className={`${style.IndINputcontainer}`} >
                                <h6  className={`${style.inputName}`} >House no,Street name</h6>
                                <TextField id="outlined-basic"  variant="outlined" placeholder="Enter your House no,Street name"  className={`${style.inputfield}`} />
                              </div>
                              <div className={`${style.IndINputcontainer}`}  >
                                <h6  className={`${style.inputName}`} >City name</h6>
                                <TextField id="outlined-basic"  variant="outlined" placeholder="Enter your city name"   className={`${style.inputfield}`} />
                              </div>
                              <div className={`${style.IndINputcontainer}`} >
                                <h6 className={`${style.inputName}`}  >Pincode</h6>
                                <TextField id="outlined-basic"  variant="outlined" placeholder="Enter your pincode"   className={`${style.inputfield}`}  />
                              </div>
      
                              <div className={`${style.IndINputcontainer}`}  >
                                <h6  className={`${style.inputName}`} >District and state</h6>  
                                <TextField id="outlined-basic"  variant="outlined" placeholder="Enter your District and state"   className={`${style.inputfield}`} />
                              </div>
                               </Box>
                         </div>
      
      
      
      
      </div>
               <div className={`${style.CartCOntainer}`} >
                         <h6 className={`${style.headingBox}`}>Order summary</h6>
                         
                         <div className={`${style.CartItemCOntainer}`} >
                              <img src={phone}  className={`${style.cartimage}`} />
                              <h6 className={`${style.text}`} >Apple smart Watach</h6>
                              <h6 className={`${style.text}`} >Qty: 2</h6>
                              <div style={{display:"flex"}}>
                               <h6 className={`${style.ItemCounter}`}  >-</h6>
                               <h6  className={`${style.ItemCount}`}  >1</h6>
                               <h6  className={`${style.ItemCounter}`} >+</h6>
                               </div>
                              <h6 className={`${style.text}`} >Rs 8999</h6>
                         </div>
                         <div className={`${style.CartItemCOntainer}`} >
                              <img src={phone}  className={`${style.cartimage}`} />
                              <h6>Apple smart Watach</h6>
                              <h6>Qty: 2</h6>
                              <div style={{display:"flex"}}>
                               <h6 className={`${style.ItemCounter}`}  >-</h6>
                               <h6  className={`${style.ItemCount}`}  >1</h6>
                               <h6  className={`${style.ItemCounter}`} >+</h6>
                               </div>
                              <h6>Rs 8999</h6>
                         </div>
                         <div className={`${style.CartItemCOntainer}`} >
                              <img src={phone}  className={`${style.cartimage}`} />
                              <h6>Apple smart Watach</h6>
                              <h6>Qty: 2</h6>
                              <div style={{display:"flex"}}>
                               <h6 className={`${style.ItemCounter}`}  >-</h6>
                               <h6  className={`${style.ItemCount}`}  >1</h6>
                               <h6  className={`${style.ItemCounter}`} >+</h6>
                               </div>
                              <h6>Rs 8999</h6>
                         </div>
                         {/* <div className={`${style.Stroke}`} ></div> */}
                         <svg xmlns="http://www.w3.org/2000/svg"  height="3" viewBox="0 0 698 3" fill="none">
                            <path d="M0.928711 1.95947H697.07" stroke="#5D5353" stroke-width="2" stroke-dasharray="4 4"  className={`${style.stroke}`} />
                          </svg>

                          <div className={`${style.priceCOntainer}`} >
                            <h5>Item total:</h5>
                            <h6>Rs 8999</h6>
                          </div>

                          <div className={`${style.priceCOntainer}`} >
                            <h5>Taxes & charges:</h5>
                            <h6>Rs 8999</h6>
                          </div>

                          <div className={`${style.priceCOntainer}`} >
                            <h5>Delivery charges:</h5>
                            <h6>Rs 8999</h6>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg"  height="3" viewBox="0 0 698 3" fill="none">
                            <path d="M0.928711 1.95947H697.07" stroke="#5D5353" stroke-width="2" stroke-dasharray="4 4"  className={`${style.stroke}`} />
                          </svg>

                          <div className={`${style.priceCOntainer}`} >
                            <h5>Delivery charges:</h5>
                            <h6>Rs 8999</h6>
                          </div>

               </div>
    </div>
  );
};

export default Checkout;
