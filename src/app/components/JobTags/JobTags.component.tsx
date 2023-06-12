import styles from './JobTags.module.scss';

interface JobTagsProps {
  role: string;
  level: string;
  languages: string[];
  handleSetFilter: (tagFilter: string) => void;
}

const JobTags = ({ role, level, languages, handleSetFilter }: JobTagsProps) => {
  return (
    <section className={styles.tags}>
      <button className={styles.tag} onClick={() => handleSetFilter(level)}>
        {level}
      </button>
      <button className={styles.tag} onClick={() => handleSetFilter(role)}>
        {role}
      </button>
      {languages.map((language, index) => {
        return (
          <button
            className={styles.tag}
            key={index}
            onClick={() => handleSetFilter(language)}
          >
            {language}
          </button>
        );
      })}
    </section>
  );
};

export default JobTags;
