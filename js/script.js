console.log('js ok')
/*L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/


//?Funzioni essenziali
function getRandomNumber( min, max){
    return Math.floor(Math.random()  * (max - min +1) + min) ;
}

//creo celle
function getCell(cellsPerRow,){
    const cell=document.createElement('div');
    cell.className=('cell');
    const lenghtCell=`calc(100% / ${cellsPerRow})` ;
    cell.style.width=lenghtCell;
    cell.style.height=lenghtCell;
    return cell;
}


// eleemnti  del DOM
const button=document.getElementById('bottone');
const difficulty=document.getElementById('difficult');
const grid=document.getElementById('grid-container');


//***SVOLGIMENTO  */

button.addEventListener('click', function (){
    //valore di cell e coll a seconda della scelta
    grid.innerText=' ';
    let cellPerRow= 0;
    let totalCell;
    
    switch(difficulty.value){
        case '1':
            totalCell = 100;
            break;
        case '3':
            totalCell= 49;
            break;
        default:
            totalCell = 81;
    }
    cellPerRow= Math.sqrt(totalCell);
    
    console.log(totalCell)

    for( let i=1; i<=totalCell; i++){
        const cells=getCell(cellPerRow);
        grid.appendChild(cells)
        const cellNumber=i
        cells.innerText= cellNumber

        cells.addEventListener('click', () =>{
            cells.classList.toggle('clicked')

        })
    }
})
