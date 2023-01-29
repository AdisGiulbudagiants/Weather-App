import SvgStorage from "../SvgStorage/SvgStorage"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div id="footer" className={styles.footer}>
      <hr />
      <div className={styles.leftWrapper}>
        <p className={styles.position}>My name is:</p>
        <p className={styles.name}>Adis Giulbudagiants</p>
        <p className={styles.position}>My speciality:</p>
        <p className={styles.position}>Front-end Developer</p>
      </div>
      <div className={styles.rightWrapper}>
        <p className={styles.thanks}>Thank You!</p>
        <p className={styles.text}>
          {/* Я рад, что вы перешли в этот проект и надеюсь он у вас оставил хорошие
          впечатления. <br />Я буду вам признателен,если вы свяжитесь со мной
          для дальнейшего сотрудничества! <br /> (Ну или укажите на недостатки и
          недочеты,я буду рад конструктивной критике) */}
          I'm glad you came to this project and I hope it left a good impression
          on you. <br />I would be grateful if you contact to me for future
          cooperation! <br />
          (Or if you point out flaws, I will be very grateful to you)
        </p>
        <div className={styles.socialMedia}>
          <h1 className={styles.socialMedia__contacts}>My Contacts:</h1>
          <div className={styles.socialMedia__subdiv}>
            <a target="_blank" href="https://github.com/AdisGiulbudagiants">
              <SvgStorage id="github" />
            </a>
            <a target="_blank" href="https://vk.com/id383399628">
              <SvgStorage id="vk" />
            </a>
            <a target="_blank" href="https://t.me/AbuDabiSida">
              <SvgStorage id="telegram" />
            </a>
            <a
              target="_blank"
              href="https://discordapp.com/users/478565463857823748">
              <SvgStorage id="discord" />
            </a>
          </div>
          <h1 className={styles.socialMedia__contacts}>My email:</h1>
          <p className={styles.socialMedia__email}>adisforwork2001@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
