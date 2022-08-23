// Created by Jakub Mikes

async function insertSort() {

    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'rgb(41, 52, 98)';
    
    for(let i = 1; i < ele.length; i++){

        var pivot = ele[i];
        let j = i - 1;

        let key = pivot.style.height;
        pivot.style.background = 'rgb(214, 28, 78)';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {

            const graph = document.querySelector(".flex-container");
            if ( graph.classList.contains('sorting') ) {
                ele[j].style.background = 'rgb(214, 28, 78)';
                ele[j + 1].style.height = ele[j].style.height;
                j--;

                await waitforme(delay);

                for(let k = i; k >= 0; k--){
                    ele[k].style.background = 'rgb(41, 52, 98)';
                }
            }
            else {
                ele[j].style.background = 'rgb(41, 52, 98)';
                return;
            }
        }

        ele[j + 1].style.height = key;
        pivot.style.background = 'rgb(41, 52, 98)';
    }
}

const insSortbtn = document.querySelector(".insertSort");
insSortbtn.addEventListener('click', async function(){
    const graph = document.querySelector(".flex-container");
    graph.classList.add('sorting');
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    graph.classList.toggle('sorting')
});