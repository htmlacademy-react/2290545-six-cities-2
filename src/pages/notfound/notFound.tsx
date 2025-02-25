import styles from './notfound.module.css';
import {Link} from 'react-router-dom';

export default function NotFound() {

  return (

    <div>
      <h1 className={styles.text}>«404 Not Found»</h1>
      <Link className={styles.active} to="/">Вернуться на главную</Link>
    </div>
  );
}
