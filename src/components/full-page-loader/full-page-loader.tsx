import Spinner from '../spinner/spinner.tsx';
import styles from './full-page-loader.module.css';

export default function FullPageLoader() {
  return (
    <div className={styles.flex}>
      <Spinner/>
    </div>);
}

