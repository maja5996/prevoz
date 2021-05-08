import styles from "../styles/Home.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.service}>
        <h4>Prevoz putnika</h4>
        <p>
          Želite da Vaše putovanje započne sa praga Vaše kuće ili ispred vrata
          Vaše zgrade u onoliko sati u koliko Vama odgovara? Želite da napravite
          svoj plan potovanja?
        </p>
      </div>

      <div className={styles.service}>
        <h4>Prevoz paketa</h4>
        <p>
          Prevoz paketa i robe kombijem Vam može ponuditi sve prednosti
          profesionalnog prevoza pošiljki i još više od toga. Mi Vam nudimo brz
          i bezbedan prevoz Vaših paketa, pisama i pošiljki.
        </p>
      </div>

      <div className={styles.service}>
        <h4>Selidbe</h4>
      </div>

      <div className={styles.service}>
        <h4>Prevoz automobila</h4>
      </div>
    </div>
  );
};

export default Services;
