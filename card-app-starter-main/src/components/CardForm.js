export default function CardForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
  return (
    <form onSubmit={onSubmit} className="form">
      <label>Card Name</label>
      <input
        name="card_name"
        value={values.card_name}
        onChange={onChange}
        required
      />

      <label>Card Image URL</label>
      <input
        name="card_pic"
        value={values.card_pic}
        onChange={onChange}
        required
      />

      {error && <p className="error">{error}</p>}

      <button disabled={busy}>{submitText}</button>
    </form>
  );
}

// function isValidUrl(url) {
//   try {
//     const u = new URL(url);
//     return u.protocol === "http:" || u.protocol === "https:";
//   } catch {
//     return false;
//   }
// }

// export default function CardForm({
//   mode,
//   values,
//   onChange,
//   onSubmit,
//   busy,
//   error,
//   submitText,
// }) {
//   const nameOk = values.card_name.trim().length > 0;
//   const picOk = isValidUrl(values.card_pic.trim());
//   const canSubmit = nameOk && picOk && !busy;

//   return (
//     <form className="form" onSubmit={onSubmit}>
//       <div className="field">
//         <label className="label">Card Name</label>
//         <input
//           className="input"
//           value={values.card_name}
//           onChange={(e) => onChange({ ...values, card_name: e.target.value })}
//           placeholder="e.g., Pikachu"
//         />
//       </div>

//       <div className="field">
//         <label className="label">Picture URL</label>
//         <input
//           className="input"
//           value={values.card_pic}
//           onChange={(e) => onChange({ ...values, card_pic: e.target.value })}
//           placeholder="https://..."
//         />
//         <p className="hint">Must be a valid http/https URL.</p>
//       </div>

//       {error ? <div className="alert alert--error">{error}</div> : null}

//       <div className="actions">
//         <button
//           className="btn btn--primary"
//           disabled={!canSubmit}
//           type="submit"
//         >
//           {busy ? (mode === "create" ? "Adding…" : "Saving…") : submitText}
//         </button>
//       </div>
//     </form>
//   );
// }
