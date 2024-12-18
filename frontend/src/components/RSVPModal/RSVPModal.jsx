import { useState } from 'react';
import { useModal } from '../../context/Modal';

function RSVPModal() {
    const { closeModal } = useModal();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        attendees: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        closeModal();
    }

    return (
        <>
            <h1>RSVP Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Number of Attendees:
                    <input
                        type="number"
                        name="attendees"
                        min="1"
                        value={formData.attendees}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default RSVPModal;