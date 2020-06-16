// Разработать простой текстовый редактор с возможностью сохранения контента в LocalStorage.

// Страница должна состоять из:

// Блока с текстом
// Кнопки «Редактировать»
// Кнопок «Сохранить» и «Отмена» (по умолчанию неактивных — disabled)
// Механика работы страницы:

// при первой загрузке страницы в блоке с текстом отображается текст по умолчанию (любой);
// при нажатии на кнопку «Редактировать» блок с текстом становится редактируемым (contenteditable=true), кнопки «Сохранить» и «Отмена» становятся активными, а сама кнопка «Редактировать» — неактивной;

// при нажатии на кнопку «Сохранить» содержимое блока с текстом сохраняется в LocalStorage, а режим редактирования отключается (кнопки возвращаются в исходное состояние);

// при нажатии на кнопку «Отмена» содержимое блока с текстом заменяется на последний сохраненный вариант изLocalStorage, режим редактирования отключается;

// При следующих перезагрузках страницы содержимое блока с текстом автоматически подтягивается из LocalStorage (последний сохраненный вариант).

let editBtn = document.querySelector('.btn-edit');
let saveBtn = document.querySelector('.btn-save');
let resetBtn = document.querySelector('.btn-reset');
let textBlock = document.querySelector('.change-block');
let change = textBlock.textContent;
textBlock.textContent = localStorage.getItem('changeLog');


editBtn
    .addEventListener('click', function(event) {
        textBlock.setAttribute('contenteditable', 'true');
        saveBtn.removeAttribute('disabled');
        resetBtn.removeAttribute('disabled');

});

saveBtn
    .addEventListener('click', function (event) {
        textBlock.setAttribute('contenteditable', 'false');
        saveBtn.setAttribute('disabled','');
        editBtn.setAttribute('disabled','');
        change = textBlock.textContent;
        localStorage.setItem('oldLog', localStorage.getItem('changeLog'));
        localStorage.setItem('changeLog', change);
    });

resetBtn
    .addEventListener('click', function(event){
        textBlock.textContent = localStorage.getItem('oldLog');
        saveBtn.removeAttribute('disabled');
        editBtn.removeAttribute('disabled');
    });
