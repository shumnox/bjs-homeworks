function getSolutions( a, b, c ) {
    let D = b**2 - 4 * a * c;
    let roots = [];
    let x1;
    let x2;
    if (D === 0) {
        x1 = -b / 2 * a;
        roots = [x1];
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / 2 * a;
        x2 = (-b - Math.sqrt(D)) / 2 * a;
        roots = [x1, x2];
    }
    return { D: D, roots: roots };
}
function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log("Вычисляем корни квадратного уравнения" + (a + "x²" + b + "x" + c));
    console.log("Значение дискриминанта: " + result.D)
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D > 0) {
        console.log("Уравнение имеет два корня. X₁ = " + result.roots[0] + ", X₂ = " + result.roots[1]);
    } else {
        console.log("Уравнение имеет один корень X₁ = " + result.roots[0]);
    }
}
showSolutionsMessage();

