export type CommentEntry = {
  name: string;
  message: string;
  filmId: string;
};

export async function getComments(filmId: string) {
  const url = new URL(window.location.toString());
  const response = await fetch(`${url?.href}/comments?filmId=${filmId}`);

  return response.json();
}

export async function addComment(comment: CommentEntry) {
  const url = new URL(window.location.toString());
  const response = await fetch(`${url?.href}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
