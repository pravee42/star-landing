import React from 'react'
import style from './index.module.css'
import Whatsapp from '../../../assests/WhatsApp.png'

const Footer = () => {
  return (
    <div className={`${style.container}`}   >
        <h1  className={`${style.title}`}  >Star mobilesoo</h1>

        <div   className={`${style.itemContainer}`}  >
            <div className={`${style.line}`}  ></div>

            <div className={`${style.navContainer}`}  >
                <div className={`${style.navsub}`}  >
                <h4 className={`${style.text}`} >Naviagte</h4>
                <div className={`${style.vline}`}  ></div>
                </div>
                
                <li  className={`${style.navText}`}  >HOME</li>
                <li className={`${style.navText}`}   >ABOUT</li>
                <li className={`${style.navText}`}   >CONTACT US</li>
                <li className={`${style.navText}`}   >SHOP MORE</li>
                
            </div>

            <div className={`${style.navContainer}`}  >
                <div className={`${style.navsub}`}  >
                <h4 className={`${style.text}`} >Connect</h4>
                <div className={`${style.vline}`}  ></div>
                </div>
                
                <li  className={`${style.navText}`}  >  <img src={Whatsapp} height={30} width={30}  /> </li>
            </div>

            <div className={`${style.navContainer}`}  >
                <div className={`${style.navsub}`}  >
                <h4 className={`${style.text}`} >Address</h4>
                <div className={`${style.vline}`}  ></div>
                </div>
                
                <p  className={`${style.address}`}  > NO 1295c JKR opposite Gandhi road, near bus stand, panruti ,607106</p>
            </div>

            <div className={`${style.navContainer}`}  >
                <div className={`${style.navsub}`}  >
                <h4 className={`${style.text}`} >Subscribe</h4>
                <div className={`${style.vline}`}  ></div>
                </div>

                <div className={`${style.con}`}  >
                    <input className={`${style.input}`} />
                    <div className={`${style.go}`}  ><h6  className={`${style.goText}`}>Go</h6></div>
                </div>  
              
            </div>

           

           
        </div>
         
        <div className={`${style.line2}`}  ></div>

        <h4 className={`${style.cwtext}`} > Crafted by Abipravi</h4>

    </div>
  )
}

export default Footer