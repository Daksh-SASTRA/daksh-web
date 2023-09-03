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
  let hoodie_form = "https://forms.gle/fJd4TKBH7T2rGfBe7"
  let t_form = "https://forms.gle/uEKkCVD5srPdEyqk6"
  let router = useRouter();
  let name = router.query.product;
  if(name != "tshirt") {
    name = "tshirt"
  }
  // let imageLinks = name == "tshirt" ? [tshirt_front, tshirt_back]: [hoodie_front, hoodie_back];
  // let price = name == "tshirt" ? 250: 450;
  // let form = name == "tshirt"?t_form: hoodie_form;
  // name = name == "tshirt" ? "oversized tshirt":"hoodie"; 

  let imageLinks = name == "tshirt" ? [tshirt_front, tshirt_back] : '';
  let price = name == "tshirt" ? 250 : '';
  let form = name == "tshirt"? t_form : '';
  name = name == "tshirt" ? "oversized tshirt":''; 

  return (
    <main className={styles.main}>
      <Nav />
      <Product productName={name} imageLinks={imageLinks} price={price} buyNowLink={form}/>
      <Footer />
    </main>
  );
}

export default ProductDetails;
