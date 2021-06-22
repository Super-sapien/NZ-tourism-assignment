// function formValidations()
function formValidations() {
    // retrive values from Form
    firstName = document.forms["myForm"].firstName; 
    lastName = document.forms["myForm"].lastName; 
    email = document.forms["myForm"].email;
    phone = document.forms["myForm"].phone;
    message = document.forms["myForm"].message;
    topic = document.forms["myForm"].topic;
    mailingList = document.forms["myForm"].mailingList;
    streetAddress = document.forms["myForm"].streetAddress;
    townAddress = document.forms["myForm"].townAddress;
    postCode = document.forms["myForm"].postCode;

    // reset all error messages
    document.getElementById("firstName_error").innerHTML = "";
    document.getElementById("lastName_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("phone_error").innerHTML = "";
    document.getElementById("message_error").innerHTML = "";
    document.getElementById("topic_error").innerHTML = "";
    document.getElementById("postCode_error").innerHTML = "";

    let error = false;

    // display address inputs for when requesting a map is selected
  if (topic.value == 3) {

    // document.getElementById("streetAddress").innerHTML = "<li><label>Street Address:</label><input type='text' size='30'></li>";
    // document.getElementById("townAddress").innerHTML = "<li><label>City / Town:</label><input type='text' size='30'></li>";
    // document.getElementById("postCode").innerHTML = "<li><label>Post Code:</label><input type='text' size='30'></li>";

        // checks if address has been inputted
        if (streetAddress.value == "" || townAddress.value == "" || postCode.value == "") {
          document.getElementById("postCode_error").innerHTML = "* Please fill in all of your address details.";
          error = true;
        }    
  }
  
    // check for the required inputs (fields)
    if (firstName.value == "") {
      document.getElementById("firstName_error").innerHTML = "* Please provide your first name.";
      error = true;
    }

    if (lastName.value == "") {
      document.getElementById("lastName_error").innerHTML = "* Please provide your last name.";
      error = true;
    }

    if (email.value == "") {
      document.getElementById("email_error").innerHTML = "* Please provide your email address.";
      error = true;
    }
    
    if (message.value == "") {
        document.getElementById("message_error").innerHTML = "* Please type your message.";
        error = true;
    }

    // checks if correct number is put into field (not required)
    if (phone.value != "" && isNaN(phone.value)) {
      document.getElementById("phone_error").innerHTML = "* Phone number must only contain numbers.";
      error = true;
    }

    // checks if message type is selected 
    if (topic.value == 0) {
      document.getElementById("topic_error").innerHTML = "* Select a topic!";
      error = true;
    }

  if (!error) {

    // accepts message with alert if no errors and sends feedback
    if (firstName.value != "" && lastName.value != "" && email.value != "" && message.value != "" && (phone.value == "" || isNaN(phone.value) == false) && topic.value == 2) {
      alert("Thank you for your feedback. We won't bother you :)");
    }

    // accepts message with alert if no errors and wants a response
    if (firstName.value != "" && lastName.value != "" && email.value != "" && message.value != "" && (phone.value == "" || isNaN(phone.value) == false) && topic.value == 1) {
      alert("Thank you for your message. We will aim to get back to you within 24 hours.");
    }

    // requests a map
    if (firstName.value != "" && lastName.value != "" && email.value != "" && message.value != "" && (phone.value == "" || isNaN(phone.value) == false) && topic.value == 3) {
      alert("Your map will be sent to the address provided. Please allow an extra week for delivery due to Covid shipping delays, thank you.");
    }

  }
}   // end of function

// keeps track of subject / topic selected 

const checkTopic = document.querySelector('.topic');

checkTopic.addEventListener('change', (event) => {
  var hideAddress = document.getElementById("hideAddress");
  if (event.target.value == 3 ) {
    hideAddress.style.display = "block";

  } else {
    hideAddress.style.display = "none";
  }
});
