'use strict';

(function() {  

function User (mass) {

    this.firstName = mass[0];
    this.lastName = mass[1];
    this.date = new Date();

}

function UserList () {

    let users = [];

    this.add = function (element) {

        users.push(element);

    }

    this.check = function (inputUser) {

        for (let i = 0; i < users.length; i++) 
        { 
            if (inputUser.firstName != users[i].firstName && inputUser.lastName != users[i].lastName) {
                
            }
            else {
                return false;
            }
        }

        return true;

    }

    this.showAll = function () {  

        for (let i = 0; i < users.length; i++) {

            console.log(users[i]);

        }

    }

}

function fillList () {

    let enter = prompt('Enter user','FirstName LastName');

    if ( enter == null)  return undefined;

    else {

        enter = enter.split(' ');

        if ( enter.length > 2 || regexp.test(enter) == true )  
        {   
            return fillList();
        }

        let newUser = new User(enter);

        if (list.check(newUser)) list.add(newUser);

        return fillList();

    }

}

let regexp = /[0123456789]/;

let list = new UserList();

fillList();

list.showAll();

})();



//ФУНКЦИИ КОНСТРУКТОРЫ (пишутся с большой буквы)

// function User(firstName, lastName) {  
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.getFullName = function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// // Экземпляры объектов
// var myUser = new User('Alex','Bead');
// var anotherUser = new User('NotAlex','NotBead');


// $(function(){
    
//     $('.output-block').append(test());

//     function test(some) {
//         return 5 + 5;
//     }
    
// });

// Написать простой прототип системы регистрации пользователей. Для этого используйте две функции-конструктора:

// 1. User, которая создает объект типа «пользователь» со следующими свойствами: { // имя firstName: ‘', // фамилия lastName: '’, // дата и время регистрации regDate: ''}. Объекты типа User предназначены для сохранения каждой отдельной записи о пользователе.

// 2. UserList, которая создает объект типа “список пользователей” со следующими свойствами и методами: { // внутреннее свойство-массив, в которое будут попадать объекты типа User users: [], // метод получает в качестве параметра объект типа User и сохраняет его в массив users add: function(user) {}, // метод возвращает список пользователей из массива users getAllUsers: function() {}}. Объекты типа UserList предназначены для хранения множества записей типа User. 

// При запуске программы должно происходить:

// 1. Создавать новый экземпляр объекта UserList (с пустым свойством-массивом users).

// 2. Открываться диалог prompt с предложением ввести имя и фамилию пользователя для регистрации (одной строкой через пробел).

// 3. После нажатия ОК должен создаваться новый экземпляр объекта User с заполнением свойств firstName, lastName и regDate (текущая дата и время).

// 4. Созданный экземпляр объекта должен сохраняться в свойство-массив users созданного ранее объекта типа UserList (при помощи метода add).

// 5. Диалог prompt должен повторяться, пока пользователь не нажмет “Отмена”.

// 6. После нажатия «Отмена» выведите на экран (в консоль или при помощи alert) список всех пользователей с именами и датами регистрации (используйте для этого метод getAllUsers).

