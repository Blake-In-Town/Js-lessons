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
let doList = document.querySelector('.list-group');

let addingFunction = function () {  

    document.querySelector('.text-secondary').classList.add('hide');
    headerDo = document.querySelector('#title').value;
    bodyDo = document.querySelector('#description').value;

    if (headerDo == '') {
        alert('Заполните поле с названием');
        return false;
    }
    else {
        headerDo = document.querySelector('#title').value + ': ';
    }

    document.querySelector('#title').value = '';
    document.querySelector('#description').value = '';

    let doBlock = document.createElement('li');
    doBlock.classList.add('list-group-item');
    doBlock.innerHTML = `<p class="active-task task"> ${headerDo} ${bodyDo} </p>`;

    doList.appendChild(doBlock);
    document.querySelector('.empty').setAttribute('style','display: none');
    
}

btnAdd.addEventListener('click', addingFunction);

document
    .querySelector('.list-group')
    .addEventListener('click', function(event){
        event.target.classList.toggle('complete-task');
    });
