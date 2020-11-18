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


        if (cellule.posX === 0 && cellule.posY === 0) {
            cell.style.background = 'orange'
        }

        if (cellule.posX == xMax && cellule.posY == yMax) {
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


/*DFS-iterative (G, s):                                   
→ let S be a stack
→ insert s in the stack
→ mark s as visited.

while ( S is not empty):
    → Pop an element “v” from stack to visit next
    → if “v” is the exit : return
    for all neighbours w of v in Graph G:
         if w is not visited :
              → insert w in the stack         
              → mark w as visited
→ return False
-----------------------------------------------------------
Explication des différentes variables : 
G → votre labyrinthe
s → entrée du labyrinthe
Stack → voir ressources*/

function DFS(G, s) {
    //let s = (cellule.posX === 0 && cellule.posY === 0); //represente l'entrée du labyrinthe.
    
    //let G = labyrinthe; //represente les datas du labyrinthe.
    //let s = labyrinthe[0];// L'objet json dans lequel on trouve les element du premier array
    let S = [];//represente les positions visitée.
    
    
    S.push(s);
    // ajouter une paire clef:valeur => "visited":true,

    s["visited"]=true;

    
    //let w = true; //represente l'etat de visite. Si c'est non visité = true.

    while (S.length != 0) {
        const v = S.pop();
        if(v[posX]==Xmax && v[posY]==Ymax){ // v est la sortie
            return;
        }
        {

        }

       


        /*if (v == (xMax && yMax)) {
            //return for all neighbours w of v in Graph G:
            if (w == true) {
                const w = S.push();
                w = false;
            }
            //return False
        }*/


    }

}

function trouverVoisins(s) {
    let voisins = [];

    if (! s.walls[0] && s.posY > 0 ) {
        voisins.push()
    }


}


//<div class="case" id="magic">case vide</div>



