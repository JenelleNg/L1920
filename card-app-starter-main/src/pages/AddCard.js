import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ card_name: "", card_pic: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");

    try {
      await addCard(values);
      navigate("/cards");
    } catch {
      setError("Failed to add card");
    }

    setBusy(false);
  }

  return (
    <main>
      <h2>Add Card</h2>
      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Add Card"
      />
    </main>
  );
}
