'use strict'

window.onload=function(){

    let searchButton = document.querySelector('.btn_result');

    searchButton.addEventListener('click', function(){
        
        let querry = {
            info: document.querySelector('.select_list_info').value,
            operator: document.querySelector('.select_list_operator').value,
            option: document.querySelector('.filter_option').value
        };
        
        console.log(querry);
    })
}
