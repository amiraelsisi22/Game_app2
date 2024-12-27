import { Ui } from "./ui.module.js";

export class GameDetails {
  constructor(gameId) {
    this.uiHandler = new Ui();

    document.getElementById("btnClose").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });

    this.fetchGameDetails(gameId);
  }

  fetchGameDetails(gameId) {
    const loadingIndicator = document.querySelector(".loading");
    loadingIndicator.classList.remove("d-none");

    const requestOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => this.uiHandler.GameDetails(data))
      .catch((error) => console.error(error))
      .finally(() => {
        loadingIndicator.classList.add("d-none");
      });
  }
}
