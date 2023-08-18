import React from 'react'
import style from "./index.module.css";

const Services = () => {
  return (
    <div  className={`${style.container}`}  >
        <h2 style={{marginBottom:"40px"}}>Request a services</h2>

        <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >Name</label>
            <input className={`${style.formInput}`} placeholder='Enter your name' />
       </div>
       <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >Email</label>
            <input className={`${style.formInput}`} placeholder='Enter your Email' />
       </div>

       <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >Phone no</label>
            <input className={`${style.formInput}`} placeholder='Enter your Phone number' type='number' />
       </div>

       <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >Model name</label>
            <input className={`${style.formInput}`} placeholder='Enter your Phone model name'  />
       </div>

       <div  className={`${style.form}`} >
            <label className={`${style.formLable}`} >Problem</label>
            <textarea className={`${style.textarea}`} />
       </div>

       <div  className={`${style.form}`} style={{width:"425px"}} >
            <label className={`${style.formLable}`} >Upload image</label>
            <input className={`${style}`} placeholder='Enter your Phone model name' type="file" />
       </div>

       <button  className={`${style.button}`}  >Submit</button>
    </div>
  )
}

export default Services