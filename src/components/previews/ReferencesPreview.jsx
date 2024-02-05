import previewCSS from "../../styles/Preview.module.css";

export default function ReferencesPreview({ refe }) {
  return (
    <div className={previewCSS.referencesBox}>
      <div className={previewCSS.referencesHeader}>
        <h5>
          {refe.referent} {refe.company}
        </h5>
      </div>
      <div className={previewCSS.referencesBody}>
        <p>{refe.email}</p>
        <p>{refe.phone}</p>
      </div>
    </div>
  );
}
