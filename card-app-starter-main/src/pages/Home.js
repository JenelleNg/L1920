import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page">
      <h1 className="page__title">Welcome 👋</h1>
      <p className="muted">
        This app demonstrates <b>React Router + CRUD</b> using your own Express
        API and cloud database.
      </p>

      <div className="cardbox">
        <h3>What you can do</h3>
        <ul className="list">
          <li>View all cards</li>
          <li>Add a new card</li>
          <li>Edit an existing card</li>
          <li>Delete a card</li>
        </ul>

        <div className="actions">
          <Link className="btn btn--primary" to="/cards">
            Go to Cards
          </Link>
          <Link className="btn btn--ghost" to="/cards/new">
            Add a Card
          </Link>
        </div>
      </div>
    </section>
  );
}
