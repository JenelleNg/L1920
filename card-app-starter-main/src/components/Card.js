import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy }) {
  return (
    <div className="card">
      <img src={card.card_pic} alt={card.card_name} />
      <h3>{card.card_name}</h3>
      <p>ID: {card.id}</p>

      <div className="card-actions">
        <Link to={`/cards/${card.id}/edit`}>Edit</Link>
        <button
          disabled={busy}
          onClick={() =>
            window.confirm("Are you sure you want to delete this card?") &&
            onDelete(card)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}
