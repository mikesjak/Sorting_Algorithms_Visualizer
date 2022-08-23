// Created by Jakub Mikes
// https://www.algoritmy.net/article/13/Merge-sort

async function merge(ele, low, mid, high){

    const index1 = mid - low + 1;
    const index2 = high - mid;

    let left = new Array(index1);
    let right = new Array(index2);

    // Separating two halves by color
    for(let i = 0; i < index1; i++){
        await waitforme(delay);
        ele[low + i].style.background = 'rgb(214, 28, 78)';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < index2; i++){
        await waitforme(delay);
        ele[mid + 1 + i].style.background = 'rgb(254, 219, 57)';
        right[i] = ele[mid + 1 + i].style.height;
    }

    await waitforme(delay);

    let i = 0, 
        j = 0, 
        k = low;

    while(i < index1 && j < index2){

        await waitforme(delay);
        const graph = document.querySelector(".flex-container");
        if ( graph.classList.contains('sorting') ) {
            if(parseInt(left[i]) <= parseInt(right[j])){
                if((index1 + index2) === ele.length){
                    ele[k].style.background = 'rgb(41, 52, 98)'; // dark blue
                }
                else{
                    ele[k].style.background = 'rgb(28, 214, 206)';
                }

                ele[k].style.height = left[i];
                i++;
                k++;
            }
            else{
                if((index1 + index2) === ele.length){
                    ele[k].style.background = 'rgb(41, 52, 98)'; // dark blue
                }
                else{
                    ele[k].style.background = 'rgb(28, 214, 206)';
                } 
                ele[k].style.height = right[j];
                j++;
                k++;
            }
        }
        else {
            return;
        }
    }
    // Sorting 1st half
    while(i < index1){
        await waitforme(delay);
        const graph = document.querySelector(".flex-container");
        if ( graph.classList.contains('sorting') ) {
            if((index1 + index2) === ele.length){
                ele[k].style.background = 'rgb(41, 52, 98)'; // dark blue
            }
            else{
                ele[k].style.background = 'rgb(28, 214, 206)';
            }
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else {
            return;
        } 
    }
    // Sorting 2nd half
    while(j < index2){
        await waitforme(delay);
        const graph = document.querySelector(".flex-container");
        if ( graph.classList.contains('sorting') ) {
            if((index1 + index2) === ele.length){
                ele[k].style.background = 'rgb(41, 52, 98)'; // dark blue
            }
            else{
                ele[k].style.background = 'rgb(28, 214, 206)';
            }
            ele[k].style.height = right[j];
            j++;
            k++;
        }
        else {
            return;
        }
    }
}

async function mergeSort(ele, l, r){
    if(l >= r){
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const graph = document.querySelector(".flex-container");
    const m = l + Math.floor((r - l) / 2);
    if ( graph.classList.contains('sorting') ) {
        await mergeSort(ele, l, m);
    }
    else {
        return;
    }
    if ( graph.classList.contains('sorting') ) {
        await mergeSort(ele, m + 1, r);
    }
    else {
        return;
    }
    if ( graph.classList.contains('sorting') ) {
        await merge(ele, l, m, r);
    }
    else {
        return;
    }
} 

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    const graph = document.querySelector(".flex-container");
    graph.classList.add('sorting');
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    graph.classList.toggle('sorting')
});