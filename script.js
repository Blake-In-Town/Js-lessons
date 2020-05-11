// Создать иерархию сущностей (конструкторов, из которых можно создать экземпляры объектов):

// базовый конструктор «Транспортное средство» с общими для всех транспортных средств свойствами и методами (на ваше усмотрение);

// дочерние конструкторы: автомобиль, самолет, корабль, которые наследуют общие свойства и методы от родительского;

// продемонстрировать, как дочерние сущности могут переопределять родительские свойства и методы в соответствии со своим собственным поведением.

function Vehicle ( manufacturer, model ) {

    this.manufacturer = manufacturer;
    this.model = model;

}

Vehicle.prototype.introduce = function () {
    console.log('this is ' + this.model + ' produced by ' + this.manufacturer);
}


function Auto ( manufacturer, model ) {

    Vehicle.apply( this, arguments );

    this.type = 'car';

}

Auto.prototype.introduce = function () {
    console.log('this is ' + this.model + ' produced by ' + this.manufacturer);
}


function Fly ( manufacturer, model ) {

    Vehicle.apply( this, arguments );

    this.type = 'airplane';

}

function Ship ( manufacturer, model ) {

    Vehicle.apply( this, arguments );

    this.type = 'ship';

}

var firstAuto = new Auto('Ford','Focus');

var firstFly = new Fly('Boieng','Jet 2000');

var firstShip = new Ship('Вечеславав Михайлович','Сделал сам в свободное время');