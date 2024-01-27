export default function PersonalDetails({ details, setDetails }) {
  return (
    <>
      <h3>Personal Details</h3>

      <label htmlFor="personal-fname">First Name</label>
      <input
        id="personal-fname"
        type="text"
        value={details.fName}
        onChange={(e) => setDetails({ ...details, fName: e.target.value })}
      />

      <label htmlFor="personal-lname">Last Name</label>
      <input
        id="personal-lname"
        type="text"
        value={details.lName}
        onChange={(e) => setDetails({ ...details, lName: e.target.value })}
      />

      <label htmlFor="personal-email">Email</label>
      <input
        id="personal-email"
        type="email"
        value={details.email}
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />

      <label htmlFor="personal-phone">Phone</label>
      <input
        id="personal-phone"
        type="tel"
        value={details.tel}
        onChange={(e) => setDetails({ ...details, tel: e.target.value })}
      />

      <label htmlFor="personal-city">City</label>
      <input
        id="personal-city"
        type="text"
        value={details.city}
        onChange={(e) => setDetails({ ...details, city: e.target.value })}
      />

      <label htmlFor="personal-country">Country</label>
      <input
        id="personal-country"
        type="text"
        value={details.country}
        onChange={(e) => setDetails({ ...details, country: e.target.value })}
      />
    </>
  );
}
