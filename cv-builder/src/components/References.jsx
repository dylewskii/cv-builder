export default function References({ references, setReferences }) {
  return (
    <>
      <h3>References</h3>

      <div>
        <label>Available upon request only</label>
        <input
          type="radio"
          value={references.hide}
          onChange={(e) =>
            setReferences({ ...references, hide: e.target.value })
          }
        />
      </div>

      <label>Referent&#39;s Full Name</label>
      <input
        type="text"
        value={references.referent}
        onChange={(e) =>
          setReferences({ ...references, referent: e.target.value })
        }
      />

      <label>Company</label>
      <input
        type="text"
        value={references.company}
        onChange={(e) =>
          setReferences({ ...references, company: e.target.value })
        }
      />

      <label>Phone</label>
      <input
        type="tel"
        value={references.phone}
        onChange={(e) =>
          setReferences({ ...references, phone: e.target.value })
        }
      />

      <label>Email</label>
      <input
        type="email"
        value={references.email}
        onChange={(e) =>
          setReferences({ ...references, email: e.target.value })
        }
      />
    </>
  );
}
