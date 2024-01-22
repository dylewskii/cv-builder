export default function Education({ education, setEducation }) {
  return (
    <>
      <h3>Education</h3>
      <p>
        Sum up the value that your learnings and background will bring to the
        job.
      </p>

      <label>School</label>
      <input
        type="text"
        value={education.school}
        onChange={(e) => setEducation({ ...education, school: e.target.value })}
      />

      <label>Degree</label>
      <input
        type="text"
        value={education.degree}
        onChange={(e) => setEducation({ ...education, degree: e.target.value })}
      />

      <label>Start & End Date</label>
      <input
        type="text"
        placeholder="MM/YY - MM/YY"
        value={education.dateRange}
        onChange={(e) =>
          setEducation({ ...education, dateRange: e.target.value })
        }
      />

      <label>City</label>
      <input
        type="text"
        value={education.city}
        onChange={(e) => setEducation({ ...education, city: e.target.value })}
      />

      <label>Description</label>
      <input
        type="text"
        value={education.description}
        onChange={(e) =>
          setEducation({ ...education, description: e.target.value })
        }
      />
    </>
  );
}
