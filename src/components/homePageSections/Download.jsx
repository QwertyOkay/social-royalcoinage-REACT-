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
            As you traverse this enchanting realm, remember that the essence of
            Slots Pharaoh lies in the spirit of adventure and the pursuit of
            joy. It's a place where imagination reigns supreme, and where the
            beauty of the journey outweighs any external measure of success. So
            step into this wondrous world and let your spirit soar. The magic of
            Slots Pharaoh awaits, ready to ignite your sense of wonder and set
            your heart ablaze with joy.
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
            <img src={fourthImage} alt="Slots Pharaoh's" />
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
