import { Link, animateScroll as scroll } from "react-scroll"
import SpringIn from "../SpringIn"
import styles from "./Title.module.css"

const Title = () => {
  return (
    <SpringIn>
      <div className={styles.main}>
        <div className={styles.linksDiv}>
          <Link
            className={styles.links}
            to="weather"
            smooth={true}
            duration={2000}>
            <h1>Weather</h1>
          </Link>
          <Link
            className={styles.links}
            to="footer"
            smooth={true}
            duration={2000}>
            <h1>Contacts</h1>
          </Link>
        </div>
        <h1 className={styles.title}>Weather App Project</h1>
        <h1 className={styles.title__second}>
          This project I created for my GitHub account
        </h1>
      </div>
    </SpringIn>
  )
}

export default Title
