// Написать программу, которая:

// просит пользователя ввести кусок JavaScript-кода;
// пытается запустить этот код в строгом режиме (strict mode);
// если в коде возникла ошибка, перехватывает ее и выводит соответствующее сообщение.

$(document).ready(function(){

    
   
    $('#confirm').click(function() { 

        $('#log-block').html(null);
        
        let code = $('#inputBlock').val();
        try {
            eval(code);
        }
        catch (ex) {
            $('#log-block').html('Обнаружена ошибка');
            $('#log-block').html(ex);
            $('#log-block').css({
                'color':'red'
            })
        }
    
    });

});


// Написать функцию filterByType, которая принимает любое кол-во аргументов:

// первый аргумент — это тип данных (number, string или boolean), по которому нужно отфильтровать следующие аргументы (со 2-го и далее);
// аргументы, начиная со 2-го и далее — любые значения;
// функция должна возвращать массив с теми аргументами, которые соответствуют типу данных, переданному в первом аргументе.

// Пример вызова:
// filterByType(’string’, 10, 20, ‘a’, ‘b’, true, false);
// возвращает массив [‘a’, ‘b']

function filterByType() {

    let filterValue = arguments[0];
    console.log(filterValue);

    let unsort = Array.prototype.slice.call(arguments);
    unsort.join(', ');
    unsort = unsort.splice(1);

    let sortArray = unsort.filter( function(elem){
        console.log(typeof(elem));
        return typeof(elem) == filterValue;
    });
    
    return sortArray;
}

console.log( filterByType( 'boolean', 1, 2, 3, 4, true, false, true, 'uop', 'rui'));
