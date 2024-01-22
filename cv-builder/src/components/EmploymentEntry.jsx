import eeCSS from "../styles/EmploymentEntries.module.css";
import { FaTrash, FaEdit, FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function EmploymentEntry({
  employment,
  setEmployment,
  currentEmployment,
  currentEmploymentIndex,
  expandedEntries,
  handleExpandToggle,
}) {
  if (employment === null || employment.length === 0) return;

  function handleEmploymentDelete() {
    const updatedEmployment = [...employment];
    updatedEmployment.splice(currentEmploymentIndex, 1);
    setEmployment(updatedEmployment);
  }

  const isExpanded = expandedEntries.includes(currentEmploymentIndex);

  if (isExpanded) {
    return (
      <div className={`${eeCSS.employmentEntry} ${eeCSS.expanded}`}>
        <h4>
          {currentEmployment.jobTitle && currentEmployment.jobTitle}
          {currentEmployment.employer && " - " + currentEmployment.employer}
        </h4>
        <div className={eeCSS.formExpanded}>
          <div>
            <label>Job Title</label>
            <input
              disabled
              type="text"
              name="jobTitle"
              value={currentEmployment.jobTitle}
            />
          </div>

          <div>
            <label>Employer</label>
            <input
              disabled
              type="text"
              name="employer"
              value={currentEmployment.employer}
            />
          </div>

          <div>
            <label>Start & End Date</label>
            <input
              disabled
              type="text"
              name="dateRange"
              placeholder="MM/YY - MM/YY"
              value={currentEmployment.dateRange}
            />
          </div>

          <div>
            <label>City</label>
            <input
              disabled
              type="text"
              name="city"
              value={currentEmployment.city}
            />
          </div>

          <div>
            <label>Description</label>
            <input
              disabled
              type="text"
              name="description"
              value={currentEmployment.description}
            />
          </div>
        </div>
        <EmploymentEntryControls
          isExpanded={isExpanded}
          handleEmploymentDelete={handleEmploymentDelete}
          handleExpandToggle={handleExpandToggle}
        />
      </div>
    );
  } else {
    return (
      <div className={eeCSS.employmentEntry}>
        <h4>
          {currentEmployment.jobTitle && currentEmployment.jobTitle}
          {currentEmployment.employer && " - " + currentEmployment.employer}
        </h4>
        <EmploymentEntryControls
          isExpanded={isExpanded}
          handleEmploymentDelete={handleEmploymentDelete}
          handleExpandToggle={handleExpandToggle}
        />
      </div>
    );
  }
}

function EmploymentEntryControls({
  isExpanded,
  handleEmploymentDelete,
  handleExpandToggle,
}) {
  return (
    <div className={eeCSS.employmentEntryControls}>
      <FaTrash
        className={eeCSS.icon}
        onClick={() => handleEmploymentDelete()}
      />
      <FaEdit className={eeCSS.icon} onClick={() => console.log("editing")} />
      {isExpanded ? (
        <FaAngleUp
          className={eeCSS.icon}
          onClick={() => handleExpandToggle()}
        />
      ) : (
        <FaAngleDown
          className={eeCSS.icon}
          onClick={() => handleExpandToggle()}
        />
      )}
    </div>
  );
}
