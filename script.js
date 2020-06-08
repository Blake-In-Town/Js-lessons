// Написать простое ToDo App — список задач с возможностью добавления новых пунктов и смены статуса готовности каждого пункта (сделано/не сделано). Страница должна состоять из:
// 1. самого списка задач (нумерованный список <ol>, пункты-задачи — <li>);
//  2. поля для ввода названия новой задачи (<input type=“text”);
//  3. кнопки «Добавить».
// При нажатии на кнопку «Добавить» задача добавляется в конец списка в качестве нового пункта <li>.
// Если название задачи не введено, то появляется ошибка (alert или другая реализация) с просьбой заполнить поле.
// Считать значение, введенное в поле, можно при помощи document.querySelector(‘input’).value.
// При клике на любую задачу в списке она помечается как выполненная (становится зачеркнутой, тут пригодится CSS-свойство text-decoration: line-through). При повторном клике зачеркивание исчезает.

'use strict'

let btnAdd = document.querySelector('#adding');
let headerDo;
let bodyDo;
let doList = document.querySelector('.num-list');
let headerList = [];
let flag;

let addingFunction = function () {  

    headerDo = document.querySelector('#title').value;
    bodyDo = document.querySelector('#description').value;
    flag = 1;

    if (headerDo == '') {

        alert('Заполните поле с названием');
        return false;

    }
    else {

        headerDo = document.querySelector('#title').value;

    }

    for (let header of headerList) {

        if (headerDo == header) {

            flag = 0;
            let mark = confirm('Вы добавляете задачу которая уже есть в списке, хотите продолжить?');

            if (mark == true) {

                break;

            }

            else {

                document.querySelector('#title').value = '';
                document.querySelector('#description').value = '';        
                return;
    
            }

        }
        
    }

    if (flag == 1) {

        headerList.push(headerDo);

    }

    document.querySelector('#title').value = '';
    document.querySelector('#description').value = '';

    let doBlock = document.createElement('li');
    doBlock.classList.add('num-list-item');
    doBlock.innerHTML = `<p class="active-task task"> ${headerDo} - ${bodyDo} </p>`;

    doList.appendChild(doBlock);
    document.querySelector('.empty').setAttribute('style','display: none');
    
}

btnAdd.addEventListener('click', addingFunction);

document
    .querySelector('.num-list')
    .addEventListener('click', function(event){
        event.target.classList.toggle('complete-task');
    });
