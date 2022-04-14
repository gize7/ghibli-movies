export type CommentEntry = {
  name: string;
  message: string;
  filmId: string;
};

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://ghibli-movies-rosy.vercel.app";

export async function getComments(filmId: string) {
  const response = await fetch(`${url}/comments?filmId=${filmId}`);
  return response.json();
}

export async function addComment(comment: CommentEntry) {
  const url = new URL(window.location.toString());
  const response = await fetch(`${url}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
