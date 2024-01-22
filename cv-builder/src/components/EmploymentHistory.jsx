import EmploymentEntry from "./EmploymentEntry";

export default function EmploymentHistory({
  draftEmployment,
  setDraftEmployment,
  employment,
  setEmployment,
  handleInputChange,
  handleSubmit,
}) {
  const employmentAdded = employment !== null || employment.length !== 0;
  return (
    <>
      <h3>Employment History</h3>
      <p>Show your relevant experience.</p>

      {employmentAdded
        ? employment.map((emp, i) => (
            <EmploymentEntry
              key={emp.id}
              employment={employment}
              setEmployment={setEmployment}
              currentEmployment={emp}
              currentEmploymentIndex={i}
            />
          ))
        : null}

      <label>Job Title</label>
      <input
        type="text"
        name="jobTitle"
        value={draftEmployment.jobTitle}
        onChange={handleInputChange}
      />

      <label>Employer</label>
      <input
        type="text"
        name="employer"
        value={draftEmployment.employer}
        onChange={handleInputChange}
      />

      <label>Start & End Date</label>
      <input
        type="text"
        name="dateRange"
        placeholder="MM/YY - MM/YY"
        value={draftEmployment.dateRange}
        onChange={handleInputChange}
      />

      <label>City</label>
      <input
        type="text"
        name="city"
        value={draftEmployment.city}
        onChange={handleInputChange}
      />

      <label>Description</label>
      <input
        type="text"
        name="description"
        value={draftEmployment.description}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Save Employment</button>
    </>
  );
}
