import { useEffect, useState } from "react";

function RSVPPage() {
  const [rsvps, setRsvps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
      fetch("/api/rsvps")
          .then((response) => response.json())
          .then((data) => {
              console.log("Fetched RSVPs:", data); // Debugging log
              if (Array.isArray(data)) {
                  setRsvps(data);
              } else {
                  console.error("RSVPs is not an array:", data);
                  setRsvps([]);
              }
              setLoading(false);
          })
          .catch((err) => {
              console.error("Error fetching RSVPs:", err);
              setError("Failed to load RSVPs.");
              setLoading(false);
          });
  }, []);

  if (loading) return <p>Loading RSVPs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>RSVP List</h1>
      {rsvps.length === 0 ? (
        <p>No RSVPs yet.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Attendees</th>
            </tr>
          </thead>
          <tbody>
            {rsvps.map((rsvp) => (
              <tr key={rsvp.id}>
                <td>{rsvp.name}</td>
                <td>{rsvp.email}</td>
                <td>{rsvp.phone}</td>
                <td>{rsvp.attendees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RSVPPage;