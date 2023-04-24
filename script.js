/* CAMPO_MINATO - ESERCIZIO NORMALE */
// 1. L'utente clicca su play
// 2. Che genererà una griglia di gioco quadrata 8x8
// 3. Quando l'utente clicca su ogni cella... 
// 4. ...la cella cliccata si colora di azzurro
// 5. Emetto un messaggio in console con il numero della cella cliccata


/* 1. BUTTON
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
            // 4. COLORARE DI AZZURRO
            cell.addEventListener(`click`, 
                function() {
                    cell.classList.toggle(`clicked`);
                    // 5. NUMERO IN CONSOLE
                    console.log(i + 1);
                }
            )
        };

    }
) */


// ------------------------------


/* CAMPO_MINATO - ESERCIZIO CON BONUS */
// 1. L'utente sceglie la difficoltà e clicca su play
// 2. Che genererà una griglia di gioco quadrata in base alla difficoltà (easy 7x7 / medium 9x9 / hard 10x10)
// 3. Quando l'utente clicca su ogni cella... 
// 4. ...la cella cliccata si colora di azzurro
// 5. Emetto un messaggio in console con il numero della cella cliccata


// 1. BUTTON
const btnPlay = document.querySelector(`#play`);
btnPlay.addEventListener(`click`, 
    function() {
        
        // 2. GENERO GRIGLIA
        const grid = document.querySelector(`.grid`);
        document.querySelector(`.grid`).innerHTML = "";

        let difficult = document.querySelector(`#difficult`).value.toLowerCase().replace(" ", "");
        console.log(difficult);

        // controllo difficoltà
        if (difficult == `easy`) {
            for (let i = 1; i <= 49; i++) {
                grid.innerHTML += `<div class="cell_7">${i}</div>`;
            };
        } else if (difficult == `medium`) {
            for (let i = 1; i <= 81; i++) {
                grid.innerHTML += `<div class="cell_9">${i}</div>`;
            };
        } else if (difficult == `hard`) {
            for (let i = 1; i <= 100; i++) {
                grid.innerHTML += `<div class="cell_10">${i}</div>`;
            };
        }

    }
)


// ------------------------------


// FUNCTION
