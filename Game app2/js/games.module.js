import { GameDetails } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
  constructor() {
    this.loadGames("mmorpg");

    document.querySelectorAll(".menu a").forEach((categoryLink) => {
      categoryLink.addEventListener("click", (e) => {
        document.querySelector(".menu .active").classList.remove("active");
        e.target.classList.add("active");

        this.loadGames(e.target.dataset.category);
      });
    });

    this.ui = new Ui();
  }

  async loadGames(category) {
    const loadingIndicator = document.querySelector(".loading");
    loadingIndicator.classList.remove("d-none");

    const requestOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const apiResponse = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      requestOptions
    );
    const gamesData = await apiResponse.json();

    this.ui.displayDataGame(gamesData);

    this.initializeCardEvents();

    loadingIndicator.classList.add("d-none");
  }

  initializeCardEvents() {
    document.querySelectorAll(".card").forEach((gameCard) => {
      gameCard.addEventListener("click", () => {
        const gameId = gameCard.dataset.id;
        this.showGameDetails(gameId);
      });
    });
  }

  showGameDetails(gameId) {
    const gameDetails = new GameDetails(gameId);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
