export default function ProfessionalSummary({ summary, setSummary }) {
  return (
    <>
      <h3>Professional Summary</h3>
      <p>
        Write a short & captivating introduction. Mention your role, experience
        & most importantly - your biggest achievements, best qualities and
        skills.
      </p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
    </>
  );
}
