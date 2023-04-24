/* CAMPO_MINATO */
// 1. L'utente clicca su un bottone
// 2. Che genererà una griglia di gioco quadrata 8x8
// 3. Quando l'utente clicca su ogni cella... 
// 4. ...la cella cliccata si colora di azzurro
// 5. Emetto un messaggio in console con il numero della cella cliccata



// 1. BUTTON
const btnPlay = document.querySelector(`#play`);
btnPlay.addEventListener(`click`, 
    function() {
        
        // 2. GENERO GRIGLIA
        const grid = document.querySelector(`.grid`);
        for (let i = 1; i <= 64; i++) {
            grid.innerHTML += `<div class="cell">${i}</div>`;
        };

        // 3. CLICK CELL
        const listCells = document.querySelectorAll(`.cell`);
        for (let i = 0; i < listCells.length; i++) {
            const cell = listCells[i];
            cell.addEventListener(`click`, 
                function() {
                    cell.classList.toggle(`clicked`);
                }
            )
        };

    }
)


// ------------------------------


// FUNCTION
