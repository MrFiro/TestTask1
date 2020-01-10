'use strict'

let money = prompt(" Введите ваш бюджет"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    moneyMonth: money,
    timeData: time,
    expenses:  {
    },
    optionalExpenses: { // записать ввиде вопроса на js
    }, 
    income: [], // должен быть массив с данными
    savings: false,
};

appData.expenses["oneStr"] = prompt("Введите обязательную статью расходов в этом месяце") + " : " + (appData.expenses["oneStrAsk"] = prompt("Во сколько обойдется?"));
    appData.moneyMonth = appData.moneyMonth - +appData.expenses["oneStrAsk"];
delete appData.expenses["oneStrAsk"];


appData.expenses["twoStr"] = prompt("Введите обязательную статью расходов в этом месяце") + " : " + (appData.expenses["oneStrAsk"] = prompt("Во сколько обойдется?"));
    appData.moneyMonth = appData.moneyMonth - +appData.expenses["oneStrAsk"];
delete appData.expenses["oneStrAsk"];
  
console.log(appData.expenses["oneStr"]);
console.log(appData.expenses["twoStr"]);
alert( "Бюджет на один день = " + appData.moneyMonth/30 + " Руб. " );

