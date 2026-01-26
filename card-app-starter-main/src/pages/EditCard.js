import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({ card_name: "", card_pic: "" });
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCard() {
      try {
        const cards = await getCards();
        const card = cards.find(c => c.id === Number(id));
        if (!card) {
          setError("Card not found");
        } else {
          setValues({
            card_name: card.card_name,
            card_pic: card.card_pic
          });
        }
      } catch {
        setError("Failed to load card");
      }
      setLoading(false);
    }
    loadCard();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");

    try {
      await updateCard(id, values);
      navigate("/cards");
    } catch {
      setError("Failed to update card");
    }

    setBusy(false);
  }

  if (loading) return <p>Loading card...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h2>Edit Card</h2>
      <CardForm
        values={values}
        onChange={e =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Update Card"
      />
    </main>
  );
}


// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import CardForm from "../components/CardForm";
// import { getCards, updateCard } from "../services/api";

// export default function EditCard() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [busy, setBusy] = useState(false);
//   const [error, setError] = useState("");
//   const [values, setValues] = useState({ card_name: "", card_pic: "" });

//   useEffect(() => {
//     async function loadCard() {
//       setLoading(true);
//       setError("");

//       try {
//         const cards = await getCards();
//         const card = cards.find((c) => String(c.id) === String(id));

//         if (!card) {
//           throw new Error("Card not found");
//         }

//         setValues({
//           card_name: card.card_name,
//           card_pic: card.card_pic,
//         });
//       } catch (err) {
//         console.error(err);
//         setError("Card not found or failed to load.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadCard();
//   }, [id]);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setBusy(true);
//     setError("");
//     try {
//       const res = await updateCard(id, values);
//       if (!res.ok) throw new Error(`HTTP ${res.status}`);
//       navigate("/cards");
//     } catch (err) {
//       console.error(err);
//       setError("Failed to update card.");
//     } finally {
//       setBusy(false);
//     }
//   }

//   return (
//     <section className="page">
//       <h2 className="page__title">Edit Card</h2>

//       {loading ? (
//         <div className="muted">Loading…</div>
//       ) : (
//         <div className="cardbox">
//           <CardForm
//             mode="edit"
//             values={values}
//             onChange={setValues}
//             onSubmit={handleSubmit}
//             busy={busy}
//             error={error}
//             submitText="Save Changes"
//           />
//         </div>
//       )}
//     </section>
//   );
// }
