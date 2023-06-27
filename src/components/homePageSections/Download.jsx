import Section from 'components/section/Section';
import Container from 'components/container/Container';
import GoogleButton from 'components/googleButton/GoogleButton';
import fourthImage from 'images/fourth.png';
import fourthMobile from 'images/fourthMobile.png';
import styles from './homePageSections.module.scss';

function Fourth() {
  return (
    <Section variant="second" id="download">
      <Container variant="containerMainFourth">
        <div className={styles.textWrapFourth}>
          <p className={styles.text}>
            Download Slots Lightning™ now and get ready to unleash your inner
            high-roller. This game is a true testament to the electrifying world
            of slot machines, offering non-stop entertainment, thrilling wins,
            and a gaming experience that will keep you coming back for more.
            Join the millions of players who have already discovered the magic
            of Slots Lightning™ and get ready to be blown away!
          </p>
        </div>
        <div className={styles.imgWrapFourth}>
          <picture>
            <source
              srcSet={fourthImage}
              type="image/png"
              media="(min-width: 1280px)"
            />
            <source
              srcSet={fourthMobile}
              type="image/png"
              media="(max-width: 1279px)"
            />
            <img src={fourthImage} alt="The Game" />
          </picture>
        </div>
        <div className={styles.btnFourth}>
          <GoogleButton />
        </div>
      </Container>
    </Section>
  );
}

export default Fourth;
