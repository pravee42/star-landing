import React from "react";
import style from "./index.module.css";
import Whatsapp from "../../../assests/WhatsApp.png";

const Footer = () => {
  return (
    <div className="bg-black p-4 gap-4 justify-content-evenly flex-wrap d-flex align-items-start">
      <div className={`d-flex flex-column gap-4 justify-content-between align-items-start h-100`}>
        <p className={`${style.title}`}>Star Mobiles.</p>
        <div className={`d-flex flex-row align-items-center gap-2`}>
          <div className={style.icon}>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.957 8.52051C15.957 8.02051 15.8945 7.64551 15.832 7.23926H8.45703V9.89551H12.832C12.6758 11.0518 11.5195 13.2393 8.45703 13.2393C5.80078 13.2393 3.64453 11.0518 3.64453 8.33301C3.64453 3.98926 8.76953 1.98926 11.5195 4.64551L13.6445 2.61426C12.3008 1.36426 10.5195 0.583008 8.45703 0.583008C4.14453 0.583008 0.707031 4.05176 0.707031 8.33301C0.707031 12.6455 4.14453 16.083 8.45703 16.083C12.9258 16.083 15.957 12.958 15.957 8.52051Z"
                fill="#D3D6D8"
              />
            </svg>
          </div>
          <div className={style.icon}>
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2773 4.08301C15.9023 3.61426 16.4648 3.05176 16.9023 2.39551C16.3398 2.64551 15.6836 2.83301 15.0273 2.89551C15.7148 2.48926 16.2148 1.86426 16.4648 1.08301C15.8398 1.45801 15.1211 1.73926 14.4023 1.89551C13.7773 1.23926 12.9336 0.864258 11.9961 0.864258C10.1836 0.864258 8.71484 2.33301 8.71484 4.14551C8.71484 4.39551 8.74609 4.64551 8.80859 4.89551C6.08984 4.73926 3.65234 3.42676 2.02734 1.45801C1.74609 1.92676 1.58984 2.48926 1.58984 3.11426C1.58984 4.23926 2.15234 5.23926 3.05859 5.83301C2.52734 5.80176 1.99609 5.67676 1.55859 5.42676V5.45801C1.55859 7.05176 2.68359 8.36426 4.18359 8.67676C3.93359 8.73926 3.62109 8.80176 3.33984 8.80176C3.12109 8.80176 2.93359 8.77051 2.71484 8.73926C3.12109 10.0518 4.33984 10.9893 5.77734 11.0205C4.65234 11.8955 3.24609 12.4268 1.71484 12.4268C1.43359 12.4268 1.18359 12.3955 0.933594 12.3643C2.37109 13.3018 4.08984 13.833 5.96484 13.833C11.9961 13.833 15.2773 8.86426 15.2773 4.52051C15.2773 4.36426 15.2773 4.23926 15.2773 4.08301Z"
                fill="#D3D6D8"
              />
            </svg>
          </div>
          <div className={style.icon}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.73047 3.73926C5.73047 3.73926 4.13672 5.36426 4.13672 7.33301C4.13672 9.33301 5.73047 10.9268 7.73047 10.9268C9.69922 10.9268 11.3242 9.33301 11.3242 7.33301C11.3242 5.36426 9.69922 3.73926 7.73047 3.73926ZM7.73047 9.67676C6.44922 9.67676 5.38672 8.64551 5.38672 7.33301C5.38672 6.05176 6.41797 5.02051 7.73047 5.02051C9.01172 5.02051 10.043 6.05176 10.043 7.33301C10.043 8.64551 9.01172 9.67676 7.73047 9.67676ZM12.293 3.61426C12.293 3.14551 11.918 2.77051 11.4492 2.77051C10.9805 2.77051 10.6055 3.14551 10.6055 3.61426C10.6055 4.08301 10.9805 4.45801 11.4492 4.45801C11.918 4.45801 12.293 4.08301 12.293 3.61426ZM14.668 4.45801C14.6055 3.33301 14.3555 2.33301 13.543 1.52051C12.7305 0.708008 11.7305 0.458008 10.6055 0.395508C9.44922 0.333008 5.98047 0.333008 4.82422 0.395508C3.69922 0.458008 2.73047 0.708008 1.88672 1.52051C1.07422 2.33301 0.824219 3.33301 0.761719 4.45801C0.699219 5.61426 0.699219 9.08301 0.761719 10.2393C0.824219 11.3643 1.07422 12.333 1.88672 13.1768C2.73047 13.9893 3.69922 14.2393 4.82422 14.3018C5.98047 14.3643 9.44922 14.3643 10.6055 14.3018C11.7305 14.2393 12.7305 13.9893 13.543 13.1768C14.3555 12.333 14.6055 11.3643 14.668 10.2393C14.7305 9.08301 14.7305 5.61426 14.668 4.45801ZM13.168 11.458C12.9492 12.083 12.4492 12.5518 11.8555 12.8018C10.918 13.1768 8.73047 13.083 7.73047 13.083C6.69922 13.083 4.51172 13.1768 3.60547 12.8018C2.98047 12.5518 2.51172 12.083 2.26172 11.458C1.88672 10.5518 1.98047 8.36426 1.98047 7.33301C1.98047 6.33301 1.88672 4.14551 2.26172 3.20801C2.51172 2.61426 2.98047 2.14551 3.60547 1.89551C4.51172 1.52051 6.69922 1.61426 7.73047 1.61426C8.73047 1.61426 10.918 1.52051 11.8555 1.89551C12.4492 2.11426 12.918 2.61426 13.168 3.20801C13.543 4.14551 13.4492 6.33301 13.4492 7.33301C13.4492 8.36426 13.543 10.5518 13.168 11.458Z"
                fill="#D3D6D8"
              />
            </svg>
          </div>
          <div className={style.icon}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.332 0.333008H1.30078C0.769531 0.333008 0.332031 0.801758 0.332031 1.36426V13.333C0.332031 13.8955 0.769531 14.333 1.30078 14.333H13.332C13.8633 14.333 14.332 13.8955 14.332 13.333V1.36426C14.332 0.801758 13.8633 0.333008 13.332 0.333008ZM4.55078 12.333H2.48828V5.67676H4.55078V12.333ZM3.51953 4.73926C2.83203 4.73926 2.30078 4.20801 2.30078 3.55176C2.30078 2.89551 2.83203 2.33301 3.51953 2.33301C4.17578 2.33301 4.70703 2.89551 4.70703 3.55176C4.70703 4.20801 4.17578 4.73926 3.51953 4.73926ZM12.332 12.333H10.2383V9.08301C10.2383 8.33301 10.2383 7.33301 9.17578 7.33301C8.08203 7.33301 7.92578 8.17676 7.92578 9.05176V12.333H5.86328V5.67676H7.83203V6.58301H7.86328C8.14453 6.05176 8.83203 5.48926 9.83203 5.48926C11.9258 5.48926 12.332 6.89551 12.332 8.67676V12.333Z"
                fill="#D3D6D8"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={`d-flex flex-column gap-4 align-items-start`}>
          <p className={style.title2}>Products</p>
          <div className={`d-flex flex-column gap-2 align-items-start`}>
              <p className={`${style.text}`}>Phone</p>
              <p className={`${style.text}`}>Accessories</p>
              <p className={`${style.text}`}>Custom Printed Case</p>
              <p className={`${style.text}`}>Laptops</p>
              <p className={`${style.text}`}>Tablets</p>
              <p className={`${style.text}`}>Pillow Printing</p>
          </div>
      </div>
       <div className={`d-flex flex-column gap-4 align-items-start`}>
          <p className={style.title2}>Services</p>
          <div className={`d-flex flex-column gap-2 align-items-start`}>
              <p className={`${style.text}`}>Android</p>
              <p className={`${style.text}`}>IOS</p>
              <p className={`${style.text}`}>On site Service</p>
              <p className={`${style.text}`}>Service Request</p>
          </div>
      </div>
       <div className={`d-flex flex-column gap-4 align-items-start`}>
          <p className={style.title2}>Company</p>
          <div className={`d-flex flex-column gap-2 align-items-start`}>
              <p className={`${style.text}`}>About</p>
              <p className={`${style.text}`}>Contact</p>
              <p className={`${style.text}`}>Write A review</p>
              <p className={`${style.text}`}>Location</p>
          </div>
      </div>
    </div>
    // <div className={`${style.container}`}>
    //   <h1 className={`${style.title}`}>Star mobilesoo</h1>
    //   <div className={`${style.itemContainer}`}>
    //     <div className={`${style.line}`}></div>
    //     <div className={`${style.navContainer}`}>
    //       <div className={`${style.navsub}`}>
    //         <h4 className={`${style.text}`}>Naviagte</h4>
    //         <div className={`${style.vline}`}></div>
    //       </div>
    //       <li className={`${style.navText}`}>HOME</li>
    //       <li className={`${style.navText}`}>ABOUT</li>
    //       <li className={`${style.navText}`}>CONTACT US</li>
    //       <li className={`${style.navText}`}>SHOP MORE</li>
    //     </div>
    //     <div className={`${style.navContainer}`}>
    //       <div className={`${style.navsub}`}>
    //         <h4 className={`${style.text}`}>Connect</h4>
    //         <div className={`${style.vline}`}></div>
    //       </div>
    //       <li className={`${style.navText}`}>
    //         {" "}
    //         <img src={Whatsapp} height={30} width={30} />{" "}
    //       </li>
    //     </div>
    //     <div className={`${style.navContainer}`}>
    //       <div className={`${style.navsub}`}>
    //         <h4 className={`${style.text}`}>Address</h4>
    //         <div className={`${style.vline}`}></div>
    //       </div>
    //       <p className={`${style.address}`}>
    //         NO 1295c JKR opposite Gandhi road, near bus stand, panruti ,607106
    //       </p>
    //     </div>
    //     <div className={`${style.navContainer}`}>
    //       <div className={`${style.navsub}`}>
    //         <h4 className={`${style.text}`}>Subscribe</h4>
    //         <div className={`${style.vline}`}></div>
    //       </div>
    //       <div className={`${style.con}`}>
    //         <input className={`${style.input}`} />
    //         <div className={`${style.go}`}>
    //           <h6 className={`${style.goText}`}>Go</h6>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={`${style.line2}`}></div>
    //   <h4 className={`${style.cwtext}`}> Crafted by Abipravi</h4>
    // </div>
  );
};

export default Footer;
