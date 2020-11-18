//let tabLaby = require('./labyrinthes.json');



const labyrinthe_selection = 5;
const exo_selection = "ex-0";

//[exo_selection]

let labyrinthe = tabLaby[labyrinthe_selection][exo_selection];
console.log(labyrinthe);



function Draw(){

    var grille = document.getElementById('grille');

    labyrinthe.forEach(cellule => {
        const haut = cellule.walls[0];
        const droite = cellule.walls[1];
        const bas = cellule.walls[2];
        const gauche = cellule.walls[3];
        /*console.log("X:" + cellule.posX + " Y:" + cellule.posY + "forme :" + gauche + "/" + droite + "/" + haut + "/" + bas);*/
        
var cell=document.createElement('div');
cell.id='cell'+cellule.posX+cellule.posY;
cell.innerHTML=cell.id;



if(haut===true){
    cell.style.borderTop ='solid red'
//border-top:solid red;
}

if(droite){
    cell.style.borderRight ='solid red'
}

if(bas){
    cell.style.borderBottom ='solid red'
}

if(gauche){
    cell.style.borderLeft ='solid red'
}


grille.appendChild(cell);

})
grille.setAttribute("style","grid-template-raws:repeat (5fr)")
grille.setAttribute("style","grid-template-columns:1fr 1fr 1fr 1fr 1fr")
grille.style.color = 'red';
grille.style.backgroundColor = 'yellow';

}




Draw();
    




//<div class="case" id="magic">case vide</div>



