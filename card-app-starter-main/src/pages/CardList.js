import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCards() {
      setLoading(true);
      setError("");

      try {
        const data = await getCards();
        setCards(data);
      } catch {
        setError("Failed to load cards");
      }

      setLoading(false);
    }

    fetchCards();
  }, []);

  async function handleDelete(card) {
    setBusy(true);
    setError("");

    try {
      await deleteCard(card.id);
      setCards(cards.filter(c => c.id !== card.id));
    } catch {
      setError("Failed to delete card");
    }

    setBusy(false);
  }

  if (loading) {
    return <p>Loading cards...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <main>
      <div className="card-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            onDelete={handleDelete}
            busy={busy}
          />
        ))}
      </div>
    </main>
  );
}
