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
            <p onClick={openRSVPModal} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                RSVP for Mariam and Shakar&apos;s wedding!
            </p>
        </>
    );
}

export default LandingPage;