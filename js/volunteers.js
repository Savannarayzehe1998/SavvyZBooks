var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {   
    // Clear the text area
    $("volunteerList").value = "";

    // Loop through the array and display the volunteers with a running count
    for (var i = 0; i < volunteerArray.length; i++) {
        $("volunteerList").value += (i + 1) + ". " + volunteerArray[i] + "\n";
    }
};

var addVolunteer = function () {
    // Get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // Store the data in an array
    volunteerArray.push(volunteerString);
    
    // Display the volunteers and clear the add form
    displayVolunteers();
    
    // Get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var deleteVolunteer = function () {
    // Get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // Loop through the array and remove the matching volunteer
    for (var i = 0; i < volunteerArray.length; i++) {
        if (volunteerArray[i] === volunteerString) {
            volunteerArray.splice(i, 1);
            break;
        }
    }
    
    // Display the volunteers and clear the delete form
    displayVolunteers();
    
    // Get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var clearList = function () {   
    // Delete the data from the arrays
    volunteerArray = [];
    
    // Remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    // Sort the scores
    volunteerArray.sort();
    
    // Display the scores
    displayVolunteers();    
};

// When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
    $("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};