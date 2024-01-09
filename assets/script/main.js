
// lets take the value from the inputs 
const clientName = document.getElementById("clientName");
const clientDistance = document.getElementById("clientDistance");
const clientAge = document.getElementById("clientAge");
const btnSubmit = document.getElementById("btnSubmit");

// price per km
const pricePerKm = 0.21 ; 

// elements of the ticket 
const h2Title = document.getElementById("h2Title")
const divContainer = document.getElementById("divContainer")

const nameSurnameValue = document.getElementById("nameSurname-value")
const ticketClassification = document.getElementById("ticket-classification")
const trainCarriage = document.getElementById("train-carriage")
const cpCodeValue = document.getElementById("cp-code")
const ticketPriceValue = document.getElementById("ticket-price")


// random number generator function 
function RandomNumber(min,max){
    return Math.floor(Math.random()*(max-min + 1) + min )
}

// add event listener - custom function 
btnSubmit.addEventListener("click", function(){

    // lets remove the "d-none" from the heading-2 and the div-container 
    h2Title.classList.remove("d-none")
    divContainer.classList.remove("d-none")

    // now lets generate two random numbers 
    let randomTrainCarriage = RandomNumber(0,8)
    let randomCpCode = RandomNumber(20000,80000)

    trainCarriage.innerHTML = randomTrainCarriage
    cpCodeValue.innerHTML = randomCpCode 

    // lets take the values from the console 
    nameSurnameValue.innerHTML = clientName.value 
    let kmDistanceValue = clientDistance.value 
    let clientAgeValue = clientAge.value 

    let ticketPrice = (kmDistanceValue * pricePerKm).toFixed(2) 
    let ticketMinorPrice = (ticketPrice * 0.8).toFixed(2) 
    let ticketOverPrice = (ticketPrice * 0.6).toFixed(2) 
    
    // if-else conditions 
    if (clientAgeValue < 18){
        ticketClassification.innerHTML = "Minor Tiket"
        ticketPriceValue.innerHTML = `€ ${ticketMinorPrice}`
    } else if (clientAgeValue > 65){
        ticketClassification.innerHTML = "Over-65 Ticket"
        ticketPriceValue.innerHTML = `€ ${ticketOverPrice}`
    } else {
        ticketClassification.innerHTML = "Standard Ticket"
        ticketPriceValue.innerHTML = `€ ${ticketPrice}`
    }

})



// let ticketPrice = (clientDistance * pricePerKm).toFixed(2) 
// let ticketMinorPrice = ((clientDistance * pricePerKm)* 0.8).toFixed(2) 
// let ticketOverPrice = ((clientDistance * pricePerKm)* 0.6).toFixed(2) 

// console.log( ticketPrice )
// console.log( ticketMinorPrice )
// console.log( ticketOverPrice )

// btnSubmit.addEventListener("click", function(){
//     console.log( clientName.value )
//     console.log( clientDistance.value )
//     console.log( clientAge.value )


//     if (clientAge < 18){
//         ticketPrice = document.getElementById("ticket-price"); 
//         ticketPrice.innerHTML = `Il Prezzo è € ${(ticketMinorPrice)}`
//     } else if (18 <= clientAge <= 65){
//         ticketPrice = document.getElementById("ticket-price"); 
//         ticketPrice.innerHTML = `Il Prezzo è € ${(ticketOverPrice)}`
//     } else {
//         ticketPrice = document.getElementById("ticket-price"); 
//         ticketPrice.innerHTML = `Il Prezzo è € ${(ticketPrice)}`
//     }


// }) 


