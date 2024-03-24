import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import styles from './404.module.css';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="game">
      <header className="game__header">
        <Logo />
        <Header />
        <Cities/>
      </header>

      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link className={styles.active} to="/" >Вернуться на главную</Link>
      </section>
    </section>
  );
}

export default NotFoundScreen;
