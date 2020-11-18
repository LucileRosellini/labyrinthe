//let tabLaby = require('./labyrinthes.json');



const labyrinthe_selection = 3;
const exo_selection = "ex-1";

//[exo_selection]

let labyrinthe = tabLaby[labyrinthe_selection][exo_selection];
//console.log(labyrinthe);

const xMax = labyrinthe[labyrinthe.length - 1].posX;
const yMax = labyrinthe[labyrinthe.length - 1].posY;

function Draw() {

    var grille = document.getElementById('grille');
    labyrinthe.forEach(cellule => {
        const haut = cellule.walls[0];
        const droite = cellule.walls[1];
        const bas = cellule.walls[2];
        const gauche = cellule.walls[3];
        /*console.log("X:" + cellule.posX + " Y:" + cellule.posY + "forme :" + gauche + "/" + droite + "/" + haut + "/" + bas);*/

        var cell = document.createElement('div');
        cell.id = 'cell' + cellule.posX + cellule.posY;
        cell.innerHTML = cell.id;


          if (cellule.posX === 0 && cellule.posY === 0){
            cell.style.background = 'orange'
        }

        if (cellule.posX==xMax && cellule.posY==yMax){
            cell.style.background = 'green'
        }

        if (haut === true) {
            cell.style.borderTop = 'solid red'
        }

        if (droite) {
            cell.style.borderRight = 'solid red'
        }

        if (bas) {
            cell.style.borderBottom = 'solid red'
        }

        if (gauche) {
            cell.style.borderLeft = 'solid red'
           
        }
        //cell.style.backgroundColor ='yellow';

        grille.appendChild(cell);

    })
    grille.setAttribute("style", "grid-template-raws:3fr 20px)")
    grille.setAttribute("style", "grid-template-columns:1fr 1fr 1fr")
    grille.style.backgroundColor = 'yellow';

}



Draw();

/*function DFS(){
let S =new Array (labyrinthe.length); //represente le tableau de stack
let s = (cellule.posX === 0 && cellule.posY === 0); //represente l'entrée du labyrinthe.
let G = labyrinthe; //represente les datas du labyrinthe.



}*/



//<div class="case" id="magic">case vide</div>



