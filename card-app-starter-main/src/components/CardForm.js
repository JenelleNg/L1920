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
