import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getCards()
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load cards");
        setLoading(false);
      });
  }, []);

  async function handleDelete(card) {
    setBusy(true);
    await deleteCard(card.id);
    setCards(cards.filter((c) => c.id !== card.id));
    setBusy(false);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onDelete={handleDelete}
          busy={busy}
        />
      ))}
    </main>
  );
}
