import eeCSS from "../styles/EmploymentEntries.module.css";
import { FaTrash, FaEdit, FaAngleDown } from "react-icons/fa";

export default function EmploymentEntry({
  employment,
  setEmployment,
  currentEmployment,
  currentEmploymentIndex,
}) {
  if (employment === null || employment.length === 0) return;

  function handleEmploymentDelete() {
    const index = currentEmploymentIndex;
    if (index !== -1) {
      const updatedEmployment = [...employment];
      updatedEmployment.splice(index, 1);
      setEmployment(updatedEmployment);
    }
  }

  return (
    <div className={eeCSS.employmentEntry}>
      <h4>
        {currentEmployment.jobTitle
          ? currentEmployment.jobTitle
          : "Job Title goes here"}
      </h4>
      <div>
        <FaTrash
          className={eeCSS.icon}
          onClick={() => handleEmploymentDelete()}
        />
        <FaEdit className={eeCSS.icon} onClick={() => console.log("editing")} />
        <FaAngleDown
          className={eeCSS.icon}
          onClick={() => console.log("expanding")}
        />
      </div>
    </div>
  );
}
