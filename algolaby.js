//let tabLaby = require('./labyrinthes.json');

const labyrinthe_selection = 25;
const exo_selection = "ex-0";

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
    grille.setAttribute("style", "grid-template-raws:repeat (25fr 20px)")
    grille.setAttribute("style", "grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ")
    grille.style.backgroundColor = 'yellow';
    
}
let firstCell = labyrinthe[0];
//console.log(firstCell);
for ( let AttributCellule = 0; AttributCellule < labyrinthe.length;  AttributCellule++) {
    console.log("Attribut de la cellule : " + AttributCellule + " y/x: " + labyrinthe[AttributCellule].posY + "" + labyrinthe[AttributCellule].posX + " walls: " + labyrinthe[AttributCellule].walls);
}



DFS(labyrinthe,firstCell);

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
    S.push(s);// ajouter une paire clef:valeur => "visited":true,
    s["visited"]=true;//let w = true; //represente l'etat de visite. Si c'est non visité = true.
    while (S.length != 0) {
        const v = S.pop();
        if( isExit(v) ){ // si v est la sortie
            console.log("Sortie en coordonnés " + v.posX + "x"+ v.posY + "y");
            return;
        }
        let numeroIndex = v.posY  + ((yMax + 1) * v.posX);
        console.log("courante index : " + numeroIndex + " y/x : " + v.posY + "/" + v.posX);
        trouverVoisins(G,v).forEach(function(w) {
            let numeroIndex = w.posY + ((yMax + 1) * w.posX);
            console.log("voisin index : " + numeroIndex + " y/x : " + w.posY + "/" + w.posX);
            if( !!! w["visited"] ) {
                S.push(w);
                w["visited"] = true;
            }
        });
    }
}

function isExit (s) {
    if(s.posX == xMax && s.posY == yMax){
        console.log ("Vous sortez du labyrinthe")
        return true;
    }
    return false;
    
} 


function trouverVoisins(G,s) {
    let voisins = [];
    const haut = s.walls[0];
    const droite = s.walls[1];
    const bas = s.walls[2];
    const gauche = s.walls[3];
    const cheminsPossible = [ [0,-1], [1,0], [0,1], [-1,0] ];
    //console.log("yMax/xMax : " + yMax + "/" + xMax);
    cheminsPossible.forEach(function(nextPosition) {
        let y = s.posY + nextPosition[0];
        let x = s.posX + nextPosition[1];
        if( y >= 0 && x >= 0) {
            let numeroIndex = x + ( (xMax+1) * y );
            console.log("Checking index : " + numeroIndex + " y/x : " + y + "/" + x);
            if(nextPosition[0] == 0 && nextPosition[1] == -1 && 0 <= x <= xMax && ! haut) {
                if(!!! G[numeroIndex]["visited"] ) {
                    console.log("en haut : index  " + numeroIndex + " y/x : " + y + "/" + x);
                    voisins.push(G[numeroIndex]);
                }
            }
            if(nextPosition[0] == 1 && nextPosition[1] == 0 && 0 <= y <= yMax && ! droite) {
                if(!!! G[numeroIndex]["visited"] ) {
                    console.log("a droite : index " + numeroIndex + " y/x : " + y + "/" + x);
                    voisins.push(G[numeroIndex]);
                }
            }
            if(nextPosition[0] == 0 && nextPosition[1] == 1  && 0 <= x <= xMax && ! bas ) {
                if(!!! G[numeroIndex]["visited"] ) {
                    console.log("en bas: index " + numeroIndex + " y/x : " + y + "/" + x);
                    voisins.push(G[numeroIndex]);
                }
            }
            if(nextPosition[0] == -1 && nextPosition[1] == 0 && 0 <= y <= yMax && ! gauche) {
                if(!!! G[numeroIndex]["visited"] ) {
                    console.log("a gauche: index " + numeroIndex + " y/x : " + y + "/" + x);
                    voisins.push(G[numeroIndex]);
                }
            }
        }
    });
    return(voisins);
}