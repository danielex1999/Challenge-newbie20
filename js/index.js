var mail_input = document.getElementById("mail_input");
var message_error = document.getElementById("message_error");
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validatemail() {
    if (mail_input.value.match(validRegex)) {
        document.getElementById("message_error").style.display = "none";
    }else{
        document.getElementById("message_error").style.display = "block";
    }
}