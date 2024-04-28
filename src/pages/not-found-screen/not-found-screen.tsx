import {Link} from 'react-router-dom';
import styles from './404.module.css';
import Header from '../../components/header/header';


function NotFoundScreen(): JSX.Element {

  return (
    <section className="404">
      <header className="404__header">
        <Header />
      </header>

      <section className="404__screen">
        <h1>404. Page not found</h1>
        <Link className={styles.active} to="/" >Вернуться на главную</Link>
      </section>
    </section>
  );
}

export default NotFoundScreen;
