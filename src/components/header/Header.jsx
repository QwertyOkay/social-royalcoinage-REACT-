import Container from 'components/container/Container';
import styles from './Header.module.scss';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <nav className={styles.navBlock}>
            <a href="#welcome" className={styles.link}>
              Welcome
            </a>
            <a href="#slots" className={styles.link}>
              Our Slots
            </a>
            <a href="#about" className={styles.link}>
              About
            </a>
            <a href="#download" className={styles.link}>
              Download
            </a>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;
