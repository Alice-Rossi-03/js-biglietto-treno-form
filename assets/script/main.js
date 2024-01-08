
// lets take the value from the inputs 

const clientName = document.getElementById("clientName");

const clientDistance = document.getElementById("clientDistance");

const clientAge = document.getElementById("clientAge");

const btnSubmit = document.getElementById("btnSubmit");

const pricePerKm = 0.21 ; 

let ticketPrice = clientDistance * pricePerKm 


btnSubmit.addEventListener("click", function(){
    console.log( clientName.value )
    console.log( clientDistance.value )
    console.log( clientAge.value )


    // algorythm to calculate the price of the ticket 

    if (clientAge < 18){
        let ticketPrice = document.getElementById("ticket-price"); 
        ticketPrice.innerHTML = `Il Prezzo è € ${(ticketPrice * 0.8).toFixed(2)}`
    } else if (18 <= clientAge <= 65){
        let ticketPrice = document.getElementById("ticket-price"); 
        ticketPrice.innerHTML = `Il Prezzo è € ${(ticketPrice * 0.6).toFixed(2)}`
    } else {
        let ticketPrice = document.getElementById("ticket-price"); 
        ticketPrice.innerHTML = `Il Prezzo è € ${(ticketPrice).toFixed(2)}`
    }


}) 


