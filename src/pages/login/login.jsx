import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ref, set, onValue } from "firebase/database";
import { db, auth } from "./../../firebase";
import TextField from "@mui/material/TextField";

export default function LoginComponent() {
  const [address, setAddress] = useState();
  const [loginData, setLoginData] = useState();
  const [showForm, setShowForm] = useState(false);

  const loginFunction = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      const userData = {
        email: res.user.email,
        uid: res.user.uid,
        photoURL: res.user.photoURL,
        displayName: res.user.displayName
      };
      setLoginData(userData);

      if (res._tokenResponse.isNewUser) {
        setShowForm(true);
      } else {
        onValue(ref(db, `users/${userData.uid}`), (snapshot) => {
          const data = snapshot.val();
          if (data !== null) {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.href = "/";
          }
        });
      }
    } catch (error) {
      toast.error("Invalid Email or Password");
      console.log(error);
    }
  };

  const RegisterUser = async () => {
    try {
      const userData = {
        email: loginData.email,
        uid: loginData.uid,
        photoURL: loginData.photoURL,
        displayName: loginData.displayName,
        address: [
          {
            address: address.address,
            name: address.name,
            streetname: address.streetname,
            pincode: address.pincode,
            city: address.city,
            contact: address.contact
          }
        ]
      };
      console.log(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      set(ref(db, `users/${loginData.uid}/`), userData).then((res) => {
        toast.success("Registration Successfull");
        window.location.href = "/";
      });
    } catch (error) {
      toast.error("Invalid Email or Password");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-[10px] items-center justify-center p-4 sm:p-[100px]">
      {!showForm ? (
        <Login login={loginFunction} />
      ) : (
        <SignUp data={address} setData={setAddress} register={RegisterUser} />
      )}
    </div>
  );
}

const SignUp = ({ data, setData, register }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-[10px] items-start">
      <h2 className="text-2xl font-semibold mb-4">Address and Check out</h2>
      <TextField
        placeholder="Full Name"
        type="text"
        onBlur={(e) =>
          setData({
            ...data,
            name: e.target.value
          })
        }
      />
      <TextField
        placeholder="Contact Number"
        type="text"
        onBlur={(e) =>
          setData({
            ...data,
            contact: e.target.value
          })
        }
      />
      <TextField
        placeholder="Address"
        type="text"
        onBlur={(e) =>
          setData({
            ...data,
            address: e.target.value
          })
        }
      />
      <TextField
        placeholder="Street Name"
        type="text"
        onBlur={(e) =>
          setData({
            ...data,
            streetname: e.target.value
          })
        }
      />
      <TextField
        placeholder="City"
        type="text"
        onBlur={(e) =>
          setData({
            ...data,
            city: e.target.value
          })
        }
      />
      <TextField
        placeholder="Pincode"
        type="text"
        onBlur={(e) =>
          setData({
            ...data,
            pincode: e.target.value
          })
        }
      />
      <button onClick={register} className="btn btn-dark w-full">
        Continue
      </button>
    </div>
  );
};

const Login = ({ login }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      <button
        onClick={login}
        className="bg-white-600 hover:bg-slate-100 text-primary font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
      >
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
            className="mr-2"
          >
            <path
              fill="#FFC107"
              d="M44 24c0-2.6-.5-5.1-1.4-7.4H24v14h10.6c-.4 2.3-1.8 4.3-3.7 5.4v4.5h6.1C42.1 39.5 44 32.4 44 24z"
            />
            <path
              fill="#FF3D00"
              d="M24 48c6.9 0 12.9-2.3 17.9-6.2l-6.1-4.5c-1.7 1.1-3.8 1.7-5.9 1.7-4.5 0-8.3-3-9.7-7.1H2.6v4.6C7.6 44.2 15.3 48 24 48z"
            />
            <path
              fill="#4CAF50"
              d="M14.3 29.4c-1.4-4.3-5.6-7.3-10.3-7.3-1.3 0-2.5.2-3.7.5V20c1.2-.4 2.5-.6 3.7-.6 2.5 0 4.9.8 6.9 2.3L18 26h-6v6.6c-2.3-2.1-5.2-3.3-8.3-3.3-3.2 0-6.2 1.4-8.3 3.8l10 7.8c4.9 0 9.2-1.8 12.6-5.2z"
            />
            <path
              fill="#1976D2"
              d="M4 14.8l3.1 2.4c1.4-3 4.4-5.2 7.9-5.2 1.3 0 2.5.2 3.7.5V6c-1.2-.3-2.5-.5-3.7-.5-3.4 0-6.5 1.6-8.5 4.1z"
            />
          </svg>
          Sign In with Google
        </div>
      </button>
    </div>
  );
};
