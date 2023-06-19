import dynamic from 'next/dynamic';
import styles from './page.module.css';
import Header from './components/Header/Header.component';

const JobList = dynamic(() => import('./components/JobList/JobList.component'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <JobList />
    </main>
  );
}
