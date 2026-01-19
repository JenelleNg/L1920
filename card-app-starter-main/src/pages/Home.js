import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <h1>Card Management App</h1>

      <p>
        This app allows you to view, add, edit, and delete cards
        stored in the database.
      </p>

      <Link to="/cards">Go to Cards</Link>
    </main>
  );
}
