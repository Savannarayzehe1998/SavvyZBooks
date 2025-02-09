// Function created to replace the content
function replaceContent() {
    // Declaring the variables
    var myRecipientName;
    var myHostName;
    
    // Setting the variables to the input fields' values
    myRecipientName = document.getElementById("recipientNameInput").value;
    myHostName = document.getElementById("hostNameInput").value;
    
    console.log('Variable myRecipientName: ' + myRecipientName);
    console.log('Variable myHostName: ' + myHostName);
    
    // Setting the HTML code in the span ids with the variables
    document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
}