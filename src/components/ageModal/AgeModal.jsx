import Modal from 'components/modal';
import Button from 'components/button/Button';
import styles from './AgeModal.module.scss';

function AgeModal({ showAgeModal }) {
  return (
    <Modal variant="ageModal" closeModal={() => showAgeModal(true)}>
      <div className={styles.text}>
        <p>
          A free social game is now available! There will be no real-money
          gambling or betting. Individuals over the age of 18.
        </p>
        <p>Are you ready to start playing?</p>
      </div>
      <div className={styles.buttons}>
        <Button title={'YES'} onClick={() => showAgeModal(false)}></Button>
        <Button
          variant="btnNo"
          title={'NO'}
          onClick={() => showAgeModal(true)}
        ></Button>
      </div>
    </Modal>
  );
}

export default AgeModal;
