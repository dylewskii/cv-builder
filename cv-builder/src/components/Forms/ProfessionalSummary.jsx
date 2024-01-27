export default function ProfessionalSummary({ summary, setSummary }) {
  return (
    <>
      <h3>Professional Summary</h3>
      <p>
        <label htmlFor="pro-summary">
          Write a short & captivating introduction. Mention your role,
          experience & most importantly - your biggest achievements, best
          qualities and skills.
        </label>
      </p>
      <textarea
        id="pro-summary"
        name="summary"
        cols="30"
        rows="4"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
    </>
  );
}
