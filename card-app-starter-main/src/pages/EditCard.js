import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    card_name: "",
    card_pic: "",
  });

  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getCards().then((cards) => {
      const card = cards.find((c) => c.id == id);
      setValues({
        card_name: card.card_name,
        card_pic: card.card_pic,
      });
      setLoading(false);
    });
  }, [id]);

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);

    await updateCard(id, values);
    navigate("/cards");
  }

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <h2>Edit Card</h2>

      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Update Card"
      />
    </main>
  );
}
