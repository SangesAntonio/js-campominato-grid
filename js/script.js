console.log('js ok')
/*L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/


//?Funzioni essenziali




// eleemnti  del DOM
const button=document.getElementById('bottone');
const difficulty=document.getElementById('difficult');


//***SVOLGIMENTO  */

button.addEventListener('click', function (){

    let cell;
    let coll;
    const totalCell= cell * coll;
    
    if(difficulty.value == 1){
        cell = 10
        coll = 10
    }else if( difficulty.value == 2){
        cell = 9;
        coll = 9;
        
    }else{
        cell = 7;
        coll = 7;
    }
    
    console.log(cell, coll)
    
    
    
    
})