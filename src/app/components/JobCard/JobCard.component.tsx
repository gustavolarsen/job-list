import Image from 'next/image';
import styles from './Jobcard.module.scss';

const JobCard = () => {
  return (
    <li className={styles.jobCard}>
      <Image
        className={styles.logo}
        src="./images/insure.svg"
        width={48}
        height={48}
        alt="Logo da empresa"
      />
      <h1>Empresa</h1>
      <h2>Nome da vaga</h2>
      <p>
        <span>1d ago</span>
        <span>Part time</span>
        <span>Remote</span>
      </p>
    </li>
  );
};

export default JobCard;
