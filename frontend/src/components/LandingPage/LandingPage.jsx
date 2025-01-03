import { useModal } from '../../context/Modal';
import Navigation from '../Navigation/Navigation';
import RSVPModal from '../RSVPModal/RSVPModal';

function LandingPage() {
    const { setModalContent } = useModal();

    const openRSVPModal = () => {
        setModalContent(<RSVPModal />);
    };

    return (
        <>
            <Navigation />
            <img />
            <h1>MARIAM & SHAKAR TIE THE KNOT</h1>
            <h2>Join us for the celebration of love</h2>
            <div id='fun-facts-div'>
                <h2>Fun Facts About the Couple</h2>
                <p>Both Mariam and Shakar work in law enforcement. Mariam is a lawyer and Shakar is a police officer.</p>
                <p>Both Mariam and Shakar have one dimple on the same side.</p>
            </div>
            <img />
            <div>
                <p>
                    We are incredibly grateful to have you here with us on this momentous day.
                    Your presence fills our heart with warmth an joy, and we cannot thank you 
                    enough for sharing in our joyous occasion. 

                    Your love and support have been unwavering, and we are deeply touched by 
                    the sacrifices you have made to be here. Our hearts are overflowing with
                    gratitude for the role you have played in our lives, and we feel blessed 
                    to have such amazing family and friends.

                    - Shakar and Mariam
                </p>
            </div>
            <img />
            <div id='quran-ver-div'>
                <h2 id='quran-ver-heading'>IT IS NARRATED (30:21)</h2>
                <p id='quran-verse'>
                    And one of His signs is that He created you spouses from 
                    among yourselves so that you may find comfort in them. 
                    And He has placed between you compassion and mercy. 
                    Surely in this are signs for people who reflect.
                </p>
                <h3 id='quran-verse-surah'>Surah Ar-Rum 21</h3>
            </div>
            <h3 onClick={openRSVPModal} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                RSVP for Mariam and Shakar&apos;s wedding!
            </h3>


        </>
    );
}

export default LandingPage;