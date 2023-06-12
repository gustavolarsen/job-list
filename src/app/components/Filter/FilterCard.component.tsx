import styles from './FilterCard.module.scss';

interface FilterCardProps {
  filterList: string[];
  handleRemoveFilter: (tagFilter: string) => void;
}

const FilterCard = ({ filterList, handleRemoveFilter }: FilterCardProps) => {
  return (
    <section className={styles.filterCard}>
      {filterList.map((filterTag, index) => {
        return (
          <button
            className={styles.filterTag}
            key={index}
            onClick={() => handleRemoveFilter(filterTag)}
          >
            {filterTag}
          </button>
        );
      })}
    </section>
  );
};

export default FilterCard;
