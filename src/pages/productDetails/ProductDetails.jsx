import React from "react";
import { useParams } from "react-router-dom";
import style from "./index.module.css";
import phone from "../../assests/phone.png";
import ProductCardComponent from "../../components/productCard/productCard";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className={`${style.container}`} >
     <div  className={`${style.ProductContainer}`}  >
         <div className={`${style.imageContainer}`} >
              <img src={phone} alt="product" className={`${style.ProductImage}`} />
                <div className={`${style.subimageContainer}`}>
                       <div className={`${style.subimage}`} ><img src={phone}  alt="product"  className={`${style.subimageshow}`} /></div>
                       <div  className={`${style.subimage}`} ><img src={phone}  alt="product"  className={`${style.subimageshow}`} /></div>
                       <div  className={`${style.subimage}`} ><img src={phone}  alt="product"  className={`${style.subimageshow}`} /></div>
                </div>

         </div>


         <div className={`${style.TextContainer}`} >
          <h1 className={`${style.prdname}`}   >Iphone 14 pro max </h1>
          <p  className={`${style.prdPara}`}    >The iPhone 14 Pro Max measures 160.70 x 77.60 x 7.85mm (height x width x thickness) and weighs 240.00 grams. It was launched in Space Black, Silver, Gold, and Deep Purple colours. It features an IP68 rating for dust and water protection. Connectivity options on the iPhone 14 Pro Max include Wi-Fi and Lightning.
          </p>
          <div  className={`${style.ButtonContainer}`}>
            <button className={`${style.ButtonC}`}  > Add to cart  </button>
            <button className={`${style.ButtonB}`} > Buy now </button>
          </div>
          </div>  

          

     </div>

     <div  className={`${style.RecommendedProducts}`} >
       <div className={`${style.RCtext}`} >
      <h1   >Recommended products</h1>
      <button className={`${style.btnview}`}  >View all</button>
      </div>
     </div>


     <div className={`${style.RcCards}`}  >
      <ProductCardComponent/>
      <ProductCardComponent/>
      <ProductCardComponent/>
      <ProductCardComponent/>
      <ProductCardComponent/>
      <ProductCardComponent/>
      <ProductCardComponent/>
      <ProductCardComponent/>
     
      
     </div>
    
    </div>
  );
};

export default ProductDetails;
