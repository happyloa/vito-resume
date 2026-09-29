/**
 * 頁尾元件 (Footer)
 *
 * 呈現社群媒體圖示。
 */
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer
            className={styles.footer}
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-offset="50"
        >
            <img src="image/fb.webp" alt="Facebook" />
            <img src="image/instagram.webp" alt="Instagram" />
            <img src="image/line.webp" alt="Line" />
        </footer>
    );
}
