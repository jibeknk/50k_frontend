// 2) По клику на кнопку добавить в корзину товар со следующими параметрами:
//     1) Картинка
//     2) Заголовок
//     3) Дополнительные параметры: цвет
//     4) Цена
// 3) Добавить в корзину

// Конкретные задачи:
    // 1) Получить картинку
    // 2) Получить заголовок
        // Решение:
        //     let title = document.getElementsByClassName("product_title");
        //     title[0].innerText

    // 3) Получить дополнительные параметры
    // 4) Получить цену

// Принцип получения данных следующий:
// Получить данные можно с помощью:
//     .class
//     #id
//     attribute
//     tag


// .class - document.getElementsByClassName - Внутри документа получить элементы по названию класса.
//          вкладка
//          (.) - связка
//          get - получить
//          Elements - Элементы (потому что классов бывает несколько)
//          By - по / от
//          ByClassName - название класса




// let title = document.getElementsByClassName("product_title");
// title[0].innerText;

    // Результат: ничего не вывелось

// Без команды вывод ничего не выведется! 

// let title = document.getElementsByClassName("product_title");
        // console.log(title[0].innerText);
        // console.log(title[1].innerText);
        // console.log(title[2].innerText);
        // console.log(title[3].innerText);
        // console.log(title[4].innerText);
// let title = document.getElementById("product_title");



// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });



// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//   return number > 0;
// });

// alert( positiveArr ); // 1,2,3



// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
//   return name.length;
// });

// // получили массив с длинами



// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//   return number > 0;
// }

// alert( arr.every(isPositive) ); // false, не все положительные
// alert( arr.some(isPositive) ); // true, есть хоть одно положительное



// var arr = [1, 12, 23, 43, 5]

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
//   return sum + current;
// }, 0);

// alert( result ); // 84



// var title = document.querySelectorAll(".body_product > .product_title");
// console.log(title);

// Вариант вывода номер 1
    // console.log(title[0].innerText);
    // console.log(title[1].innerText);
    // console.log(title[2].innerText);
    // console.log(title[3].innerText);
    // console.log(title[4].innerText);

// for (var text of title ) {
//     console.log(text.innerText);
// }



var elements = document.getElementsByClassName("add_cart");

var myFunction = function() {
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".product_title");
    alert(attribute[0].innerText);
};

for (var i =0; i < elements.length; i++) {
    elements[i].addEventListener("click", myFunction, false);
}