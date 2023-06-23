import Section from 'components/section/Section';
import Container from 'components/container/Container';
import GoogleButton from 'components/googleButton/GoogleButton';
import firstImage from 'images/first.png';
import styles from './homePageSections.module.scss';

function Welcome() {
  return (
    <Section id="welcome">
      <Container variant="containerMain">
        <div className={styles.textWrap}>
          <h1 className={styles.title}>Welcome</h1>
          <p className={styles.text}>
            Get ready for an adventure on an extraordinary gaming journey with
            Slots LightningTM, an exhilarating mobile gaming experience that
            will take your breath away!
          </p>
          <div className={styles.btn}>
            <GoogleButton />
          </div>
        </div>

        <div className={styles.imgWrap}>
          <img src={firstImage} alt="Game1" />
        </div>
      </Container>
    </Section>
  );
}

export default Welcome;
