import Header from './components/Header/Header.component';
import JobList from './components/JobList/JobList.component';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <JobList />
    </main>
  );
}
