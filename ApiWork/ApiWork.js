let btn = document.querySelector('.button');
let select = document.querySelector('#search_category');
let search = document.querySelector('#person_search_input');
let resultOfSearch = document.querySelector('.search_result');

let api = "https://swapi.dev/api/";
let url = api;

btn.addEventListener('click', function(ev) {
  ev.preventDefault();

  resultOfSearch.innerHTML = null;

  let url = api;
  url += select.value + "/?search=" + search.value;
  
  let liSearch = [];

  window.fetch(url)

    .then( (response) => {

      if (response.status !== 200) {
        alert(
          "Произошла ошибка при получении ответа от сервера:\n\n" + response.message
        );
        return;
      }

      // console.log(response);
      return response.json();
    })

    .then( (response) => {

      if (response.count == 0) {
        alert("К сожалению, данные не получены по запросу: " + search.value);
        return;
      }
      
      let i = 0;

        for (let num of response.results) {

          liSearch[i] = document.createElement('li');
          liSearch[i].className = num.name;
          liSearch[i].innerHTML = num.name;

          liSearch[i].name = num.name;
          liSearch[i].height = num.height;
          liSearch[i].mass = num.mass;
          liSearch[i].bY = num.birth_year;
          liSearch[i].films = num.films.length;

          resultOfSearch.appendChild(liSearch[i]);

          document.querySelector('.search_result').addEventListener('click', function(event) {

            document.querySelector('#name').innerHTML = event.target.name;
            document.querySelector("#height").innerHTML = event.target.height;
            document.querySelector("#mass").innerHTML = event.target.mass;
            document.querySelector('#birth_year').innerHTML = event.target.bY;
            document.querySelector("#films_count").innerHTML = event.target.films;
        
          });
          
          i++;
        }


    });
 
});