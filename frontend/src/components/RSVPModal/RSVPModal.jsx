
// import { useModal } from '../../context/Modal';

function RSVPModal() {
    // const { closeModal } = useModal();

    return (
        <>
            <h1>RSVP Form</h1>
            <label>
                Name:
                <input
                type="text"
                required
                />
            </label>
            <label>
                Phone Number:
                <input
                type="text"
                required
                />
            </label>
            <label>
                Email
                <input
                type="text"
                required
                />
            </label>
            <label>
                Number of Attendees
                <input
                type="number"
                required
                />
            </label>
            <button type="submit">Submit</button>
        </>
    )
}

export default RSVPModal;