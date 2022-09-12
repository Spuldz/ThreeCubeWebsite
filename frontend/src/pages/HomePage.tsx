import Header from "../components/Header";
import Footer from "../components/home/Footer";
import RBS from "../assets/RBS.svg";
import swedbank from "../assets/swedbank.svg";
import printful from "../assets/printful.svg";
import arrow from "../assets/arrow.svg";
import styles from "../css/home.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <Footer />

      <div className={styles.images}>
        <img src={arrow} id={styles.arrow} alt=""></img>
        <img src={RBS} className={styles.options} alt=""></img>
        <img src={swedbank} className={styles.options} alt=""></img>
        <img src={printful} className={styles.options} alt=""></img>
      </div>
    </>
  );
}
