import styles from './spinner.module.css';
import classNames from 'classnames';


export default function Spinner({size = 'medium'}: { size?: 'small' | 'medium' }): JSX.Element {

  return (
    <div className={classNames(styles.loader, styles[size])}/>
  );

}
