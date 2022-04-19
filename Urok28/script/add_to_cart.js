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

let title = document.getElementsByClassName("product_title");
console.log(title[0].innerText);