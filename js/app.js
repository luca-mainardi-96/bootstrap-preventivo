// recupero elementi form

const selectWork = document.getElementById('inputWork')
const discountCode = document.getElementById('discountCode')
const formEstimate = document.getElementById('form')
let outputPrice = document.getElementById('outputPrice')
let integerPart = document.getElementById('integerPart')
let decimalPart = document.getElementById('decimalPart')
const errorMessage = document.getElementById('codeError')

// options dinamiche

const options = [
    {
        value: '',
        text: 'Seleziona il tipo di lavoro'
    },
    {
        value: 'backend',
        text: 'Backend Developement'
    },
    {
        value: 'frontend',
        text: 'Frontend Developement'
    },
    {
        value: 'pAnalysis',
        text: 'Project Analysis'
    }
]

options.forEach((i) => {
    const option = document.createElement('option');
    option.value = i.value;
    option.text = i.text;
    selectWork.appendChild(option);
});

//codici sconto

const discountCodes = [
    'YHDNU32',
    'JANJC63',
    'PWKCN25',
    'SJDPO96',
    'POCIE24'
]
//dichiarazione altre varibili

const hoursOfWork = 10
const backendPrice = 20.5
const frontendPrice = 15.3
const analysisPrice = 33.6

//recupero evento

formEstimate.addEventListener('submit', function(e){
    e.preventDefault()

let work = selectWork.value
let price = 0
const userCode = discountCode.value.trim().toUpperCase()

discountCode.classList.remove('is-invalid');
errorMessage.classList.add('d-none');

if(work === 'backend'){
    price = backendPrice*hoursOfWork
} else if (work === 'frontend'){
    price = frontendPrice*hoursOfWork
} else if (work === 'pAnalysis'){
    price = analysisPrice*hoursOfWork
}

if (userCode !== "") {
    if (discountCodes.includes(userCode)) {
        price = price * 0.75;
        discountCode.classList.remove('is-invalid');
        errorMessage.classList.add('d-none');
    } else {
        discountCode.classList.add('is-invalid');
        errorMessage.classList.remove('d-none');
        return;
    }
}

let formattedPrice = price.toFixed(2)

const dividedNumber = formattedPrice.split('.')

integerPart.innerHTML = "€ " + dividedNumber[0] + '.'
decimalPart.innerHTML = dividedNumber [1]
})


