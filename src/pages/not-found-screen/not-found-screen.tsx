import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import styles from './404.module.css';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="game">
      <header className="game__header">
        <Logo />

      </header>

      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link className={styles.active} to="/" >Вернуться на главную</Link>
      </section>
    </section>
  );
}

export default NotFoundScreen;
