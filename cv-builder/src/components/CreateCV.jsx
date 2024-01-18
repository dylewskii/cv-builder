import createCSS from "../styles/CreateCV.module.css";

export default function CreateCV() {
  return (
    <div className={createCSS.createContainer}>
      <section className={createCSS.previewPanel}></section>
      <section className={createCSS.editPanel}>
        <form>
          <PersonalDetails />

          <ProfessionalSummary />

          <EmploymentHistory />

          <Education />

          <Skills />

          <References />
        </form>
      </section>
    </div>
  );
}

function PersonalDetails({ fName, lName, email, tel, country, city }) {
  return (
    <>
      <h3>Personal Details</h3>

      <label>First Name</label>
      <input type="text" value={fName} />

      <label>Last Name</label>
      <input type="text" value={lName} />

      <label>Email</label>
      <input type="email" value={email} />

      <label>Phone</label>
      <input type="tel" value={tel} />

      <label>Country</label>
      <input type="text" value={country} />

      <label>City</label>
      <input type="text" value={city} />
    </>
  );
}

function ProfessionalSummary({ summary }) {
  return (
    <>
      <h3>Professional Summary</h3>
      <p>
        Write a short & captivating introduction. Mention your role, experience
        & most importantly - your biggest achievements, best qualities and
        skills.
      </p>
      <textarea value={summary} name="" id="" cols="30" rows="4" />
    </>
  );
}

function EmploymentHistory({
  jobTitle,
  employer,
  dateRange,
  city,
  description,
}) {
  return (
    <>
      <h3>Employment History</h3>
      <p>Show your relevant experience.</p>

      <label>Job Title</label>
      <input type="text" value={jobTitle} />

      <label>Employer</label>
      <input type="text" value={employer} />

      <label>Start & End Date</label>
      <input type="text" placeholder="MM/YY - MM/YY" value={dateRange} />

      <label>City</label>
      <input type="text" value={city} />

      <label>Description</label>
      <input type="text" value={description} />
    </>
  );
}

function Education({ school, degree, dateRange, city, description }) {
  return (
    <>
      <h3>Education</h3>
      <p>
        Sum up the value that your learnings and background will bring to the
        job.
      </p>

      <label>School</label>
      <input type="text" value={school} />

      <label>Degree</label>
      <input type="text" value={degree} />

      <label>Start & End Date</label>
      <input type="text" placeholder="MM/YY - MM/YY" value={dateRange} />

      <label>City</label>
      <input type="text" value={city} />

      <label>Description</label>
      <input type="text" value={description} />
    </>
  );
}

function Skills({ skill, level }) {
  return (
    <>
      <h3>Skills</h3>
      <p>List your most desirable skills.</p>

      <label>Skill</label>
      <input type="text" value={skill} />

      <label>Level</label>
      <input type="range" value={level} />
    </>
  );
}

function References({ hide, referent, company, phone, email }) {
  return (
    <>
      <h3>References</h3>

      <label>Available upon request only.</label>
      <input type="radio" value={hide} />

      <label>Referent&#39;s Full Name</label>
      <input type="text" value={referent} />

      <label>Company</label>
      <input type="text" value={company} />

      <label>Phone</label>
      <input type="tel" value={phone} />

      <label>Email</label>
      <input type="email" value={email} />
    </>
  );
}
