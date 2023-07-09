// Написать функцию, которая создает пустой объект, но без прототипа.
// Первый мой

function emptyObj() {
    return new Object();
}

// function emptyObj() {
//     return Object.create(null);
// }