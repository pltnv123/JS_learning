class ElectricalAppliance1 {
    constructor(name, power) {
        this.name = name
        this.power = power
        this.pluggedIn = false;
    }
    plugOnn() {
        if (!this.pluggedIn) {
            console.log(this.name + ' is ON.');
            this.pluggedIn = true;
        }

    }
    plugOff() {
        if (this.pluggedIn) {
            console.log(this.name + ' is OFF.');
            this.pluggedIn = false;
        }
    }
}

class Lamp extends ElectricalAppliance1 {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness
    }
    adjustBrightness(brightness) {
        this.brightness = brightness;
        console.log(`${this.name} brightness is set to ${brightness}. Power ${this.power}`);
    }
}

class Computer extends ElectricalAppliance1 {
    constructor(name, power, cpu) {
        super(name, power);
        this.cpu = cpu
    }
    runProgram(program) {
        console.log(`${this.name} is running ${program} on a ${this.cpu} CPU. Power: ${this.power}`);
    }
}

// Создание экземпляров приборов
const lamp = new Lamp('Table Lamp', 60, 100);
const computer = new Computer('Desktop Computer', 400, 'Intel Core i7');

// Включение приборов в розетку
lamp.plugOnn();
computer.plugOnn();

// Использование методов уникальных для каждого прибора
lamp.adjustBrightness(50);
computer.runProgram('Photoshop');

// Выключение приборов из розетки
lamp.plugOff();
computer.plugOff();