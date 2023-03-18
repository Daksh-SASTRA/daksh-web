import React from "react";
import styles from "./productDetails.module.css";
import Image from "next/image";
import Button from "../Buttons/Buttons";
import tshirt from "../../public/shirtpreview/tshirt.webp";
import hoodie from "../../public/shirtpreview/hoodie.webp";
import Link from "next/link";

function Product({ productName, imageLink }) {
  // productName = productName.toUpperCase();
  return (
    <div className={styles.product_details_container}>
      <div className={styles.product_image}>
        <Image src={tshirt} width={500} height={600} />
      </div>
      <div className={styles.product_details}>
        <div className={styles.product_name}>{productName}</div>
        <div className={styles.product_desc}>
          The Liverpool F.C. Stadium Home Shirt features highly breathable
          fabric to help keep sweat off your skin while.
        </div>

        <div className={styles.product_price}>₹299</div>

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
