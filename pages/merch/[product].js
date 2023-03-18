import { useRouter } from "next/router";
import Product from "../../components/Merch/ProductDetails";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

function ProductDetails() {
  const router = useRouter();
  const name = router.query.product;

  return (
    <main className={styles.main}>
      <Nav />
      <Product productName={name} imageLink={name} />
      <Footer />
    </main>
  );
}

export default ProductDetails;
