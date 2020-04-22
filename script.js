'use strict';
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

function User (enter) {

    this.firstName = enter[0];
    this.lastName = enter[1];
    this.regDate = new Date();

}

function UsersList () {

    let users = [];

    this.add = function (User) {  
        users.push(User);
    }

    this.getAllUsers = function () {  
        for ( var i = 0; i < users.length; i++ ) {
            console.log(users[i]);
        }
    }
}

let firstListOfUsers = new UsersList();

let enterUser = prompt('Enter user');
let arrayOfName;

while ( enterUser != null ) {

    arrayOfName = new User( enterUser.split(' ') );

    firstListOfUsers.add(arrayOfName);
    
    enterUser = prompt('Enter user');
    
}

firstListOfUsers.getAllUsers();