import { useRouter } from "next/router";
import Product from "../../components/Merch/ProductDetails";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import tshirt from "../../public/shirtpreview/tshirt.webp";
import hoodie from "../../public/shirtpreview/hoodie.webp";

function ProductDetails() {
  let router = useRouter();
  let name = router.query.product;
  let imageLink = name == "tshirt" ? tshirt: hoodie;
  return (
    <main className={styles.main}>
      <Nav />
      <Product productName={name} imageLink={imageLink} />
      <Footer />
    </main>
  );
}

export default ProductDetails;
