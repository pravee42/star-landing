import React from 'react'
import style from "./index.module.css";
import image from "../../assests/phone.png"

const Cart = () => {
  return (
    <div>
     <h1  className={`${style.Text}`}>Shopping cart</h1>
     <div className={`${style.conatiner}`}>
     <div className={`${style.ProductContainer}`} >
         <div  className={`${style.ProductCard}`} >
             <div className={`${style.ProductDetails}`}   >
                     <img src={image}  className={`${style.ProductImage}`}   />
                     <h1 className={`${style.ProductName}`}   >Iphone 14 pro max</h1>
                     <h1 className={`${style.ProductPrice}`}  >Rs. 8999</h1>
                     <div className={`${style.CountCOntainer}`} > <span className={`${style.ciricle1}`} >  <h3  className={`${style.add}`} >- </h3>    </span> <h3  className={`${style.ciricletext}`} >1 </h3> <span className={`${style.ciricle2}`} >  <h3  className={`${style.add}`}  >+ </h3>    </span>  </div>
                     <h1 className={`${style.TotalPrice}`}  >Rs. 8999</h1>
             </div>

         </div>

     </div>


     </div> 


     <div>
      <h2  className={`${style.TotalPriceall}`} >Total: 899 </h2>
     </div>

     <div className={`${style.Totalbutton}`}  >
       <button  className={`${style.endbutton}`}  style={{backgroundColor:" #255069"}} >  shop more  </button>
       <button  className={`${style.endbutton}`}   > Buy now </button>
      </div>


    </div>
  )
}

export default Cart