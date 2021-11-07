const minValue = document.querySelector('.minValue');
const maxValue = document.querySelector('.maxValue');
const generateNumber = document.querySelector('.generateNumber')
const btnGenerate = document.querySelector('.btn-generate');
const btnReset = document.querySelector('.btn-reset');

const toNumber = (str) => Number(str);

const getRandomNumber = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

let minMaxNumbers = {
    min: '',
    max: '',
    result: ''
}

let possibleVariants = [];

const randomInteger = (min, max) => {
    if ((min && max) && min < max) {
        const number = getRandomNumber(min, max);

        if (toNumber(minMaxNumbers.max) !== possibleVariants.length) {
            if (!possibleVariants.includes(number)) {
                possibleVariants.push(number)

                minMaxNumbers.result = `Random number - ${number}`;
            } else {
                randomInteger(min, max)
            }
        } else {
            btnGenerate.setAttribute('disabled', 'true')

            minMaxNumbers.result = 'All variants is done!'
        }
    } else {
        minMaxNumbers.result = `Enter min and max parameters`
    }
}

btnGenerate.addEventListener('click', () => {
    let minNumber = minValue.value;
    let maxNumber = maxValue.value;

    minMaxNumbers = {
        min: minNumber,
        max: maxNumber
    }

    randomInteger(toNumber(minMaxNumbers.min), toNumber(minMaxNumbers.max))
    generateNumber.textContent = minMaxNumbers.result;

})

const cleanInput = () => {
    minValue.value = '';
    maxValue.value = '';
    generateNumber.textContent = '';
    possibleVariants = []

    minMaxNumbers = {
        min: '',
        max: '',
        result: ''
    }

    btnGenerate.removeAttribute('disabled')
}

btnReset.addEventListener('click', () => cleanInput())



