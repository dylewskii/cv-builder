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

  if (expanded) {
    return (
      <div
        className={
          expanded
            ? `${eeCSS.employmentEntry} ${eeCSS.expanded}`
            : eeCSS.employmentEntry
        }
      >
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
          expanded={expanded}
          handleEmploymentDelete={handleEmploymentDelete}
          handleEmploymentExpand={handleEmploymentExpand}
        />
      </div>
    );
  } else if (!expanded) {
    return (
      <div className={eeCSS.employmentEntry}>
        <h4>
          {currentEmployment.jobTitle && currentEmployment.jobTitle}
          {currentEmployment.employer && " - " + currentEmployment.employer}
        </h4>
        <EmploymentEntryControls
          expanded={expanded}
          handleEmploymentDelete={handleEmploymentDelete}
          handleEmploymentExpand={handleEmploymentExpand}
        />
      </div>
    );
  }
}

function EmploymentEntryControls({
  expanded,
  handleEmploymentDelete,
  handleEmploymentExpand,
}) {
  return (
    <div className={eeCSS.employmentEntryControls}>
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
  );
}
