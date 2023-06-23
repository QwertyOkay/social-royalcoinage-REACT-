import Modal from 'components/modal';
import Button from 'components/button/Button';
import styles from './AgeModal.module.scss';

function AgeModal({ showAgeModal }) {
  return (
    <Modal variant="ageModal" closeModal={() => showAgeModal(true)}>
      <div className={styles.text}>
        <p>
          Please be aware that our platform provides engaging social games
          without the use of real-money gambling or betting. These games are
          intended for users who are at least 18 years old.
        </p>
        <p>Are you ready for the thrill?</p>
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
