let gameId;

const getAllScores = async () => {
  const res = await fetch("http://localhost:3000/games");
  const data = await res.json();
  console.log(data);
};

const createNewGame = async () => {
  const reqObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ player_id: 1, score: 0 }),
  };
  const res = await fetch("http://localhost:3000/games", reqObj);
  const data = await res.json();
  console.log(data)
  gameId = data.id;
};

const finalizeScore = async ({ gameId, score }) => {
  const reqObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ score }),
  };

  const res = await fetch(`http://localhost:3000/games/${gameId}`, reqObj);
  const data = await res.json();
  console.log(data);
  console.log("Great success");
};
// fetch('http://localhost:3000/players', {
//     method: 'POST',
//     headers: {
//     ‘Content-Type’: ‘application/json’
//     },
//     body: JSON.stringify({'name': 'Seth'})
//     }).then(
//     resp => resp.json())
//     .then(
//     data => {
//     console.log(data)
// })

// fetch('http://localhost:3000/games/9', {
//     method: 'PATCH',
//     headers: {
//     ‘Content-Type’: ‘application/json’
//     },
//     body: JSON.stringify({'player_id': 22, 'score': 20})
//     })
//     .then(
//     resp => resp.json())
//     .then(
//     data => {
//     console.log(data)
// })

// fetch('http://localhost:3000/players/11', {
//     method: 'PATCH',
//     headers: {
//     ‘Content-Type’: ‘application/json’
//     },
//     body: JSON.stringify({'name': 'Carrey'})
//     })
//     .then(
//     resp => resp.json())
//     .then(
//     data => {
//     console.log(data)
// })

// fetch('http://localhost:3000/games/1', {
//     method: 'DELETE'})
//     .then(resp => resp.json())
//     .then(
//     data => {
//     console.log(data)
// })
