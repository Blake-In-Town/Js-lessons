let btn = document.querySelector('.button');
let select = document.querySelector('#search_category');
let search = document.querySelector('#person_search_input');
let resultOfSearch = document.querySelector('.search_result');
let liSearch;
let api = "https://swapi.dev/api/";
let url = api;

btn.addEventListener('click', function(ev) {
  ev.preventDefault();

  resultOfSearch.innerHTML = null;

  let url = api;
  url += select.value + "/?search=" + search.value;
  
  let liObj = [{}];

  window.fetch(url)

    .then( function(response) {

      if (response.status !== 200) {
        alert(
          "Произошла ошибка при получении ответа от сервера:\n\n" +
            response.message
        );
        return;
      }

      // console.log(response);
      return response.json();
    })
    .then( function(response) {

      if (response.count == 0) {
        alert("К сожалению, данные не получены по запросу: " + search.value);
        return;
      }

      // console.log(response);
      
      let i = 0;

        for (let num of response.results) {
          liSearch = document.createElement('li');

          liSearch.className = num.name;
          liSearch.innerHTML = num.name;
          liObj[i] = num.name;
          liObj[i].name = num.name;
          liObj[i].height = num.height;
          liObj[i].mass = num.mass;
          liObj[i].bY = num.birth_year;
          liObj[i].films = num.films;

          resultOfSearch.appendChild(liSearch);
          i++;
          // console.log(num);
        }

        for (let massEl of liObj) {
          for (let obEl in massEl) {
            console.log(massEl.obEl);
          }
        }
    });
 
  
});


// liSearch.addEventListener('click', function(event) {
//   document.querySelector('#name').innerHTML = event.target.name;
//   document.querySelector("#height").innerHTML = event.target.height;
//   document.querySelector("#mass").innerHTML = event.target.mass;
//   document.querySelector('#birth_year').innerHTML = event.target.bY;
//   document.querySelector("#films_count").innerHTML = event.target.films;
// });



// window.onload = function () {

//   // window.fetch('data/test.json')
//   //   .then( function(response) {
//   //     console.log(response);
//   //     return response.json();
//   //   })
//   //   .then( function() {
//   //     console.log(response);
//   //   })

//   // Сохраняем адрес API
//   // var api = "https://swapi.dev/api/";

  
//   //   // Формируем полный адрес запроса:
//   //   var url = api + "people/?search="; // добавляем к запросу тип необходимых данных подробно о формате https://swapi.dev/documentation
//   //   url += "obi"; // значение переменной запроса search
  
//   //   // Таким образом формируется строка вида:
//   //   // https://swapi.dev/api/people/?search=obi
  
//   //   // Создаем объект XMLHttpRequest, при помощи которого будем отправлять запрос
//   //   var request = new XMLHttpRequest();
  
//   //   // Назначаем обработчик события load для запроса
//   //   request.addEventListener("load", function () {
//   //     // отображаем в консоли текст ответа сервера
//   //     console.log(request.response); 
      
//   //     // парсим его из JSON-строки в JavaScript-объект
//   //     var response = JSON.parse(request.response); 

      // Проверяем статус-код, который прислал сервер
      // 200 — это ОК, остальные — ошибка или не подходят
      

//   //     // Проверяем, если поле имя в ответе на запрос
      

//   //     // Если все в порядке, то отображаем количество результатов поиска
//   //     alert("Найдено персонажей:" + response.count);

//   //   });

//   //   // Обработчик готов, можно отправлять запрос
//   //   // Открываем соединение и отправляем
//   //   request.open("get", url);
//   //   request.send();
// };