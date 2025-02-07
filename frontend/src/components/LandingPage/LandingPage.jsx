import { useModal } from '../../context/Modal';
// import Navigation from '../Navigation/Navigation';
import RSVPModal from '../RSVPModal/RSVPModal';
import styles from './LandingPage.css';

function LandingPage() {
    const { setModalContent } = useModal();

    const openRSVPModal = () => {
        setModalContent(<RSVPModal />);
    };

    return (
        <div className={styles.landingContainer}>
            {/* <Navigation /> */}
            {/* Updated image paths */}
            {/* <img src="/images/banner.jpg" alt="Wedding Banner" className={styles.bannerImage} /> */}
            <h1>MARIAM & SHAKAR TIE THE KNOT</h1>
            <h2>Join us for the celebration of love</h2>
            <div id="fun-facts-div" className={styles.funFacts}>
                <h2>Fun Facts About the Couple</h2>
                <p>Both Mariam and Shakar work in law enforcement. Mariam is a lawyer and Shakar is a police officer.</p>
                <p>Both Mariam and Shakar have one dimple on the same side.</p>
            </div>
            <img src="/images/IMG_0193.JPG" alt="Couple Photo" />
            <div className={styles.gratitudeMessage}>
                <p>
                    We are incredibly grateful to have you here with us on this momentous day.
                    Your presence fills our heart with warmth and joy, and we cannot thank you
                    enough for sharing in our joyous occasion.
                    <br />
                    Your love and support have been unwavering, and we are deeply touched by
                    the sacrifices you have made to be here. Our hearts are overflowing with
                    gratitude for the role you have played in our lives, and we feel blessed
                    to have such amazing family and friends.
                    <br />
                    <br />
                    - Shakar and Mariam
                </p>
            </div>
            <div id="quran-ver-div" className={styles.quranVerse}>
                <h2 id="quran-ver-heading">IT IS NARRATED (30:21)</h2>
                <p id="quran-verse">
                    And one of His signs is that He created you spouses from
                    among yourselves so that you may find comfort in them.
                    And He has placed between you compassion and mercy.
                    Surely in this are signs for people who reflect.
                </p>
                <h3 id="quran-verse-surah">Surah Ar-Rum 21</h3>
            </div>
            <h3 onClick={openRSVPModal} className={styles.rsvpLink}>
                RSVP for Mariam and Shakar&apos;s wedding!
            </h3>
        </div>
    );
}

export default LandingPage;