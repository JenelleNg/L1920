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

// import { Link } from "react-router-dom";

// export default function Card({ card, onDelete, disabled }) {
//   return (
//     <div className="card">
//       <div className="card__imgWrap">
//         <img className="card__img" src={card.card_pic} alt={card.card_name} />
//       </div>

//       <div className="card__body">
//         <h3 className="card__title">{card.card_name}</h3>
//         <p className="muted small">ID: {card.id}</p>

//         <div className="actions actions--tight">
//           <Link className="btn btn--ghost" to={`/cards/${card.id}/edit`}>
//             Edit
//           </Link>
//           <button
//             className="btn btn--danger"
//             onClick={() => onDelete(card)}
//             disabled={disabled}
//             type="button"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
