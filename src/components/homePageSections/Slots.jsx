import Section from 'components/section/Section';
import Container from 'components/container/Container';
import secondImage from 'images/second.png';
import secondImageMobile from 'images/secondMobile.png';
import styles from './homePageSections.module.scss';

function Second() {
  return (
    <Section variant="second" id="slots">
      <Container variant="containerMainSecond">
        <div className={styles.textWrapSecond}>
          <p className={styles.text}>
            Enter the captivating world of Slots LightningTM to immerse yourself
            in a world of pure excitement. This game has an unrivaled selection
            of exciting free slot machine games, all of which are designed to
            keep you on the edge of your seat. There's something for every
            player's taste, from classic favorites to innovative new titles.
          </p>
        </div>
        <div className={styles.imgWrapSecond}>
          <picture>
            <source
              srcSet={secondImage}
              type="image/png"
              media="(min-width: 1280px)"
            />
            <source
              srcSet={secondImageMobile}
              type="image/png"
              media="(max-width: 1279px)"
            />
            <img src={secondImage} alt="Slots Pharaoh's" />
          </picture>
        </div>
      </Container>
    </Section>
  );
}

export default Second;
