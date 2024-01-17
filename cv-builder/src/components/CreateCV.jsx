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
      <input type="text">{fName}</input>
      <label>Last Name</label>
      <input type="text">{lName}</input>
      <label>Email</label>
      <input type="email">{email}</input>
      <label>Phone</label>
      <input type="tel">{tel}</input>
      <label>Country</label>
      <input type="text">{country}</input>
      <label>City</label>
      <input type="text">{city}</input>
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
      <textarea name="" id="" cols="30" rows="4">
        {summary}
      </textarea>
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
      <input type="text">{jobTitle}</input>
      <label>Employer</label>
      <input type="text">{employer}</input>
      <label>Start & End Date</label>
      <input type="text" placeholder="MM/YY - MM/YY">
        {dateRange}
      </input>
      <label>City</label>
      <input type="text">{city}</input>
      <label>Description</label>
      <input type="text">{description}</input>
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
      <input type="text">{school}</input>
      <label>Degree</label>
      <input type="text">{degree}</input>
      <label>Start & End Date</label>
      <input type="text" placeholder="MM/YY - MM/YY">
        {dateRange}
      </input>
      <label>City</label>
      <input type="text">{city}</input>
      <label>Description</label>
      <input type="text">{description}</input>
    </>
  );
}

function Skills({ skill, level }) {
  return (
    <>
      <h3>Skills</h3>
      <p>List your most desirable skills.</p>
      <label>Skill</label>
      <input type="text">{skill}</input>
      <label>Level</label>
      <input type="range">{level}</input>
    </>
  );
}

function References({ referent, company, phone, email }) {
  return (
    <>
      <h3>References</h3>
      <input type="radio"></input>
      <label>Referent&#39;s Full Name</label>
      <input type="text">{referent}</input>
      <label>Company</label>
      <input type="text">{company}</input>
      <label>Phone</label>
      <input type="tel">{phone}</input>
      <label>Email</label>
      <input type="email">{email}</input>
    </>
  );
}
