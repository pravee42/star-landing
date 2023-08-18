import React from 'react'
import style from "./index.module.css";
import watch from "../../assests/pngwing3.png"




const Checkout = () => {
    
  return (
    <div>
    <h4 className={`${style.text}`} >Checkout Details</h4>
            <div  className={`${style.container}`} >
              <div  className={`${style.formContainer}`} >


            <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >Name</label>
            <input className={`${style.formInput}`} placeholder='Enter your name' />
       </div>

            <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >Email</label>
            <input className={`${style.formInput}`} placeholder='Enter your Email' />
            
            
       </div>

      
            <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >Phone number</label>
            <input className={`${style.formInput}`} placeholder='Enter your Phone number' />
            
            
       </div>

       
            <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >House no , street name</label>
            <input className={`${style.formInput}`} placeholder='Enter House no , street name' />
            
            
       </div>
       
       <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >City</label>
            <input className={`${style.formInput}`} placeholder='Enter Your City' />
       </div>


       
            


       
            <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >Pincode</label>
            <input className={`${style.formInput}`} placeholder='Enter Your Pincode' type='number' />
            </div>    
            
             

             <button  className={`${style.button}`} >Proceed to checkout</button>
              </div>
            



     <div className={`${style.cartContainer}`}  >
        <div style={{display:"flex",justifyContent:"center"}} >
        <div className={`${style.title}`}  >Order summary</div>
        </div>

        <h4 className={`${style.product}`} >products</h4>

        <div className={`${style.productContainer}`} >
                    <div className={`${style.product}`}  >
                         <img src={watch}  className={`${style.img}`}  />    
                         <h4>Smart watch</h4> 
                         <h4>Qty: 2</h4>
                         <h4>Rs 8999 </h4>
                    </div>
        </div>

        <div className={`${style.productContainer}`} >
                    <div className={`${style.product}`}  >
                         <img src={watch}  className={`${style.img}`}  />    
                         <h4>Smart watch</h4> 
                         <h4>Qty: 2</h4>
                         <h4>Rs 8999 </h4>
                    </div>
        </div>

        <div className={`${style.productContainer}`} >
                    <div className={`${style.product}`}  >
                         <img src={watch}  className={`${style.img}`}  />    
                         <h4>Smart watch</h4> 
                         <h4>Qty: 2</h4>
                         <h4>Rs 8999 </h4>
                    </div>
        </div>
        
       
     
    <div  className={`${style.line}`} ></div>

    <div className={`${style.totaldetails}`} >
           <div  className={`${style.totaldetailsContainer}`} >
            <h4  className={`${style.totaltext}`}>Item total :</h4>
            <h4 className={`${style.totaltext}`} >Rs 8999</h4>
           </div>

           <div  className={`${style.totaldetailsContainer}`} >
            <h4  className={`${style.totaltext}`}>Taxes and charges :</h4>
            <h4 className={`${style.totaltext}`} >Rs 8999</h4>
           </div>

           <div  className={`${style.totaldetailsContainer}`} >
            <h4  className={`${style.totaltext}`}>Delivery charge :</h4>
            <h4 className={`${style.totaltext}`} >Rs 8999</h4>
           </div>
    </div>

    <div  className={`${style.line}`} ></div>
     <div  className={`${style.finalAmount}`} >
      <h4 className={`${style.totaltext}`} >Total amount:</h4>
      <h4 className={`${style.totaltext}`} >Rs 999</h4>
     </div>
     </div>

     
     
     
     
     
     </div>
     </div>
  )
}

export default Checkout