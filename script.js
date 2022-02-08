//Stoping Submit Default Behavior
const form = document.querySelector('form')
const resultText = document.getElementById('result-text')
form.addEventListener('submit', (event) => {
    event.preventDefault();
});

//Geting The initial Interest Rate Value
function setStaticRange() {
    const anualInterestRate = document.getElementById('slider')
    const interestRateValueElement = document.getElementById('interest-rate-value')
    interestRateValueElement.innerHTML = anualInterestRate.value + "%"
}

setStaticRange()

//The main function of the program.
function compute() {
    const initialPrincipal = document.getElementById('amount')
    let initialPrincipalValue = form.elements['initial-principal'].value
    let inputYears = form.elements['input-years'].value
    let interestRate = form.elements['interest-rate'].value
    let yearsOfFullReturn = getYearFromUser(inputYears)
    let totalAmountReturn = 0

    if(!initialPrincipal.checkValidity()) {
        initialPrincipal.classList.add('incorect-input')
    } else {
        totalAmountReturn = futureInvestment(initialPrincipalValue,interestRate,inputYears )
        initialPrincipal.classList.remove('incorect-input')
    }

    if(totalAmountReturn === 0) {
        document.getElementById('result-text').innerHTML = 'Please insert the correct amount. <br/> Special characters or text <br/> is not allowed!'
        window.alert('Enter a positive number')
    } else {
        document.getElementById('result-text').innerHTML = `If you deposit <mark>${initialPrincipalValue}</mark>                                    <br /> 
                                                            in the year <mark>${yearsOfFullReturn}</mark>`
    }

}

//View the Interest Rate based on mousemove
function showRate() {

    const interestRateValueElement = document.getElementById('interest-rate-value')
    let rate = document.getElementById('slider')
    rateValue = rate.value
    interestRateValueElement.innerHTML = rateValue + "%"
    
}

//Get the year from client
function getYearFromUser(inputYears) {

    const newDate = new Date()
    const currentYear = newDate.getFullYear()

    return currentYear + parseInt(inputYears)
    
}

//Calculate the amount which the client will receive
function futureInvestment(initialPrincipalValue, interestRate, inputYears ) {
    let futureValue =  initialPrincipalValue * ( 1 + (inputYears * (interestRate / 100)))
    let futureReturn = futureValue - initialPrincipalValue
    return parseInt(futureReturn)
}

//Basic validation for input 
//Just to change the color when wrong type entered
function validationApi(initialPrincipal) {
    
    let patternAmount = /^\d{0,30}$/g
    let initPrincipal = initialPrincipal.value
    let foundMatch = initPrincipal.match(patternAmount)
    let found = parseInt(foundMatch)

    if(!isNaN(found)) {
        return found
    } else {
        return false
    }

} 