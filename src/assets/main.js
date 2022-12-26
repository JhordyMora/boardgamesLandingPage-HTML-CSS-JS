import { BoardGame } from "./BoardGame.js";
// import fetch from "node-fetch";
// import fetch from "../../node_modules/node-fetch";
// import fetch from '../../node-fetch';

// console.log("connect");

let viewHTML=``;
let myBoardGamesList = ["Living Forest", "Blood Rage", "Terraforming Mars", "Scythe", "Mysterium", "Sagrada", "Battlestar Galactica: The Board Game", "Machi Koro", "Robinson Crusoe: Adventures on the Cursed Island", "Power Grid", "Hanabi", "7 Wonders", "7 Wonders Duel", "Dead of Winter: The Long Night", "Sheriff of Nottingham"];
let boardGameContainer = document.querySelector('#BoardGame-container');

async function fetchBoardGameInfo(BoardGameName){
    // console.log("fetch function");
    const boardGame = await fetch(`https://api.boardgameatlas.com/api/search?name=${BoardGameName}&client_id=zZpBwEBAxH`)
    const data = await boardGame.json()
    console.log(data.games[0]);
    // console.log(data.games[0].name);
    // console.log(data.games[0].price);
    // console.log(data.games[0].year_published);
    // console.log(data.games[0].min_players);
    // console.log(data.games[0].max_players);
    // console.log(data.games[0].description);
    // console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
    return new BoardGame(data.games[0].name,data.games[0].image_url, data.games[0].price, data.games[0].year_published, data.games[0].min_players, data.games[0].max_players,
        data.games[0].playtime, data.games[0].description_preview);
}


for(let boardGame of myBoardGamesList){
    try{
        let boardGameObj = await fetchBoardGameInfo(boardGame);
        // console.log(boardGameObj);
        let newViewHTML = `
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src=${boardGameObj.image_url} alt=${boardGameObj.name} class="w-full">
            </div>
            <div class="mt-4 flex justify-between" id="game-container">
                <div class="text-sm text-gray-700">
                <h3 id="title-bg">${boardGameObj.name}</h3>
                <br>
                <span>Price:</span> ${boardGameObj.price} Euros<br>
                <span>Year Published:</span> ${boardGameObj.year_published}<br>
                <span>Number of Players:</span> ${boardGameObj.min_players} - ${boardGameObj.max_players}<br>
                <span>Playtime:</span> ${boardGameObj.playtime} min.
                <br>
                <span>Description: </span><p id="description-bg">${boardGameObj.description}</p>
                </div>
            </div>
            </div>
        `;
        viewHTML = viewHTML+newViewHTML
        // boardGameContainer.appendChild(viewHTML)
    } catch{
        console.log("Boardgame not found 😮");
    }
    boardGameContainer.innerHTML = viewHTML;

}