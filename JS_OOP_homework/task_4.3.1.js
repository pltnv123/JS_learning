// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и
// значения только собственных свойств. Данная функция не должна возвращать значение.

function printOwnProperties(obj) {

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`ключ : ${key}`)
            console.log(`значение: ${obj[key]}`)
            console.log("+++++++++++++++++++++++++")
        }
    }
}

const person = {
    name: "John",
    age: 30
};

printOwnProperties(person);