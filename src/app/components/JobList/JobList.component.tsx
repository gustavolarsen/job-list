'use client';
import { useEffect, useState } from 'react';
import { JobsList } from '@/app/services/Jobs.service';
import JobCard from '../JobCard/JobCard.component';
import JobTags from '../JobTags/JobTags.component';
import styles from './JobList.module.scss';
import FilterCard from '../Filter/FilterCard.component';

const JobList = () => {
  const [filterList, setFilterList] = useState<string[]>([]);
  const [jobsList, setJobsList] = useState(JobsList);

  const filterJobs = () => {
    const filteredJobs =
      filterList.length > 0
        ? jobsList.filter((job) => {
            const roleFilterApplied = filterList.includes(job.role);
            const levelFilterApplied = filterList.includes(job.level);
            const languagesFilterApplied = job.languages.some((item) =>
              filterList.includes(item)
            );

            return (
              roleFilterApplied || levelFilterApplied || languagesFilterApplied
            );
          })
        : JobsList;

    setJobsList(filteredJobs);
  };

  const handleSetFilterJob = (tagFilter: string) => {
    if (!filterList.includes(tagFilter))
      setFilterList([...filterList, tagFilter]);
  };

  const handleRemoveFilter = (tagFilter: string) => {
    const newFilter = filterList.filter((tag) => tag !== tagFilter);
    setFilterList(newFilter);
  };

  useEffect(() => {
    filterJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterList]);

  return (
    <ul className={styles.jobList}>
      {filterList.length > 0 ? (
        <FilterCard
          filterList={filterList}
          handleRemoveFilter={handleRemoveFilter}
        />
      ) : null}
      {jobsList.map((job) => {
        return (
          <JobCard key={job.id} job={job}>
            <JobTags
              role={job.role}
              level={job.level}
              languages={job.languages}
              handleSetFilter={handleSetFilterJob}
            />
          </JobCard>
        );
      })}
    </ul>
  );
};

export default JobList;
