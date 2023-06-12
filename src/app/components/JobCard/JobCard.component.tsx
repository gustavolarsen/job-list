import Image from 'next/image';
import { JobsListType } from '@/app/services/Jobs.service';
import styles from './JobCard.module.scss';

type JobCardProps = {
  children: React.ReactNode;
  job: JobsListType;
};
const JobCard = ({ job, children }: JobCardProps) => {
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
          priority={false}
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
      {children}
    </li>
  );
};

export default JobCard;
