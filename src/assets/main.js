import { BoardGame } from "./BoardGame.js";
import fetch from 'node-fetch';


let myBoardGamesList = ["Living Forest", "Blood Rage", "Terraforming Mars", "Scythe", "Mysterium", "Sagrada"];

for(let boardGame of myBoardGamesList){
    let boardGameObj = await fetchBoardGameInfo(boardGame);
    console.log(boardGameObj);
}

async function fetchBoardGameInfo(BoardGameName){
    console.log("fetch function");
    const boardGame = await fetch(`https://api.boardgameatlas.com/api/search?name=${BoardGameName}&client_id=zZpBwEBAxH`)
    const data = await boardGame.json()
    // console.log(data.games[0]);
    // console.log(data.games[0].name);
    // console.log(data.games[0].price);
    // console.log(data.games[0].year_published);
    // console.log(data.games[0].min_players);
    // console.log(data.games[0].max_players);
    // console.log(data.games[0].description);
    // console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
    return new BoardGame(data.games[0].name,data.games[0].image_url, data.games[0].price, data.games[0].year_published, data.games[0].min_players, data.games[0].max_players, data.games[0].description)
}