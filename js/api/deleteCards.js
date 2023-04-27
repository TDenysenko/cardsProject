async function deleteCards(id) {
  return await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("Authorization")}`,
    },
  });
}
export default deleteCards;
