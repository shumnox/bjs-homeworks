function getResult(a,b,c){
    let x = [];
    let D = b**2 - 4 * a * c;
    if (D === 0) {
        x = [(-b + Math.sqrt(D)) / (2 * a)];
    } else if (D > 0) {
        x = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
    }
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}