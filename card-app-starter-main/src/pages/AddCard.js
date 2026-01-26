import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ card_name: "", card_pic: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect( () => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate])

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


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import CardForm from "../components/CardForm";
// import { addCard } from "../services/api";

// export default function AddCard() {
//   const navigate = useNavigate();
//   const [busy, setBusy] = useState(false);
//   const [error, setError] = useState("");
//   const [values, setValues] = useState({ card_name: "", card_pic: "" });

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) navigate("/login");
//   }, [navigate]);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError("");
//     setBusy(true);

//     try {
//       const res = await addCard(values);
//       if (!res.ok) throw new Error(`HTTP ${res.status}`);
//       navigate("/cards");
//     } catch (err) {
//       console.error(err);
//       setError("Failed to add card. Check API / network.");
//     } finally {
//       setBusy(false);
//     }
//   }

//   return (
//     <section className="page">
//       <h2 className="page__title">Add a New Card</h2>
//       <div className="cardbox">
//         <CardForm
//           mode="create"
//           values={values}
//           onChange={setValues}
//           onSubmit={handleSubmit}
//           busy={busy}
//           error={error}
//           submitText="Add Card"
//         />
//       </div>
//     </section>
//   );
// }
