import { useModal } from '../../context/Modal';
// import Navigation from '../Navigation/Navigation';
import RSVPModal from '../RSVPModal/RSVPModal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './LandingPage.css';

function LandingPage() {
    const { setModalContent } = useModal();

    const openRSVPModal = () => {
        setModalContent(<RSVPModal />);
    };

    // Carousel settings
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one image at a time
        slidesToScroll: 1,
        autoplay: true, // Auto-slide images
        autoplaySpeed: 3000, // Change image every 3 seconds
    };

    return (
        <div className={styles.landingContainer}>
            {/* <Navigation /> */}
            
            <h1>MARIAM & SHAKAR TIE THE KNOT</h1>
            <h2>Join us for the celebration of love</h2>
            <h2>Save the date: September 10th, 2025</h2>
            <h2>Venue: Suleymaniye Mosque</h2>
            <h2>459 Deer Park Rd</h2>
            <h2>Dix Hills, NY 11746</h2>
            <div id="quran-ver-div" className={styles.quranVerse}>
                <h2 id="quran-ver-heading">IT IS NARRATED (30:21)</h2>
                <p id="quran-verse">
                    &quot;And one of His signs is that He created you spouses from
                    among yourselves so that you may find comfort in them.
                    And He has placed between you compassion and mercy.
                    Surely in this are signs for people who reflect.&quot;
                </p>
                <h3 id="quran-verse-surah">Surah Ar-Rum 21</h3>
            </div>

            {/* Carousel */}
            <Slider {...settings} className={styles.carouselContainer}>
                <div>
                    <img src="/images/IMG_0193.JPG" alt="Slide 1" className={styles.carouselImage} />
                </div>
                <div>
                    <img src="/images/IMG_2741.jpg" alt="Slide 2" className={styles.carouselImage} />
                </div>
                <div>
                    <img src="/images/IMG_2741.jpg" alt="Slide 3" className={styles.carouselImage} />
                </div>
            </Slider>
            {/* <img src="/images/IMG_0193.JPG" alt="Couple Photo" /> */}
            <div id="couple-message-div" className={styles.gratitudeMessage}>
                <p id="couple-message">
                    We are incredibly grateful to have you here with us on this momentous day.
                    Your presence fills our heart with warmth and joy, and we cannot thank you
                    enough for sharing in our joyous occasion. Your love and support have been 
                    unwavering, and we are deeply touched by the sacrifices you have made to be 
                    here. Our hearts are overflowing with gratitude for the role you have played 
                    in our lives, and we feel blessed to have such amazing family and friends.
                    <h3 id="mariam-shakar-signoff">Shakar and Mariam</h3>
                </p>
            </div>
            <div id="fun-facts-div" className={styles.funFacts}>
                <h2>Fun Facts About the Couple</h2>
                <p>Both Mariam and Shakar work in law enforcement. Mariam is a lawyer and Shakar is a police officer.</p>
                <p>Both Mariam and Shakar have one dimple on the same side.</p>
            </div>
            <h3 onClick={openRSVPModal} className={styles.rsvpLink}>
                RSVP for Mariam and Shakar&apos;s wedding!
            </h3>
        </div>
    );
}

export default LandingPage;