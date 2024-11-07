const TRUE = document.getElementById('true');
const FALSE = document.getElementById('false');
const expression = document.getElementById('expression');
const WIN = document.getElementById('winScore');
const LOSE = document.getElementById('loseScore');
const TIME = document.getElementById('time');
const ITSOVER = document.getElementById('itsover');

let answer = true;
let userAnswer = true;
let win = 0;
let fail = 0;
let timeLeft = 60;

function createExpression() {
    let a = Math.floor(Math.random() * 100) + 1;
    let b = Math.floor(Math.random() * 100) + 1;
    let operation = Math.floor(Math.random() * 4);

    let result, fakeResult, textOfExpression;    

    //will it be true or fake result
    if (Math.floor(Math.random() * 2) == 1) {
        answer = true;
        //true
        switch (operation) {
            case 0:
                result = a + b;
                textOfExpression = String(a) + ' + ' + String(b) + ' = ' + String(result);
                console.log(result, a, b);
                break;
            case 1:
                result = a - b;
                textOfExpression = String(a) + ' - ' + String(b) + ' = ' + String(result);
                console.log(result, a, b);
                break;
            case 2:
                result = a * b;
                textOfExpression = String(a) + ' * ' + String(b) + ' = ' + String(result);
                console.log(result, a, b);
                break;
            case 3:
                result = a / b;
                textOfExpression = String(a) + ' / ' + String(b) + ' = ' + String(result.toFixed(2));
                console.log(result, a, b);
                break;
        }
        expression.textContent = textOfExpression;
    } else {
        answer = false;
        //fake, spoil result with random number from 1 to 3
        switch (operation) {
            case 0:
                result = a + b;
                fakeResult = a + b + (Math.floor(Math.random() * 3) + 1);
                textOfExpression = String(a) + ' + ' + String(b) + ' = ' + String(fakeResult);
                console.log(fakeResult, result, a, b, 'false');
                break;
            case 1:
                result = a - b;
                fakeResult = a - b + (Math.floor(Math.random() * 3) + 1);
                textOfExpression = String(a) + ' - ' + String(b) + ' = ' + String(fakeResult);
                console.log(fakeResult, result, a, b, 'false');
                break;
            case 2:
                result = a * b;
                fakeResult = a * b + (Math.floor(Math.random() * 3) + 1);
                textOfExpression = String(a) + ' * ' + String(b) + ' = ' + String(fakeResult);
                console.log(fakeResult, result, a, b, 'false');
                break;
            case 3:
                result = a / b;
                fakeResult = a / b + (Math.floor(Math.random() * 3) + 1);
                textOfExpression = String(a) + ' / ' + String(b) + ' = ' + String(fakeResult.toFixed(2));
                console.log(fakeResult, result, a, b, 'false');
                break;
        }
        expression.textContent = textOfExpression;
    }
}

createExpression();

function submitTrue(){
    userAnswer = true;
    
    if(answer == userAnswer){
        win += 1;
        WIN.textContent = win;
        createExpression();
    }else {
        fail += 1;
        LOSE.textContent = fail;
        createExpression();
    }
}

function submitFake(){
    userAnswer = false;
    
    if(answer == userAnswer){
        win += 1;
        WIN.textContent = win;
        createExpression();
    }else {
        fail += 1;
        LOSE.textContent = fail;
        createExpression();
    }
}

function decreaseTime(){
    if(timeLeft > 0){
        timeLeft -= 1;
        TIME.textContent = timeLeft;
    }else{
        TRUE.style.cssText = 'display: none';
        FALSE.style.cssText = 'display: none';
        ITSOVER.style.cssText = 'display: block';
    }
    
}
let time = setInterval(decreaseTime, 1000);

function reloadPage(){
    location.reload();
}

ITSOVER.addEventListener('click', reloadPage);
TRUE.addEventListener('click', submitTrue);
FALSE.addEventListener('click', submitFake);