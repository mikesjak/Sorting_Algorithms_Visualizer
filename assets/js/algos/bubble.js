// Created by Jakub Mikes

async function bubble() {

    const ele = document.querySelectorAll(".bar");
    
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');

        for(let j = 0; j < ele.length-i-1; j++){
            
            const graph = document.querySelector(".flex-container");
            if ( graph.classList.contains('sorting') ) {
                console.log('In jth loop');
                ele[j].style.background = 'rgb(214, 28, 78)';
                ele[j+1].style.background = 'rgb(214, 28, 78)';
                if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                    console.log('In if condition');
                    await waitforme(delay);
                    swap(ele[j], ele[j+1]);
                }
                ele[j].style.background = 'rgb(254, 219, 57)';
                ele[j+1].style.background = 'rgb(254, 219, 57)';
            }
            else {
                return;
            }
        }
        ele[ele.length-1-i].style.background = 'rgb(41, 52, 98)';
    }
    ele[0].style.background = 'rgb(41, 52, 98)';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    const graph = document.querySelector(".flex-container");
    graph.classList.add('sorting');
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    graph.classList.toggle('sorting');
});