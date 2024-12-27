export class Ui {
   displayDataGame(data) {
      let gamesBox = '';
      
      
      data.forEach(game => {
         gamesBox += `
         <div class="col">
            <div data-id="${game.id}" class="card h-100 bg-transparent" role="button">
               <div class="card-body">
                  <figure class="position-relative">
                     <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}" alt="Game Image"/>
                  </figure>

                  <figcaption>
                     <div class="hstack justify-content-between">
                        <h3 class="h6 small">${game.title}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                     </div>

                     <p class="card-text small text-center opacity-50">
                        ${game.short_description.split(" ", 8).join(" ")} <!-- Limit description to 8 words -->
                     </p>
                  </figcaption>
               </div>

               <footer class="card-footer small hstack justify-content-between">
                  <span class="badge badge-color">${game.genre}</span>
                  <span class="badge badge-color">${game.platform}</span>
               </footer>
            </div>
         </div>
         `;
      });

      document.getElementById("gameData").innerHTML = gamesBox;
   }

   GameDetails(data) {
      const content = `
         <div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100" alt="Game Details Image" />
         </div>
         <div class="col-md-8">
            <h3>Title: ${data.title}</h3>
            <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info">${data.platform}</span></p>
            <p>Status: <span class="badge text-bg-info">${data.status}</span></p>
            <p class="small">${data.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
         </div>
      `;

      document.getElementById("detailsContent").innerHTML = content;
   }
}
