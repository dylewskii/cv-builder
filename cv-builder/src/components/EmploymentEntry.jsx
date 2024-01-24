import eeCSS from "../styles/EmploymentEntries.module.css";
import {
  FaTrash,
  FaEdit,
  FaAngleDown,
  FaAngleUp,
  FaRegSave,
} from "react-icons/fa";

export default function EmploymentEntry({
  employment,
  setEmployment,
  currentEmployment,
  currentEmploymentIndex,
  expandedEntries,
  handleExpandToggle,
  editingEntries,
  handleEditClick,
}) {
  if (employment === null || employment.length === 0) return;

  function handleEmploymentDelete() {
    const updatedEmployment = [...employment];
    updatedEmployment.splice(currentEmploymentIndex, 1);
    setEmployment(updatedEmployment);
  }

  const isExpanded = expandedEntries.includes(currentEmploymentIndex);
  const isBeingEdited = editingEntries.includes(currentEmploymentIndex);

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
              disabled={!isBeingEdited}
              type="text"
              name="jobTitle"
              value={currentEmployment.jobTitle}
              // onChange={(e) => handleInp}
            />
          </div>

          <div>
            <label>Employer</label>
            <input
              disabled={!isBeingEdited}
              type="text"
              name="employer"
              value={currentEmployment.employer}
            />
          </div>

          <div>
            <label>Start & End Date</label>
            <input
              disabled={!isBeingEdited}
              type="text"
              name="dateRange"
              placeholder="MM/YY - MM/YY"
              value={currentEmployment.dateRange}
            />
          </div>

          <div>
            <label>City</label>
            <input
              disabled={!isBeingEdited}
              type="text"
              name="city"
              value={currentEmployment.city}
            />
          </div>

          <div>
            <label>Description</label>
            <input
              disabled={!isBeingEdited}
              type="text"
              name="description"
              value={currentEmployment.description}
            />
          </div>
        </div>
        <EmploymentEntryControls
          isExpanded={isExpanded}
          isBeingEdited={isBeingEdited}
          handleEmploymentDelete={handleEmploymentDelete}
          handleExpandToggle={handleExpandToggle}
          handleEditClick={handleEditClick}
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
          isBeingEdited={isBeingEdited}
          handleEmploymentDelete={handleEmploymentDelete}
          handleExpandToggle={handleExpandToggle}
          handleEditClick={handleEditClick}
        />
      </div>
    );
  }
}

function EmploymentEntryControls({
  isExpanded,
  isBeingEdited,
  handleEmploymentDelete,
  handleExpandToggle,
  handleEditClick,
}) {
  return (
    <div className={eeCSS.employmentEntryControls}>
      <FaTrash
        className={eeCSS.icon}
        onClick={() => handleEmploymentDelete()}
      />
      {isBeingEdited ? (
        <FaRegSave className={eeCSS.icon} onClick={() => handleEditClick()} />
      ) : (
        <FaEdit className={eeCSS.icon} onClick={() => handleEditClick()} />
      )}
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
