// Created by Jakub Mikes

async function select(){

    const ele = document.querySelectorAll(".bar");

    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');

        var pivot = ele[i];
        var min = ele[i];
        let min_index = i;
        pivot.style.background = 'rgb(28, 214, 206)';
        var graph = document.querySelector(".flex-container");

        for(let j = i+1; j < ele.length; j++){

            var cmp = ele[j];
            cmp.style.background = 'rgb(214, 28, 78)';

            await waitforme(delay);
            if ( graph.classList.contains('sorting') ) {
                graph = document.querySelector(".flex-container");
                if(parseInt(cmp.style.height) < parseInt(min.style.height)){
                    if(min_index !== i){
                        min.style.background = 'rgb(254, 219, 57)';
                    }
                    min_index = j;
                    min = ele[min_index];
                } 
                else{
                    cmp.style.background = 'rgb(254, 219, 57)';
                }   
            }
            else {
                min.style.background = 'rgb(254, 219, 57)';
                cmp.style.background = 'rgb(254, 219, 57)';
                return;
            }
        }

        await waitforme(delay);

        swap(min, pivot);

        min.style.background = 'rgb(254, 219, 57)';
        pivot.style.background = 'rgb(41, 52, 98)';
    }
}


const selectSortbtn = document.querySelector(".selectSort");
selectSortbtn.addEventListener('click', async function(){
    console.log("Select sort");
    const graph = document.querySelector(".flex-container");
    graph.classList.add('sorting');
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await select();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    graph.classList.toggle('sorting')
});