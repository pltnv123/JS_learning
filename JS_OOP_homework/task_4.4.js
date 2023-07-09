

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    if (!this.pluggedIn) {
        console.log(this.name + ' is ON.');
        this.pluggedIn = true;
    }
};

ElectricalAppliance.prototype.unplug = function() {
    if (this.pluggedIn) {
        console.log(this.name + ' is OFF.');
        this.pluggedIn = false;
    }
};


function Lamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
}

Lamp.prototype = new ElectricalAppliance()
Lamp.prototype.constructor = Lamp //Это нужно для того, чтобы при создании новых объектов Lamp используется функция
                                 // -конструктор Lamp, а не ElectricalAppliance.

Lamp.prototype.adjustBrightness = function (brightness) {
    this.brightness = brightness
    console.log(this.name + ' brightness is set to ' + brightness + '.');
};


function Computer(name, power, cpu) {
    ElectricalAppliance.call(this, name, power);
    this.cpu = cpu;
}

Computer.prototype = new ElectricalAppliance()
Computer.prototype.constructor = Computer;

Computer.prototype.runProgram = function(program) {
    console.log(this.name + ' is running ' + program + ' on a ' + this.cpu + ' CPU.');
};

Создание экземпляров приборов
const lamp = new Lamp('Table Lamp', 60, 100);
const computer = new Computer('Desktop Computer', 400, 'Intel Core i7');
// Включение приборов в розетку
lamp.plugIn();
computer.plugIn();

// Использование методов уникальных для каждого прибора
lamp.adjustBrightness(50);
computer.runProgram('Photoshop');

// Выключение приборов из розетки
lamp.unplug();
computer.unplug();

