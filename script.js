
//View the Interest Rate based on mousemove
function showRate() {

    const interestRateValueElement = document.getElementById('interest-rate-value')
    let rate = document.getElementById('rate')
    rateValue = rate.value
    interestRateValueElement.innerHTML = rateValue + "%"
    
}

function compute() {
    let inputElement = document.getElementById('principal')
    let principal = document.getElementById('principal').value
    let rate = document.getElementById('rate').value
    let years = document.getElementById('years').value
    let futureReturn = futureAmount(principal, rate, years)
    let futureYears = getYearFromUser(years)
    let found = validationApi(principal)

    if(found !== false) {
        document.getElementById('result-text').innerHTML = `If you deposit <mark>${principal}</mark>                                    
                                                            <br /> 
                                                            at an interest rate of <mark>${rate}</mark>
                                                            <br/>
                                                            you will receive an amount of <mark>${futureReturn}</mark>
                                                            <br/>
                                                            in the year <mark>${futureYears}</mark>`
    }  else {
        inputElement.classList.add('incorect-input')
        inputElement.classList.add('incorect-input:focus')
        document.getElementById('principal').focus()
        document.getElementById('result-text').innerHTML = 'Please insert the correct amount. <br/> Special characters or text <br/> is not allowed!'
        window.alert('Enter a positive number')
    }
}

function futureAmount(principal, rate, years) {
    let futureValue =  principal * ( 1 + (years * ( rate/ 100)))
    let futureReturn = futureValue - principal

    console.log(futureReturn)

    return parseInt(futureReturn)
}   

//Get the year from client
function getYearFromUser(years) {

    const newDate = new Date()
    const currentYear = newDate.getFullYear()

    return currentYear + parseInt(years)
    
}

//Basic validation for input 
//Just to change the color when wrong type entered
function validationApi(principal) {
    
    let patternAmount = /^\d{0,30}$/g
    let foundMatch = principal.match(patternAmount)
    let found = parseInt(foundMatch)

    if(!isNaN(found)) {
        return found
    } else {
        return false
    }

} 
