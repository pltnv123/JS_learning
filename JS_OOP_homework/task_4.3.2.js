// Написать функцию, которая принимает в качестве аргументов строку и объект,
//     а затем проверяет есть ли у переданного объекта свойство с данным именем.
//     Функция должна возвращать true или false.

function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

const person = {
    name: "John",
    age: 30
};

console.log(hasProperty(person, "name"));
console.log(hasProperty(person, "address"));