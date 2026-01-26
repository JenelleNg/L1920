const API_URL = process.env.REACT_APP_API_URL || "";

function authHeaders() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function login(credentials) {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
}

export async function getCards() {
  const res = await fetch(`${API_URL}/allcards`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export function addCard(card) {
  return fetch(`${API_URL}/addcard`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(card),
  });
}

export function updateCard(id, card) {
  return fetch(`${API_URL}/updatecard/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
}

export function deleteCard(id) {
  return fetch(`${API_URL}/deletecard/${id}`, { method: "DELETE" });
}
