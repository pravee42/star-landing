import React, { useState } from "react";
import toast from "react-hot-toast";
import TextField from "@mui/material/TextField";
import { v4 as uuid } from "@lukeed/uuid";
import { db } from "../firebase";
import { set, ref } from "firebase/database";

function AddressForm(props) {
  const [data, setData] = useState({});

  const saveAddress = () => {
    set(ref(db, `users/${props.uid}/address/${uuid()}`), data).then((res) => {
      toast.success("Order created");
      props.close();
    });
  };

  return (
    <form className="flex flex-col gap-[10px] bg-white p-4 rounded shadow h-auto">
      <h2 className="text-xl font-bold mb-4">New address</h2>
      <TextField
        placeholder="Full Name"
        type="text"
        onChange={(e) =>
          setData({
            ...data,
            name: e.target.value
          })
        }
      />
      <TextField
        placeholder="Contact Number"
        type="text"
        onChange={(e) =>
          setData({
            ...data,
            contact: e.target.value
          })
        }
      />
      <TextField
        placeholder="Address"
        type="text"
        onChange={(e) =>
          setData({
            ...data,
            address: e.target.value
          })
        }
      />
      <TextField
        placeholder="Street Name"
        type="text"
        onChange={(e) =>
          setData({
            ...data,
            streetname: e.target.value
          })
        }
      />
      <TextField
        placeholder="City"
        type="text"
        onChange={(e) =>
          setData({
            ...data,
            city: e.target.value
          })
        }
      />
      <TextField
        placeholder="Pincode"
        type="text"
        onChange={(e) =>
          setData({
            ...data,
            pincode: e.target.value
          })
        }
      />
      <div className="flex justify-between gap-4">
        <button onClick={props.close} className="btn btn-danger">
          Cancel
        </button>
        <button onClick={saveAddress} className="btn btn-dark">
          Deliver to this Address
        </button>
      </div>
    </form>
  );
}

export default AddressForm;
