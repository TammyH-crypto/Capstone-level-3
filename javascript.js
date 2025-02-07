function makePromise() {
    const promise = new Promise(myFunction);
    promise.then(getMessage);
    display("Made a promise.");
    }
    
    function getMessage(resolveValue) {
    display(resolveValue)
    }

function handleSubmit(event) {
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[0];
    const email = emailInput.value;
    display("Submitting form for" + "email" + "...." );
    const promise = new promise(getServerResponse); 
    promise.then(parseResponse);
}

function getServerResponse(resolve) {
setTimeout(activateResolve, 5000);
}
function activateResolve() {
 const response = {
    message: "Sucessfully processed",
};
const resolveValue = JSON.stringify(response);
resolve(resolveValue);
}

function parseResponse(resolveValue) {
    const response =JSON.parse(resolveValue);
   const message = response.message
display(message);
}

