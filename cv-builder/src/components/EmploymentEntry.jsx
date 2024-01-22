import eeCSS from "../styles/EmploymentEntries.module.css";
import { FaTrash, FaEdit, FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function EmploymentEntry({
  employment,
  setEmployment,
  currentEmployment,
  currentEmploymentIndex,
  expanded,
  setExpanded,
}) {
  if (employment === null || employment.length === 0) return;

  function handleEmploymentDelete() {
    const updatedEmployment = [...employment];
    updatedEmployment.splice(currentEmploymentIndex, 1);
    setEmployment(updatedEmployment);
  }

  function handleEmploymentExpand() {
    setExpanded(!expanded);
  }

  return (
    <div className={eeCSS.employmentEntry}>
      <h4>
        {currentEmployment.jobTitle && currentEmployment.jobTitle}
        {currentEmployment.employer && " - " + currentEmployment.employer}
      </h4>
      <div>
        <FaTrash
          className={eeCSS.icon}
          onClick={() => handleEmploymentDelete()}
        />
        <FaEdit className={eeCSS.icon} onClick={() => console.log("editing")} />
        {expanded ? (
          <FaAngleUp
            className={eeCSS.icon}
            onClick={() => handleEmploymentExpand()}
          />
        ) : (
          <FaAngleDown
            className={eeCSS.icon}
            onClick={() => handleEmploymentExpand()}
          />
        )}
      </div>
    </div>
  );
}
