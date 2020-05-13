// Создать иерархию сущностей (конструкторов, из которых можно создать экземпляры объектов):

// базовый конструктор «Транспортное средство» с общими для всех транспортных средств свойствами и методами (на ваше усмотрение);

// дочерние конструкторы: автомобиль, самолет, корабль, которые наследуют общие свойства и методы от родительского;

// продемонстрировать, как дочерние сущности могут переопределять родительские свойства и методы в соответствии со своим собственным поведением.

// let Vehicle = (function () {  

//     let Vehicle = function (settings) {
//         this.manufactures = settings.manufactures || 'LADA';
//         this.model = settings.model || 'Lada-9000-ULTRA-TURBO';
//         this.engine = true;
//         this.engNum = settings.engNum || 1;
//     };

//     Vehicle.prototype.engineOn = function () {
//         for (let i = 0; i < this.engNum; i++) {
//             console.log(`engine start succesfull!`);
//         }
//     }

//     Vehicle.prototype.introduce = function () {
//         console.log(`this is ${this.model} produced by ${this.manufactures}`);
//     };

//     return Vehicle;
// })();

// let Auto = (function () {
    
//     let Auto = function (settings) {
//         Vehicle.apply(this, arguments);
//         this.type = 'Auto';
//     }

//     Auto.prototype = Object.create(Vehicle.prototype);
//     Auto.prototype.constructor = Auto;

//     return Auto;
// })();

// let ford = new Auto({
//     manufactures: 'FORD',
//     model: 'Focus'
// })

// (function () {

    class Vehicle {
        constructor(args) {
            this.manufactures = args.manufactures;
            this.model = args.model;
            this.engine = args.engine || 0;
            this.power = args.power || 100;
        }
    
        introduce() {
            console.log(`this is ${this.model} produced by ${this.manufactures}`);
        }

        move() {
            if (this.engine >= 1) console.log(`vehicle ${this.class} is move`);
            else console.log(`engine out!`);
        }

        stop() {
            console.log(`vehicle ${this.class} is stop`);
        }

    }

    class Auto extends Vehicle {
        constructor(args) {
            super(args);
            this.class = 'Auto';
        }
        
    }
    
    class Airplane extends Vehicle {
        constructor(args) {
            super(args);
            this.class = 'Airplane';
        }
    }

    class Ship extends Vehicle {
        constructor(args) {
            super(args);
            this.class = 'Ship';    
        }
    }

    let vehicle = new Vehicle({
        manufactures: 'Ford',
        model: 'Focus',
        engine: 50,
        power: 700
    });

    let ford = new Auto ({
        manufactures: 'Audi',
        model: 'TT',
        engine: 1,
        power: 700
    });

    let jet = new Airplane({
        model: 'Super Jet',
        manufactures:'Boeing',
        engine: 6,
        power: 3000
    });

    let boat = new Ship({
        manufactures: 'Гараж',
        model: 'Деревянная',
        engine: 0,
        power: 20
    });
    
    vehicle.introduce();
    vehicle.move();

    ford.introduce();
    ford.move();

    jet.introduce();
    jet.move();

    boat.introduce();
    boat.move();

// })();

    