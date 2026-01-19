const API_URL = process.env.REACT_APP_API_URL || "";

export async function getCards() {
  const res = await fetch(API_URL + "/allcards");

  if (!res.ok) {
    throw new Error("Failed to fetch cards");
  }

  return res.json();
}

export async function addCard(card) {
  const res = await fetch(API_URL + "/addcard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  if (!res.ok) {
    throw new Error("Failed to add card");
  }
}

export async function updateCard(id, card) {
  const res = await fetch(API_URL + "/editcard/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  if (!res.ok) {
    throw new Error("Failed to update card");
  }
}

export async function deleteCard(id) {
  const res = await fetch(API_URL + "/deletecard/" + id, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete card");
  }
}
