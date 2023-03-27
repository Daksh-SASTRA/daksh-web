import { useRouter } from "next/router";
import Product from "../../components/Merch/ProductDetails";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import tshirt_back from "../../public/shirtpreview/tee_back.webp";
import tshirt_front from "../../public/shirtpreview/tee_front.webp";
import hoodie_front from "../../public/shirtpreview/hoodie_front.webp";
import hoodie_back from "../../public/shirtpreview/hoodie_back.webp";

function ProductDetails() {
  let router = useRouter();
  let name = router.query.product;
  let imageLinks = name == "tshirt" ? [tshirt_front, tshirt_back]: [hoodie_front, hoodie_back];
  let price = name == "tshirt" ? 250: 400;
  name = name == "tshirt" ? "oversized tshirt":"Hoodie"; 
  return (
    <main className={styles.main}>
      <Nav />
      <Product productName={name} imageLinks={imageLinks} price={price}/>
      <Footer />
    </main>
  );
}

export default ProductDetails;
