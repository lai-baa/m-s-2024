import { useState } from 'react';
import { useModal } from '../../context/Modal';
import styles from './RSVPModal.css';

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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const res = await fetch("/api/rsvps/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
      
          if (res.ok) {
            alert("RSVP submitted successfully!");
            closeModal();
          } else {
            const data = await res.json();
            alert("Failed to send RSVP: " + data.error);
          }
        } catch (err) {
          console.error("Error sending RSVP:", err);
          alert("Something went wrong.");
        }
    };
      
    return (
        <div className={styles.modalContainer}>
            <h1 id="rsvp-heading">RSVP Form</h1>
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
        </div>
    );
}

export default RSVPModal;