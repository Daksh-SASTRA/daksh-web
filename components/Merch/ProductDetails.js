import React, {useState} from "react";
import styles from "./productDetails.module.css";
import Image from "next/image";
import Button from "../Buttons/Buttons";
import Link from "next/link";
import styles_ from './merch.module.css'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'



function Product({ productName, imageLinks, price }) {
  // productName = productName.toUpperCase();
  const [shirtIndex, setShirtIndex] = useState(0)

  const goToNext = () => {
      if (shirtIndex >= 1) {
          setShirtIndex(0)
      }
      else {
          setShirtIndex(() => setShirtIndex(shirtIndex + 1))
      }
  }

  const goToPrev = () => {
      if (shirtIndex <= 0) {
          setShirtIndex(1)
      }
      else {
          setShirtIndex(() => setShirtIndex(shirtIndex - 1))
      }
  }

  return (
    <div className={styles.product_details_container}>
    <div>

      <div className={styles_.merch__imagecontainer}>
        <div className={styles_.merch__imageoperation} onClick={goToPrev} ><FaArrowLeft /></div>
        <div className={styles_.merch__imageshirt}><Image src={imageLinks[shirtIndex]} width={500} height={600} /></div>
        <div className={styles_.merch__imageoperation} onClick={goToNext}><FaArrowRight /></div>

      </div>
    </div>
      <div className={styles.product_details}>
        <div className={styles.product_name}>{productName}</div>
        <div className={styles.product_desc}>
          The Liverpool F.C. Stadium Home Shirt features highly breathable
          fabric to help keep sweat off your skin while.
        </div>

        <div className={styles.product_price}>₹{price}</div>

        <div className={styles.product_size}>
          <h3>SELECT SIZE</h3>
          <div className={styles.merch__sizecontainer}>
            <span className={styles.merch__sizebubble}>XS</span>
            <span className={styles.merch__sizebubble}>S</span>
            <span className={styles.merch__sizebubble}>M</span>
          </div>
          <br></br>
          <div className={styles.merch__sizecontainer}>
            <span className={styles.merch__sizebubble}>L</span>
            <span className={styles.merch__sizebubble}>XL</span>
            <span className={styles.merch__sizebubble}>XXL</span>
          </div>
        </div>

        <div className={styles.order_now_button}>
          <Link href={"#"}>
            <Button text="ORDER NOW &rarr;"></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
