import entryCSS from "../styles/EmployeeEntry.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function EmployeeEntry({ employment, setEmployees }) {
  const allEntries = employment.map((emp, i) => (
    <div key={emp.id} className={entryCSS.employerEntry}>
      <h4>{emp.jobTitle ? emp.jobTitle : "Job Title goes here"}</h4>
      <div>
        <FaEdit />
        <FaTrash
          onClick={(e) => console.log("deleting object from employment state")}
        />
      </div>
    </div>
  ));

  return <>{allEntries}</>;
}
