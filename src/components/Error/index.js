import styles from './styles.module.scss';
import { ReactComponent as ErrorImage } from '../../assets/icons/404.svg';
import { useHistory } from 'react-router-dom';

export function Error() {
  const history = useHistory();
  return(
    <div className={styles.container}>
      <ErrorImage />
      <button onClick={() => history.push('/')}>Return</button>
    </div>
  );
}