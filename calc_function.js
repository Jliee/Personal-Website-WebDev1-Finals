
let result = document.querySelector('#result')

fitText(document.querySelector("#result"), 0.38);

function num_key(num){

    after_error()

    if (result.innerHTML == '0'){
        result.textContent = num.textContent;
    }else{
        result.textContent += num.textContent; 
    }
}

function clearall(){
    result.innerHTML = '0';
}

function clear_entry(){
    result.textContent = result.innerHTML.slice(0,-1);
}

function decimal(){
    result.innerHTML += '.';
}

function percent(){

    x = Number(result.innerHTML)/100;

    result.textContent = String(x)
}

function after_error(){

    if(result.innerHTML == 'Error'){
        result.innerHTML = '';
    }

    if(result.innerHTML == 'Infinity'){
        result.innerHTML = '';
    }

    if(result.innerHTML == 'NaN'){
        result.innerHTML = '';
    }
}

function negate(){
    if (Number(result.innerHTML) < 0){
        result.textContent =  Math.abs(result.innerHTML);
    }else{
    result.textContent = '-'+result.innerHTML
    }
}

function operator_key(op){

    after_error()
    
    let lastOperator = result.innerHTML;

    console.log(lastOperator);
    
    if (lastOperator.endsWith('+')) {
        clear_entry();
        result.innerHTML += op.innerHTML;
    } 
    else if (lastOperator.endsWith('-')) {
        clear_entry();
        result.innerHTML += op.innerHTML;
    } 
    else if (lastOperator.endsWith('×')) {
        clear_entry();
        result.innerHTML += op.innerHTML;
    } 
    else if (lastOperator.endsWith('÷')) {
        clear_entry();
        result.innerHTML += op.innerHTML;
    } else {
    result.innerHTML += op.innerHTML;
    }
}

function calculate(){
    let answer;
    let x = result.innerHTML;

    x = x.replace(/×/g, '*');
    x = x.replace(/÷/g, '/');

    try{
        answer = eval(x); 
    } catch (x){
        answer = "Error"
    }
    result.textContent = answer;
}

document.addEventListener('keydown', function(i){

    switch (i.key){

        case 'Escape':
            clearall();
            break;
        case 'Backspace':
            clear_entry();
            break;
        case '%':
            percent(document.querySelector('button:nth-child(3)'));
            break;
        case '/':
            operator_key(document.querySelector('button:nth-child(4)'));
            break;
        case '7':
            num_key(document.querySelector('button:nth-child(5)'));
            break;
        case '8':
            num_key(document.querySelector('button:nth-child(6)'));
            break;
        case '9':
            num_key(document.querySelector('button:nth-child(7)'));
            break;
        case '*':
            operator_key(document.querySelector('button:nth-child(8)'));
            break;
        case '4':
            num_key(document.querySelector('button:nth-child(9)'));
            break;
        case '5':
            num_key(document.querySelector('button:nth-child(10)'));
            break;
        case '6':
            num_key(document.querySelector('button:nth-child(11)'));
            break;
        case '-':
            operator_key(document.querySelector('button:nth-child()12'));
            break;
        case '1':
            num_key(document.querySelector('button:nth-child(13)'));
            break;
        case '2':
            num_key(document.querySelector('button:nth-child(14)'));
            break;
        case '3':
            num_key(document.querySelector('button:nth-child(15)'));
            break;
        case '+':
            operator_key(document.querySelector('button:nth-child(16)'));
            break;
        case '0':
            num_key(document.querySelector('button:nth-child(18)'));
            break;
        case '.':
            decimal(document.querySelector('button:nth-child(19)'));
            break;
        case 'Enter':
            calculate();
            break;
    }
});