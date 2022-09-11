import styles from "../../css/home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.options}>Kontakti</p>
      <p className={styles.options}>Par ThreeCube</p>
      <p className={styles.options}> About</p>
    </footer>
  );
}
