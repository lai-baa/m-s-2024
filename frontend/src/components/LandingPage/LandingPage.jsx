// import { useState, useEffect, useRef } from 'react';
// import { useDispatch } from 'react-redux';
import Navigation from "../Navigation/Navigation";
import RSVPModal from "../RSVPModal/RSVPModal";

function LandingPage() {
    
    return (
        <>
            <Navigation />
            <p>RSVP for Mariam and Shakar&apos;s wedding!</p>
            <RSVPModal />
        </>
        
    )
}

export default LandingPage;