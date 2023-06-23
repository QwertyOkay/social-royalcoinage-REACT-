import React, { useState } from 'react';
import Img18Plus from '../../images/18-plus.png';

import Container from 'components/container/Container';
import GoogleButton from 'components/googleButton/GoogleButton';
import TermsModal from 'components/footerModals/TermsModal';
import PrivacyModal from 'components/footerModals/PrivacyModal';
import Contact from 'components/footerModals/ContactUs';
import styles from './Footer.module.scss';

function Footer() {
  const [isOpenTerms, setIsOpenTerms] = useState(false);
  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);

  return (
    <>
      <footer className={styles.footer} id="footer">
        <Container>
          <div className={styles.btn}>
            <GoogleButton />
          </div>
          <div>
            <img src={Img18Plus} alt="18+" className={styles.plus18} />
          </div>

          <div className={styles.disclaimer}>
            <p>
              Disclaimer: We would like to inform you that our platform offers
              free social games to players over the age of 18. These games do
              not provide monetary or tangible rewards, and it is important to
              note that success in them does not imply success in "real money
              gambling."
            </p>
          </div>
          <div>
            <ul className={styles.footerLinks}>
              <li className={styles.link}>
                <button type="button" onClick={() => setIsOpenTerms(true)}>
                  Terms & Conditions
                </button>
              </li>
              <li className={styles.link}>
                <button type="button" onClick={() => setIsOpenPrivacy(true)}>
                  Privacy Policy
                </button>
              </li>
              <li className={styles.link}>
                <button type="button" onClick={() => setIsOpenContact(true)}>
                  Contacts Us
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
      {isOpenTerms && <TermsModal showTerms={setIsOpenTerms} />}
      {isOpenPrivacy && <PrivacyModal showPrivacy={setIsOpenPrivacy} />}
      {isOpenContact && <Contact showContact={setIsOpenContact} />}
    </>
  );
}

export default Footer;
