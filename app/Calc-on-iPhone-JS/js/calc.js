const value = document.querySelector('.value');
const ac = document.querySelector('.ac');
const pm = document.querySelector('.pm');
const percent = document.querySelector('.percent');

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');

const decimal = document.querySelector('.decimal');
const number0 = document.querySelector('.number-0');
const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');
const number3 = document.querySelector('.number-3');
const number4 = document.querySelector('.number-4');
const number5 = document.querySelector('.number-5');
const number6 = document.querySelector('.number-6');
const number7 = document.querySelector('.number-7');
const number8 = document.querySelector('.number-8');
const number9 = document.querySelector('.number-9');
const numberArray = [
    number0, number1, number2, number3, number4,
    number5, number6, number7, number8, number9
];


let ValueStrInMemory = null;
let OperatorInMemory = null;



const GetValueAsStr = () => value.textContent.split(',').join('');

const GetValueAsNum = () => {
    return parseFloat(GetValueAsStr());
};

const SetStrAsValue = (valueStr) => {
    if (valueStr[valueStr.length - 1] === '.') {
        value.textContent += '.';
        return;
    }

    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr) {
        value.textContent =
        parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
    } else {
    value.textContent = parseFloat(wholeNumStr).toLocaleString();
    }
};

const NumberClick = (numStr) => {
    const CurrentValueStr = GetValueAsStr();
    if (CurrentValueStr === '0') {
        SetStrAsValue(numStr);
    } else {
    SetStrAsValue(CurrentValueStr + numStr);
    }
};

const GetResultOfOperationAsStr = () => {
    const CurrentValueNum = GetValueAsNum();
    const valueNumInMemory = parseFloat(ValueStrInMemory);
    let newValueNum;
    if (OperatorInMemory === 'addition') {
    newValueNum = valueNumInMemory + CurrentValueNum;
    } else if (OperatorInMemory === 'subtraction') {
    newValueNum = valueNumInMemory - CurrentValueNum;
    } else if (OperatorInMemory === 'multiplication') {
    newValueNum = valueNumInMemory * CurrentValueNum;
    } else if (OperatorInMemory === 'division') {
    newValueNum = valueNumInMemory / CurrentValueNum;
    }

    return newValueNum.toString();
};

const OperatorClick = (operation) => {
    const CurrentValueStr = GetValueAsStr();

    if (!ValueStrInMemory) {
        ValueStrInMemory = CurrentValueStr;
        OperatorInMemory = operation;
        SetStrAsValue('0');
        return;
    }
    ValueStrInMemory = GetResultOfOperationAsStr();
    OperatorInMemory = operation;
    SetStrAsValue('0');
};



ac.addEventListener('click', () => {
    SetStrAsValue('0');
    ValueStrInMemory = null;
    OperatorInMemory = null;
});
pm.addEventListener('click', () => {
    const CurrentValueNum = GetValueAsNum();
    const CurrentValueStr = GetValueAsStr();

    if (CurrentValueStr === '-0') {
        SetStrAsValue('0');
        return;
    }
    if (CurrentValueNum >= 0) {
        SetStrAsValue('-' + CurrentValueStr);
    } else {
    SetStrAsValue(CurrentValueStr.substring(1));
    }
});
percent.addEventListener('click', () => {
    const CurrentValueNum = GetValueAsNum();
    const newValueNum = CurrentValueNum / 100;
    SetStrAsValue(newValueNum.toString());
    ValueStrInMemory = null;
    OperatorInMemory = null;
});



addition.addEventListener('click', () => {
    OperatorClick('addition');
});
subtraction.addEventListener('click', () => {
    OperatorClick('subtraction');
});
multiplication.addEventListener('click', () => {
    OperatorClick('multiplication');
});
division.addEventListener('click', () => {
    OperatorClick('division');
});
equal.addEventListener('click', () => {
    if (ValueStrInMemory) {
        SetStrAsValue(GetResultOfOperationAsStr());
        ValueStrInMemory = null;
        OperatorInMemory = null;
    }
});



for (let i=0; i < numberArray.length; i++) {
    const number = numberArray[i];
    number.addEventListener('click', () => {
        NumberClick(i.toString());
    });
}
decimal.addEventListener('click', () => {
    const CurrentValueStr = GetValueAsStr();
    if (!CurrentValueStr.includes('.')) {
        SetStrAsValue(CurrentValueStr + '.');
    }
});