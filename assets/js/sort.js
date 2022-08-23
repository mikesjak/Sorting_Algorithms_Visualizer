// Created by Jakub Mikes


let arraySize = document.querySelector('#arr_sz');

// Update the UI bars
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// Speed adjustment
let delay = 260;
let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

let array = [];
let heightOfBar = 2;

// =============== Create/Delete bars ===============

createNewArray();
function createNewArray(noOfBars = 65) {
    deleteChild();

    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*heightOfBar}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Deletes all already created bars
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){

    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);

    createNewArray(arraySize.value);

    enableSizeSlider();
    enableSortingBtn();

});

// =============== Enable/Disable buttons while sorting ===============

// Disables sorting buttons
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectSort").disabled = true;
}

// Enables sorting buttons
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectSort").disabled = false;
}

// Enables size slider
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

// Enables newArray buttons
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Disables size slider
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}
// Disables newArray buttons
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Stop sorting button
const stopSorting = document.querySelector(".stopSorting");
stopSorting.addEventListener("click", function(){

    console.log('StopSorting');

    
    const graf = document.querySelector(".flex-container");
    graf.classList.toggle('sorting');

    enableSizeSlider();
    enableSortingBtn();

});

// swap function
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}