'use strict';

const EMPTY = 'empty.png';

//interaction scene

const KITCHEN = 'kitchen';

const MIXING_DRY_INGREDIENTS = 'mix-dry-ingredients';

const MIXING_WET_INGREDIENTS = 'mix-wet-ingredients';

const PLACING_COOKIES = 'placing-cookie-dough';

const BAKING_COOKIES = 'baking-cookies';

//status of cookies

const RAW_COOKIES = 'raw-cookies.png';

const GOLDEN_COOKIES = 'perfect-cookies.png';

const BURNT_COOKIES = 'burnt-cookies.png';


let counter = 3;

//current event

let sceneEvent = KITCHEN;

//starting mark
let startMark = 100;

//inventory
let slot_one = EMPTY;
let slot_two = EMPTY;
let slot_three = EMPTY;
let slot_four = EMPTY;
let slot_five = EMPTY;
let slot_six = EMPTY;
let slot_seven = EMPTY;
let slot_eight = EMPTY;
let slot_nine = EMPTY;
let icon = 'LLR_neutral(icon).png';

//dry ingredients

//wet ingredients

//place cookies
let grabbedDough = 0;
let traySpace = 9;

//bake cookies
let bakingTimer = '';


let bakeTime = 0;

let cookieStatus = RAW_COOKIES;


//the list of valid items
const ItemTypes = [
    'milk',
    'flour',
    'white-sugar',
    'brown-sugar',
    'baking-soda',
    'vanilla-extract',
    'raisins'
];

let bowlSprites = new Array(8);

bowlSprites[0] = 'bowl-one.png';
bowlSprites[1] = 'bowl-one.png';
bowlSprites[2] = 'bowl-two.png';
bowlSprites[3] = 'bowl-three.png';
bowlSprites[4] = 'bowl-four.png';
bowlSprites[5] = 'bowl-five.png';
bowlSprites[6] = 'bowl-six.png';
bowlSprites[7] = 'bowl-seven.png';
bowlSprites[8] = 'bowl-eight.png';
bowlSprites[9] = 'bowl-nine.png';

let bowlSpriteCounter = 0;

let traySprites = new Array(9);

traySprites[0] = 'tray.png';
traySprites[1] = 'tray-one.png';
traySprites[2] = 'tray-two.png';
traySprites[3] = 'tray-three.png';
traySprites[4] = 'tray-four.png';
traySprites[5] = 'tray-five.png';
traySprites[6] = 'tray-six.png';
traySprites[7] = 'tray-seven.png';
traySprites[8] = 'tray-eight.png';
traySprites[9] = 'tray-nine.png';

let traySpriteCounter = 0;





//inventroy
const inventory = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];



//inventory
function addToInventory(){

}


//point tracking system
function checkItems(){


}


function showErrorMessage(){
    
}


// collecting items
function toggleDoors(){
    
    


}

// document.addEventListener('click',(event)=>handleClickEvent(event))


function collectItems(id){
    let item = document.getElementById(id);
    console.log(item);
    // item.style.display = n

}



//placing cookies on tray
function grabDough(){
    grabbedDough = 1
    console.log('eee')
    bowlSpriteCounter ++;
    trackScene();

}

function placeDough(){
    console.log('ahh')
    if (grabbedDough == 1){
        grabbedDough = 0;
        if (traySpace > 1){
            traySpriteCounter ++;
            traySpace = traySpace - 1;
    
           }
       
        

    }
   
    trackScene();

}

function cookieCooking(){
    bakeTime ++;
    if (bakeTime >= 12 && bakeTime < 18){
        //cookies are golden
        cookieStatus = GOLDEN_COOKIES
        document.getElementById('cookies').src = cookieStatus;
    }
    else if (bakeTime > 16){
        //cookies are burnt sad sad
        cookieStatus = BURNT_COOKIES
        document.getElementById('cookies').src =cookieStatus;
    }

}
//pretend each second is one minute (12 minutes)
//start timer for the oven
function startTimer(){
    bakingTimer = setInterval(cookieCooking, 1000); 
}


