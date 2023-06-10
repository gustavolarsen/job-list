import styles from './JobList.module.scss';
import JobCard from '../JobCard/JobCard.component';

const JobList = () => {
  return (
    <ul className={styles.jobList}>
      <JobCard />
      <JobCard />
      <JobCard />
    </ul>
  );
};

export default JobList;
