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
    const marksArray = [...marks];
    marksArray.forEach((item) => +item);
    let averageMark = [];

    if (marksArray.length === 0) {
        averageMark = 0;
    } else if (marksArray.length > 5) {
        console.log("Слишком много оценок, будем считать только первые 5!");
        const slicedMarksArray = marksArray.slice(0,5);
        let sum = slicedMarksArray.reduce(function(sum, elem) {
            return sum + elem;
        }, 0);
        averageMark = sum / slicedMarksArray.length;
    } else {
        let sum = marksArray.reduce(function(sum, elem) {
            return sum + elem;
        }, 0);
        averageMark = sum / marksArray.length;
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let today = new Date();
    let year = today.getFullYear();
    let birthdayYear = dateOfBirthday.getFullYear();
    let age = year - birthdayYear;
    let result;
    if (age >= 18) {
        result = ("Не желаете ли олд-фэшн, " + name + "?");
    } else {
        result = ("Сожалею, " + name + ", " + "но я не могу вам продать алкоголь. " +
            "Могу предложить вам замечательный клюквенный компот!")
    };
    return result;
}