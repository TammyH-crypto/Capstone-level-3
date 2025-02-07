function myprocessform(event) {
    debugger;

event.preventDefault();
const form = event.target;
const firstName = form[0].value;
const lastName = form[1].value;
const phoneNumber = form[2].value;
const date = form[3].value;
const time = form[4].value;


alert( `Hello ${firstName} you picked this day ${date} at ${time}`);
}



