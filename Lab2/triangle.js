function triangle(val1, ty1, val2, ty2) {
    const type = ['leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'];
    let a, b, c, alpha, beta;
    if (val1 <= 0 || val2 <= 0) return 'Прочитайте інструкцію ще раз failed';
    else if ((ty1 == type[0] && ty2 == type[1]) && (val1 >= val2)) return 'Прочитайте інструкцію ще раз failed';
    else if (!(type.includes(ty1)) || !(type.includes(ty2))) return 'Прочитайте інструкцію ще раз failed';
    else{
 // два катети
        if(ty1 == type[0] && ty2 == type[0]) {
            a = val1;
            b = val2;
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            alpha = Math.atan(a / b) * 180 / Math.PI;
            beta = 90 - alpha;
        }
        // катет гіпотенуза
        else if ((ty1 == type[0] && ty2 == type[1])||(ty1 == type[1] && ty2 == type[0])) {
           if(ty1 == type[0]){
               a = val1;
               c = val2;
           } else {
               a = val2;
               c = val1;
           }
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = Math.atan(a / b) * 180 / Math.PI;
            beta = 90 - alpha;
        }
        // катет та прилеглий до катета кут
        else if((ty1 == type[0] && ty2 == type[2])||(ty1 == type[2] && ty2 == type[0])) {
            if(ty1 == type[0]){
                a = val1;
                beta = val2;
            } else {
                a = val2;
                beta = val1;
            }
            c = a / (Math.cos(beta * Math.PI/180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = Math.atan(a / b) * 180 / Math.PI;
        }
        // катет та протилежний до катета кут
        else if((ty1 == type[0] && ty2 == type[3])||(ty1 == type[3] && ty2 == type[0])) {
            if(ty1 == type[0]){
                a = val1;
                alpha = val2;
            } else {
                a = val2;
                alpha = val1;
            }
            c = a / (Math.sin(alpha * Math.PI/180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            beta = 90 - alpha;
        }
        // гіпотенуза та один з двох гострих кутів
        else if((ty1 == type[1] && ty2 == type[4])||(ty1 == type[4] && ty2 == type[1])) {
            if(ty1 == type[1]){
                c = val1;
                beta = val2;
            } else {
                c = val2;
                beta = val1;
            }
            alpha = (90 * Math.PI / 180) - beta;
            a = c * Math.sin(alpha * Math.PI/180);
            b = c * Math.sin(beta * Math.PI/180);
        }
        else{
            return 'Прочитайте інструкцію ще раз failed';
        }
    }   // result
        return console.log(`a = ${a}\nb = ${b}\nc = ${c}\nalpha = ${alpha}\nbeta = ${beta}\n"success"`);
}
console.log(" Введіть в консолі виклик функції, наприклад: triangle(3, \"leg\" , 4 , \"hypotenuse\")")
triangle(3, "leg" , 4 , "hypotenuse")