import Section from 'components/section/Section';
import Container from 'components/container/Container';
import thirdImage from 'images/third.png';
import thirdImageMobile from 'images/thirdMobile.png';
import thirdImageMobile1 from 'images/thirdMobile1.png';
import styles from './homePageSections.module.scss';

function Third() {
  return (
    <Section variant="third" id="about">
      <Container variant="containerMain">
        <div className={styles.textWrapThird}>
          <p className={styles.text}>
            However, it is not just about the gameplay. Slots LightningTM
            fosters a sense of community and competition. Climb the leaderboards
            and compete for the top spot, showcasing your skills and
            accomplishments to players from all over the world. It's a thrilling
            race to the top that adds a new dimension to your gaming experience.
          </p>
        </div>
        <div className={styles.imgWrapThird}>
          <picture>
            <source
              srcSet={thirdImage}
              type="image/png"
              media="(min-width: 1280px)"
            />
            <source
              srcSet={thirdImageMobile}
              type="image/png"
              media="(max-width: 1279px)"
            />
            <img src={thirdImage} alt="Slots Pharaoh's" />
          </picture>
        </div>
        <div className={styles.addImg}>
          <img src={thirdImageMobile1} alt="Slots Pharaoh's" />
        </div>
      </Container>
    </Section>
  );
}

export default Third;
