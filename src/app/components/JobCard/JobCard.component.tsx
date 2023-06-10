import Image from 'next/image';
import styles from './Jobcard.module.scss';

interface IJobProps {
  job: {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: Array<string>;
    tools: Array<string>;
  };
}

const JobCard = ({ job }: IJobProps) => {
  return (
    <li
      className={`${
        job.featured
          ? `${styles.jobCard} ${styles.featured}`
          : `${styles.jobCard}`
      }`}
    >
      <div>
        <Image
          className={styles.logo}
          src={job.logo}
          width={48}
          height={48}
          alt="Logo da empresa"
        />
        <section className={styles.content}>
          <div className={styles.headerJob}>
            <h1 className={styles.companyName}>{job.company}</h1>
            {job.new && <span className={styles.new}>NEW!</span>}
            {job.featured && <span className={styles.featured}>FEATURED</span>}
          </div>

          <h2 className={styles.jobPosition}>{job.position}</h2>
          <p className={styles.info}>
            <span>{job.postedAt}</span>
            <span>{job.contract}</span>
            <span>{job.location}</span>
          </p>
        </section>
      </div>

      <section className={styles.languages}>
        {job.languages.map((language, index) => {
          return (
            <button className={styles.language} key={index}>
              {language}
            </button>
          );
        })}
      </section>
    </li>
  );
};

export default JobCard;
