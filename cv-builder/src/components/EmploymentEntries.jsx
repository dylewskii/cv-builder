import eeCSS from "../styles/EmploymentEntries.module.css";
import { FaTrash, FaEdit, FaAngleDown } from "react-icons/fa";

export default function EmploymentEntries({ employment, setEmployment }) {
  if (employment.length === 0) return;

  function handleEmploymentDelete(empId) {
    const index = employment.findIndex((emp) => emp.id === empId);
    if (index !== -1) {
      const updatedEmployment = [...employment];
      updatedEmployment.splice(index, 1);
      setEmployment(updatedEmployment);
    }
  }

  const allEntries = employment.map((emp, i) => (
    <div key={emp.id} className={eeCSS.employerEntry}>
      <h4>{emp.jobTitle ? emp.jobTitle : "Job Title goes here"}</h4>
      <div>
        <FaTrash
          className={eeCSS.icon}
          onClick={() => handleEmploymentDelete(emp.id)}
        />
        <FaEdit className={eeCSS.icon} />
        <FaAngleDown className={eeCSS.icon} />
      </div>
    </div>
  ));

  return <>{allEntries}</>;
}
