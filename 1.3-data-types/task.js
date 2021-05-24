function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    let percentVal = parseInt(percent) / 100;
    if (Number.isNaN(percent)) {
       return "Параметр percent содержит неправильное значение" + percentVal;
    }
    // сумму первоначального взноса
    let contributionVal = parseInt(contribution);
    if (Number.isNaN(contribution)) {
        return "Параметр percent содержит неправильное значение" + contributionVal;
    }
    // сумму кредита
    let amountVal = parseInt(amount);
    if (Number.isNaN(amount)) {
        return "Параметр percent содержит неправильное значение" + amountVal;
    }

    let today = new Date();
    let month  = (date.getFullYear() - today.getFullYear()) * 12;
    month  -= today.getMonth();
    month  += today.getMonth();

    // тело кредита
    let bankAmount = amountVal - contributionVal;
    let monthPercent = percentVal / 12;

    let monthAmount = bankAmount * (monthPercent + monthPercent / (((1 + monthPercent)^month) - 1));
    let totalAmount = monthAmount * month;
    totalAmount = ( Math.round(totalAmount * 100) / 100 );
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}