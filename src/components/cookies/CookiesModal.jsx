import Button from 'components/button/Button';
import styles from './CookiesModal.module.scss';

const Cookies = ({ showCookies }) => {
  return (
    <>
      <div className={styles.cookieBar}>
        <p className={styles.cookieText}>
          We kindly seek your consent to use cookies as per our policies,
          allowing you to proceed with accessing and exploring our website.
        </p>
        <Button title={'GOT IT'} onClick={() => showCookies()} />
      </div>
    </>
  );
};

export default Cookies;