function endTimer(){
    clearInterval(bakingTimer); // Stops the timer

    if (cookieStatus === RAW_COOKIES){
        startMark = startMark / 2;
        icon = 'LLR_sad(icon).png';
    }
    else if (cookieStatus === GOLDEN_COOKIES){
        icon = 'LLR_very_happy(icon).png';
    }
    else if (cookieStatus === BURNT_COOKIES){
        icon = 'LLR_very_sad(icon).png';
        startMark = startMark / 3;
    }
}


function continueButton(){
    counter++;
    trackScene();
}
//counter for scenes
function trackScene(){
    
    if (counter == 0){
        sceneEvent = KITCHEN;
    }
    else if (counter == 1){
        sceneEvent = MIXING_DRY_INGREDIENTS;
    }
    else if (counter == 2){
        sceneEvent = MIXING_WET_INGREDIENTS;
    }
    else if (counter == 3){
        sceneEvent = PLACING_COOKIES;
    }
    else if (counter == 4){
        sceneEvent = BAKING_COOKIES;
    }

    interaction(sceneEvent);
}



function interaction(sceneEvent){
    document.getElementById('character-icon').src = icon;
    //different events
    console.log(sceneEvent == PLACING_COOKIES)
    if (sceneEvent == KITCHEN ){
        document.getElementById(KITCHEN).hidden = false;
        document.getElementById(MIXING_DRY_INGREDIENTS).hidden = true;
        document.getElementById(MIXING_WET_INGREDIENTS).hidden = true;
        document.getElementById(PLACING_COOKIES).hidden = true;
        document.getElementById(BAKING_COOKIES).hidden = true;
    }
    //different events when in game
    else if (sceneEvent == MIXING_DRY_INGREDIENTS){
        document.getElementById(KITCHEN).hidden = true;
        document.getElementById(MIXING_DRY_INGREDIENTS).hidden = false;
        document.getElementById(MIXING_WET_INGREDIENTS).hidden = true;
        document.getElementById(PLACING_COOKIES).hidden = true;
        document.getElementById(BAKING_COOKIES).hidden = true;

    }
    else if (sceneEvent == MIXING_WET_INGREDIENTS){
        document.getElementById(KITCHEN).hidden = true;
        document.getElementById(MIXING_DRY_INGREDIENTS).hidden = true;
        document.getElementById(MIXING_WET_INGREDIENTS).hidden = false;
        document.getElementById(PLACING_COOKIES).hidden = true;
        document.getElementById(BAKING_COOKIES).hidden = true;

    }
    else if (sceneEvent == PLACING_COOKIES){
        console.log(document.getElementById(KITCHEN))
        document.getElementById(KITCHEN).style.display = "none";
        document.getElementById(MIXING_DRY_INGREDIENTS).hidden = true;
        console.log('help')
        document.getElementById(MIXING_WET_INGREDIENTS).hidden = true;
        document.getElementById(PLACING_COOKIES).hidden = false;
        document.getElementById(BAKING_COOKIES).hidden = true;
        document.getElementById('tray').src = traySprites[traySpriteCounter];
        document.getElementById('bowl').src = bowlSprites[bowlSpriteCounter];
        document.getElementById('tray').width = 700;
        document.getElementById('bowl').width = 700;
       
    }
    else if (sceneEvent == BAKING_COOKIES){
        document.getElementById(KITCHEN).hidden = true;
        document.getElementById(MIXING_DRY_INGREDIENTS).hidden = true;
        document.getElementById(MIXING_WET_INGREDIENTS).hidden = true;
        document.getElementById(PLACING_COOKIES).hidden = true;
        document.getElementById(BAKING_COOKIES).hidden = false;
       
    }
    
}

function start(){
    trackScene();
}




