import Modal from 'react-modal';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

import styles from './styles.module.scss';

export function PokemonModal({isOpen, onRequestClose, data}) {
  console.log(data)
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Close onClick={onRequestClose} className='react-modal-close'/>
      <div className={styles.container}>
        <img loading="lazy" src={data?.sprites?.front_default} height={300} width={300} alt="" />

        <div>
          <h1 className={styles.name}>{data?.name?.toUpperCase()}</h1>

          <div className={styles.abilitiesContainer}>
            <h1>Habilities</h1>
            <p> {data?.abilities?.map(item => ( `${item?.ability?.name}` ))} </p>
          </div>

          <div className={styles.hpContainer}>
            <div>
              <h1>Weight</h1>
              <p> {data?.weight} </p>
            </div>
            <div>
              <h1>Height</h1>
              <p> {data?.height} </p>
            </div>
            <div>
              <h1>XP</h1>
              <p> {data?.base_experience} </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}