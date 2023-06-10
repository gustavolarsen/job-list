import styles from './JobList.module.scss';
import JobCard from '../JobCard/JobCard.component';

import { Jobs } from '@/app/services/Jobs.service';

const JobList = () => {
  return (
    <ul className={styles.jobList}>
      {Jobs.map((job) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </ul>
  );
};

export default JobList;
