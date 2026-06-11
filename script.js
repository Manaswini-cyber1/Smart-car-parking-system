document.getElementById("bookingForm")
.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const slot =
document.getElementById("slot").value;

document.getElementById("result").innerText =
"Booking Confirmed for " +
name +
" at " +
slot +
"!";
});