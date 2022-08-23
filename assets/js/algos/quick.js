// Created by Jakub Mikes
// https://www.algoritmy.net/article/10/Quicksort

// Color pallete
// dark blue   rgb(41, 52, 98)
// cyan       rgb(28, 214, 206)
// yellow     rgb(254, 219, 57)
// red        rgb(214, 28, 78)
// purple     rgb(85, 73, 148)
// pink       rgb(246, 117, 168)

async function quickSort(ele, left, right){

    var graph = document.querySelector(".flex-container");
    if ( ! graph.classList.contains('sorting') ) return;

    if ( left < right ) {
        let boundary = left;
        ele[right-1].style.background = 'rgb(214, 28, 78)';

        for ( let i = left + 1; i < right; i++ ) {

            graph = document.querySelector(".flex-container");
            if ( ! graph.classList.contains('sorting') ) return;

            ele[i].style.background = 'rgb(254, 219, 57)';
            await waitforme(delay);

            if ( parseInt(ele[i].style.height) < parseInt(ele[left].style.height) ) {
                await waitforme(delay);
                swap(ele[i], ele[++boundary]);

                ele[boundary].style.background = 'rgb(85, 73, 148)';
                if ( boundary != i ) ele[i].style.background = 'rgb(85, 73, 148)';

            }
            else {
                ele[i].style.background = 'rgb(246, 117, 168)';
            }
        }

        graph = document.querySelector(".flex-container");
        if ( ! graph.classList.contains('sorting') ) return;

        await waitforme(delay);
        swap(ele[left], ele[boundary]);
        ele[right-1].style.background = 'rgb(246, 117, 168)';
        ele[boundary].style.background = 'rgb(41, 52, 98)';

        graph = document.querySelector(".flex-container");
        if ( ! graph.classList.contains('sorting') ) return;

        await quickSort(ele, left, boundary);

        graph = document.querySelector(".flex-container");
        if ( ! graph.classList.contains('sorting') ) return;

        await quickSort(ele, boundary + 1, right);
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    const graph = document.querySelector(".flex-container");
    graph.classList.add('sorting');

    let ele = document.querySelectorAll('.bar');
    let left = 0;
    let right = ele.length;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, left, right);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    console.log("end");
    graph.classList.toggle('sorting');
});