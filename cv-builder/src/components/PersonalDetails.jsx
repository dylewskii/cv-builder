export default function PersonalDetails({ details, setDetails }) {
  return (
    <>
      <h3>Personal Details</h3>

      <label>First Name</label>
      <input
        type="text"
        value={details.fName}
        onChange={(e) => setDetails({ ...details, fName: e.target.value })}
      />

      <label>Last Name</label>
      <input
        type="text"
        value={details.lName}
        onChange={(e) => setDetails({ ...details, lName: e.target.value })}
      />

      <label>Email</label>
      <input
        type="email"
        value={details.email}
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />

      <label>Phone</label>
      <input
        type="tel"
        value={details.tel}
        onChange={(e) => setDetails({ ...details, tel: e.target.value })}
      />

      <label>City</label>
      <input
        type="text"
        value={details.city}
        onChange={(e) => setDetails({ ...details, city: e.target.value })}
      />

      <label>Country</label>
      <input
        type="text"
        value={details.country}
        onChange={(e) => setDetails({ ...details, country: e.target.value })}
      />
    </>
  );
}
